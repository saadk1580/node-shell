// const req = require("request");

// const curl = (url) => {
//   //   const httpReq = new XMLHttpRequest();
//   //   httpReq.open("GET", url, false);
//   //   httpReq.send(null);
//   //   process.stdout.write(httpReq.responseText);
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url);

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//       process.stdout.write(xhr.responseText);
//     }
//   };

//   xhr.send();
// };

// module.exports = {
//   curl,
// };

const request = require("request");

const curl = (site) => {
  const options = {
    url: site,
    method: "GET",
  };

  request(options, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    process.stdout.write(JSON.parse(body));
  });
  process.stdout.write("\nprompt > ");
};

module.exports = { curl };
