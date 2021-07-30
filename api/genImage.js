const fs = require('fs');
const PNG = require('pngjs').PNG;

const fileName = 'image.png';

const generate = (height, width) => {
  const png = new PNG({
    width: width,
    height: height,
    filterType: -1,
  });

  for (var y = 0; y < png.height; y++) {
    for (var x = 0; x < png.width; x++) {
      var idx = (png.width * y + x) << 2;
      png.data[idx] = 255; // red
      png.data[idx + 1] = 218; // green
      png.data[idx + 2] = 185; // blue
      png.data[idx + 3] = 128; // alpha (0 is transparent)
    }
  }

  png.pack().pipe(fs.createWriteStream(fileName));
  return fileName;
};

module.exports = {
  generate,
};
