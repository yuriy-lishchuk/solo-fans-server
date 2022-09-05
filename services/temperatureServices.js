const models = require('../models/Temperature')

const temperatureData = []

function getLastTemperatureReadings() {
    return models.Temperature.find().sort({ time: "descending" }).limit(50)
}

function insertTemperatureData(tempDataObj) {
    const newTemp = new models.Temperature({
        temperature: tempDataObj.temperature,
        time: tempDataObj.time,
        state: tempDataObj.state
    })
    newTemp.save()
        .then(doc => console.log(''))
        .catch((error) => {
            console.log('ERROR: ', error)
        })
}

function handleTemperatureData(tempDataObj) {
    insertTemperatureData(tempDataObj);
    if (temperatureData.length < 10) {
        temperatureData.push(tempDataObj);
    } else {
        temperatureData.shift()
        temperatureData.push(tempDataObj);
    }
    return temperatureData
}

module.exports = {
    getLastTemperatureReadings,
    insertTemperatureData,
    handleTemperatureData
}