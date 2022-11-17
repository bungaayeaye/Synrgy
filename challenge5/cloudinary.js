// Require the Cloudinary library
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dtvatwzac',
  api_key: '688959525615171',
  api_secret: 'QPIIgeU3gDwdOlR9EMa7FDr7BaM',
});

module.exports = cloudinary;
