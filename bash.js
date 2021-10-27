const pwdFIle = require("./pwd");
const lsFile = require("./ls");
const catFile = require("./cat");
let httpFIle = require("./curl");

process.stdin.on("data", (data) => {
  let dataStr = data.toString().trim();
  let com = dataStr.split(" ")[0];
  let file = dataStr.split(" ")[0];
  if (com === "pwd") {
    pwdFIle.pwd(com);
  } else if (com === "ls") {
    lsFile.ls(com);
  } else if (com === "cat") {
    catFile.cat(file);
  } else if (com === "curl") {
    httpFIle.curl(file);
  }
});

process.stdout.write("\nprompt > ");
