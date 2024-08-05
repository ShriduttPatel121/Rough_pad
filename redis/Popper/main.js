const { createClient } = require('redis');

const getRandomNumber = () => Math.random() * 1000

const wait = (waitFor = 800) => new Promise(res => setTimeout(res, waitFor));


async function main() {
    const client = createClient();
    await client.connect();
    client.on('error',(e) => {
        console.log("🚀 ~ client.on ~ e: FOR POPPER", e)  
    });
    while (true) {
        const response = await client.rPop("COUNTER");
        console.log("🚀 ~ main ~ response:", response)
        await wait(getRandomNumber());
    }
}

main();
