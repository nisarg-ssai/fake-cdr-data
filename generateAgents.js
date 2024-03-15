const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

function generateAgent(create_at, update_at) {
    const name = faker.person.firstName().toLowerCase();
    const now = new Date();
    create_at = `${faker.date.past({ years: 3, refDate: now }).toISOString()}`;
    update_at = `${faker.date.between({ from: create_at, to: now }).toISOString()}`;

    const agent = {
        name,
        user_name: `${name}agent`,
        email: `${name}@gmail.com`,
        role: Math.floor(Math.random() * 6),
        userId: uuidv4(),
        create_at,
        update_at,
    };
    return agent;
}

const agentArray = [];
for (let i = 0; i < 15; i++) {
    agentArray.push(generateAgent());
}

try {
    const text = `const agents = ${JSON.stringify(agentArray, null, 4)}
module.exports = agents;
    `;
    fs.writeFileSync("agents.js", text);
} catch (error) {
    console.log(error);
}
