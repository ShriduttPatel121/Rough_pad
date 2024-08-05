const { createClient } = require('redis');

const publisher = createClient();
publisher.connect();
publisher.on('error',(e) => {
    console.log("🚀 ~ client.on ~ e: FOR PUBLISHER", e)  
});
function publishMessage( message) {
    publisher.lPush("COUNTER", message);
}

module.exports = { publishMessage };