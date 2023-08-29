// console.log("This is the testing page.");

const fs = require("fs");

fs.writeFile("messageasq.txt","This message is from Asq.", (err) => {
    if (err) throw err;
    console.log("The file is saved.");
});

// import { readFile } from 'node:fs';

fs.readFile('./message.txt', "utf-8", (err, data) => {
    if (err) throw err;
  console.log(data);
}); 