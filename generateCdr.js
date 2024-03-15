const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const agents = require("./agents");
const fs = require("fs");

function generateCdr(agent, startDate, endDate) {
    const customerPhoneNumber = faker.string.numeric(10);
    // const agentFirstName = faker.person.firstName().toLocaleLowerCase();

    const cdr = {
        // sessionId: "ee6ef064-c663-4723-a314-3b1bcfeefd92",
        sessionId: uuidv4(),
        // date: "2024-03-14 18:34:34",
        date: faker.date.between({ from: startDate, to: endDate }),
        // customerNumber: "8160634703",
        customerNumber: customerPhoneNumber,
        customerInfo: {
            // listId: "904e731b-c95c-463a-8901-635272f6b8f4",
            listId: uuidv4(),
            // updateBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
            updateBy: uuidv4(),
            // update_at: "2023-12-21T07:06:37.847Z",
            update_at: faker.date.future({ refDate: startDate }),
            // publicInfo: "c8ff20e5-46cb-421a-b647-805da535631e",
            publicInfo: uuidv4(),
            // phone_number: "8160634703",
            phone_number: customerPhoneNumber,
            // _id: "8160634703",
            _id: customerPhoneNumber,
        },
        // agentName: "himanshuagent",
        agentName: agent.name + "agent",
        agentInfo: agent,
        campaign: "-",
        // dnis: "13214996271",
        dnis: uuidv4(),
        // callingMode: "Manual", // "Auto"|"Preview",
        callingMode: ["Manual", "Auto", "Preview"][
            Math.floor(Math.random() * 3)
        ],
        // ivrTime: "-",
        ivrTime: Math.floor(Math.random() * 30),
        // queueTime: "-",
        queueTime: Math.floor(Math.random() * 30),
        // ringing: 12,
        ringing: Math.floor(Math.random() * 30),
        // talkTime: "-",
        talkTime: Math.floor(Math.random() * 30),

        DTMFs: "-",
        CSATs: "-",
        tag: "wrong number",
        firstLevel: "wrong number",
        secondLevel: "-",
        thirdLevel: "-",
        Answered: Date.now() % 2 === 0,
        List: "-",

        hold: "-",
        mute: "-",

        comment: "-",
        disconnectedBy: "AGENT",
        flow: "-",
        hungupCauseCode: "200",
        hungupCause: "NORMAL_CLEARING",
        recording: `${uuidv4()}.wav`,
        teamName: "My Team",
        holdCount: "-",
        muteCount: "-",
        state: "-",
        circle: "-",
        slotsData: "-",
        dropReason: "FAILED",
    };

    return cdr;
}

function createCrdEntries(count, startDate, endDate, filepath = null) {
    const cdrArray = [];
    for (let i = 0; i < count; i++) {
        const agent = agents[Math.floor(Math.random() * agents.length)];
        const cdr = generateCdr(agent, startDate, endDate);
        cdrArray.push(cdr);
    }
    if (filepath) {
        const text = `${JSON.stringify(cdrArray, null, 4)}`;
        try {
            fs.writeFileSync(filepath, text);
        } catch (error) {
            console.log(error);
        }
    }
    return cdrArray
}

module.exports = { createCrdEntries, generateCdr };
