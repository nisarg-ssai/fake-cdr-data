const { createCrdEntries } = require("./generateCdr.js");

const startDate = new Date('2024-03-01T00:00:00.000Z')
const endDate = new Date('2024-06-01T00:00:00.000Z')
const dailyCount = 5000;
const filepath = "./cdrs.json";

Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let curr_date = startDate

console.time("generate")
while (curr_date <= endDate){
    createCrdEntries(dailyCount, startDate, endDate, `output/${curr_date.getUTCDate()}.${curr_date.getMonth() + 1}.CDR.json`);
    curr_date = curr_date.addDays(1)
}
console.timeEnd("generate")
