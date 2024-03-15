const { Client } = require('@elastic/elasticsearch')
const { createCrdEntries, generateCdr } = require('./generateCdr')
const agents = require('./agents')
const client = new Client({
    node: 'http://192.168.29.133:9200',
    // node: 'http://localhost:9200',
    auth: {
        apiKey: {
            id: 'elastic',
            api_key: 'gf1jR=dp_CHMR+5q=zK3',
        }
    },
})
const indexName = 'elastic-test-index'

async function setup() {
    const res = await client.ping()
    console.log("PING", res)
    try {
        const exists = await client.indices.exists({
            index: indexName
        })
        console.log("Exists", exists)
        if (exists) {
            console.log(`Index "${indexName}" exists.`)
        } else {
            console.log(`Creating index "${indexName}"`)
            await client.create({ index: indexName })
        }
    } catch (error) {
        console.log(`Error creating index!`)
        console.log(error)
    }
}
// setup()

async function upload() {
    // const startDate = "2024-01-01"
    // const endDate = "2024-01-31"

    // for (let i = 0; i < 150000; i++) {
    //     const agent = agents[Math.floor(Math.random() * agents.length)];
    //     const cdr = generateCdr(agent, startDate, endDate);
    // console.log(cdr.customerNumber)
    // console.log(cdr.agentName)
    // const res = await client.index({
    //     index: indexName,
    //     document: cdr
    // })
    // console.log('\033[2J');
    // console.log(i)
    // console.log(res)
    // }

    let res = await client.search({
        index: indexName,
        size: 0,
        "aggs": {

            uniqueAgents: {
                cardinality: {
                    "field": "agentName",
                }
            },
        }
    });
    console.log(res)
}
upload()
