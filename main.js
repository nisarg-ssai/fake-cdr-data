const { createCrdEntries } = require("./generateCdr.js");

Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const startDate = new Date("2024-01-01")
const endDate = new Date("2024-01-01")
const dailyCount = 5;

let curr_date = startDate

console.time("generate")
while (curr_date <= endDate){
    const filepath = `output/${curr_date.getDate()}.${curr_date.getMonth() + 1}.CDR.json`;
    createCrdEntries(dailyCount, startDate, endDate, filepath);
    curr_date = curr_date.addDays(1)
}
console.timeEnd("generate")
