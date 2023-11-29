const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const folder = path.resolve(__dirname, 'src/public/images');
const outputFolder = path.resolve(__dirname, 'src/public/images/resized');

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(folder).forEach((image) => {
  sharp(`${folder}/${image}`)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${outputFolder}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ),
    );

  sharp(`${folder}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${outputFolder}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ),
    );
});
