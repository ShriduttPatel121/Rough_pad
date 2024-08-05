const jsonFile = require('./user_roles_is_verified_coordinates.json');
const fs = require('fs');

fs.writeFileSync('./array.json', JSON.stringify({arr:  jsonFile.map(v => v.customer_id)}))