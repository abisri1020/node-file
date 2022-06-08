const fs = require("fs");
const quote = `✨ Aspire to inspire before we expire ✨`;

const n = process.argv[2];
console.log(process.argv);

for (let i = 1; i <= n; i++) {
    fs.writeFile(`./backup/text-${i}.html`, quote, (err) => {
        console.log("completed 👍 !!!");
    });
}
for (let i = 1; i <= 10; i++) {
    fs.writeFile(`./backup/text-${i}.html`, quote, (err) => {
        console.log("completed 👍 !!!");
    });
}
