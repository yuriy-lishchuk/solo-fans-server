const TuyAPI = require('tuyapi')
require('dotenv').config();

const device = new TuyAPI({
    id: process.env.TUYA_ID,
    key: process.env.TUYA_KEY
})

device.find().then(() => {
    device.connect();
});

device.on('disconnected', () => {
    console.log('Disconnected from device.');
});

device.on('error', error => {
    console.log('Error!', error);
});

device.on('data', data => {
    console.log('Data from device:', data);

    console.log(`Boolean status of default property: ${data.dps['1']}.`);
});


module.exports ={
    device
}