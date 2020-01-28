const { Readable, Transform } = require("stream");
const fs = require("fs");
const moment = require("moment");

class MyReadable extends Readable {
  _read(size) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.push(moment());
      }, 1000);
    }
  }
}

class MyTransform extends Transform {
  _transform(chunk, _, next) {
    this.push(chunk.format());
    next();
  }
}

const fileWriteStream = fs.createWriteStream("file.txt");
const readableStream = new MyReadable({
  objectMode: true
});
const transformStream = new MyTransform({
  writableObjectMode: true
});

readableStream.pipe(transformStream).pipe(fileWriteStream);
