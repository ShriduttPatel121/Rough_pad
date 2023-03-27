const keys1 = ['name', 'address.city.name', 'address.city.pincode', 'address.state'];
const values2 = ['Joe', 'Ahmedabad', '380001', 'Gujarat']; 
const Output =
{
    name: 'Joe',
    address: {
        city: {
            name: 'Ahmedabad',
            pincode: '380001',
        },
        state: 'Gujarat'
    }
};

function genObj(key = "", value, result) {
    if(!key.includes(".")) {
        result[key] = value;
        return 
    }
    const internalKey = key.substring(0, key.indexOf("."));
    !result[internalKey] ? result[internalKey] = {} : null;
    genObj(key.substring(key.indexOf(".") + 1), value, result[internalKey]);
}

function genOutput(keys, values) {
  const result = {};
  for(let i = 0; i < keys.length; i++) {
    genObj(keys[i], values[i], result);
  }
  return result;
}

console.log(genOutput(keys1, values2));

