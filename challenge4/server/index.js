const http = require('http');
const fs = require('fs');
  
const port = 3000;

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type' : 'text/html',
        });
 

    const url = req.url;
    if (url === '/') { 
        fs.readFile('public/index.html', (err, data) => { 
            if (err) {
                res.writeHead(404);
                res.write('Error : file not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (url === '/carimobil') {
        fs.readFile('public/car.html', (err, data) => { 
            if (err) {
                res.writeHead(404);
                res.write('Error : file not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        //res.write('Hello world'); 
        fs.readFile('public/car.html', (err, data) => { 
            if (err) {
                res.writeHead(404);
                res.write('Error : file not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
})
    .listen(port, () => {
        console.log(`Server is listening on port ${port}..`);

    });
