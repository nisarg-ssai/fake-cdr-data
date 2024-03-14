import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

function generateDoc(startDate, endDate) {
    const customerPhoneNumber = faker.phone.number();
    const agentFirstName = faker.person.firstName().toLocaleLowerCase();
    const doc = {
        // sessionId: "ee6ef064-c663-4723-a314-3b1bcfeefd92",
        sessionId: uuidv4(),
        // date: "2024-03-14 18:34:34",
        date: faker.date.between({ startDate, endDate }),
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
        agentName: agentFirstName + "agent",
        agentInfo: {
            // create_at: "2023-08-08T10:41:40.170Z",
            create_at: faker.date.past({ refDate: startDate }),
            // email: "himanshuagent@gmail.com",
            email: `${agentFirstName}@gmail.com`,
            role: 6,
            // userId: "ea3ffe57-5734-4159-82bd-596df7a68830",
            userId: uuidv4(),
            update_at: faker.date.future({ refDate: startDate }),
            name: "himanshuagent",
            name: agentFirstName + "agent",
            user_name: "himanshuagent",
            user_name: agentFirstName + "agent",
        },
        campaign: "-",
        // dnis: "13214996271",
        dnis: uuidv4(),
        // callingMode: "Manual", // "Auto"|"Preview",
        callingMode: ["Manual", "Auto", "Preview"][
            Math.floor(Math.random() * 3)
        ],
        ivrTime: "-", // 1 30
        queueTime: "-",
        ringing: 12,
        talkTime: "-",

        DTMFs: "-",
        CSATs: "-",
        tag: "wrong number",
        firstLevel: "wrong number",
        secondLevel: "-",
        thirdLevel: "-",
        Answered: "false",
        List: "-",

        hold: "-",
        mute: "-",
        
        comment: "-",
        disconnectedBy: "AGENT",
        flow: "-",
        hungupCauseCode: "200",
        hungupCause: "NORMAL_CLEARING",
        recording: "ccf80371-7fd6-4008-8a5d-f93dacdd2eec.wav",
        teamName: "My Team",
        holdCount: "-",
        muteCount: "-",
        state: "-",
        circle: "-",
        slotsData: "-",
        dropReason: "FAILED",
    };
}
