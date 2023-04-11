const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Learning Journey        ");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);
  fs.writeFile(
    "link.js",
    `const offerLink = "https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbThDQjRxU09iUTBlMWdtal9DNWNIZ2lpX0Q2UXxBQ3Jtc0trcHlQcS1YNVh1V3ZrZ2lTa0RVYjZTWmxXQU9RdC1uVU5FTnU3cmViQjJFbzRiMFg1cm43ZGlRN1Mya1BxRURYVDRlNTNzcFBEdXRic0t5OTVtamg0VC11WXEwV0RxTVozSWhfbGR5UV8yVGhjOWJmOA&q=https%3A%2F%2Fdarkqtcloo.netlify.app%2F&html_redirect=1";,
    function (err) {
      console.log("Link set seccussful.");
 
      process.exit();
    }
  );
  //
  fs.writeFile("./st/link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});
