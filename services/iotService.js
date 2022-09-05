const fb = require('./../config/firebase')
const admin = fb.admin; 

function getTemperatureSensorData() {
    var db = admin.database();
    var ref = db.ref("/tempObj")
    ref.once("value", (snapshot) => {
        let tempData = snapshot.val();
        const actualTemperatureData = tempData.temperature;
        console.log('firebase data: ', actualTemperatureData)
    })
}

function toggleFan(tempVal, state, device) {
    if (tempVal >= 80 && state == false) {
        state = true
        device.set({ set: true });
    }
    if (tempVal < 80 && state == true) {
        state = false
        device.set({ set: false });
    }
    return state;
}


module.exports = {
    toggleFan,
    getTemperatureSensorData
}