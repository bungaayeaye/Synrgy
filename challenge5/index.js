const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const uploadOnMemory = require('./uploadOnMemory');
const cloudinary = require('./cloudinary');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;


app.get('/', async (req, res) => {
  try {
    const users = await axios.get('http://localhost:3000/cars');
    res.render('index', users.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// tambah
app.get('/add-car', (req, res) => {
  res.render('tambah_cars');


app.get('/update-car/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const cars = await axios.get(`http://localhost:3000/cars/${id}`);
    res.render('edit', cars.data);
    const a = cars.car;
    console.log(cars.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post('/update-car/:id', uploadOnMemory.single('foto'), (req, res) => {
  const fileBase64 = req.file.buffer.toString('base64');
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, { folder: 'test' }, async function (err, result) {
    if (!!err) {
      console.log(err);
      return res.status(400).json({
        message: 'Gagal upload file!',
      });
    }

    const id = req.params.id;
    const body = req.body;
    body.foto = result.url;
    try {
      const users = await axios.put(`http://localhost:3000/cars/${id}`, body);
      return res.redirect('/');
    } catch (err) {
      return res.status(500).json(err);
    }
  });
});
});

// post 
app.post('/add-car', uploadOnMemory.single('foto'), (req, res) => {
  const fileBase64 = req.file.buffer.toString('base64');
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, { folder: 'test' }, async function (err, result) {
    if (!!err) {
      console.log(err);
      return res.status(400).json({
        message: 'Gagal upload file!',
      });
    }

    const body = req.body;
    body.foto = result.url;
    try {
      const users = await axios.post('http://localhost:3000/cars', body);
      return res.redirect('/');
    } catch (err) {
      return res.status(500).json(err);
    }
  });
});



// hapus
app.get('/delete-cars/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const users = await axios.delete(`http://localhost:3000/cars/${id}`);
    res.redirect('/');
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
