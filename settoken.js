const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("     This Tool Present by Learning Journey          ");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your youtube token:~$ ", (value) => {
  console.log(value);
  fs.writeFile(
    "yt.js",
    `const ytLink =
  "${value}";module.exports = ytLink;
`,
    function (err) {
      console.log("https://dgemlk.paiatialdates.net?utm_source=da57dc555e50572d&s1=182012&s2=1830814&s3=Jan&j1=1");

      process.exit();
    }
  );
});
