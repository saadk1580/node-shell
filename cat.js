const fs = require("fs");

let cat = (filename) => {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data.join("\n"));
      process.stdout.write("prompt >");
    }
  });
};

module.exports = {
  cat,
};
