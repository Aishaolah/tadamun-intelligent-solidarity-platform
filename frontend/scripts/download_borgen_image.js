const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://borgenproject.org/wp-content/uploads/Disability-and-Poverty-in-Algeria.jpg';
const outPath = path.join(__dirname, '..', 'public', 'Disability-and-Poverty-in-Algeria.jpg');

console.log('Downloading image:', imageUrl);

https.get(imageUrl, (res) => {
  if (res.statusCode !== 200) {
    console.error('Failed to download image, status code:', res.statusCode);
    process.exit(1);
  }

  const fileStream = fs.createWriteStream(outPath);
  res.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Saved image to', outPath);
  });
}).on('error', (err) => {
  console.error('Error while downloading image:', err.message);
});
