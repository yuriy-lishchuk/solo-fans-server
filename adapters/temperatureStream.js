const tempUtil = require('./../utils/temperatureUtil')
const timeUtil = require('./../utils/timeUtil')
const tuyaDevice = require('./../config/device')
const temperatureService = require('./../services/temperatureServices')
const iotService = require('./../services/iotService')

const device = tuyaDevice.device;
let stateHasChanged = false;

function initStream(socket) {
    temperatureService.getLastTemperatureReadings().then(streamData=>{
        socket.emit('newStream', streamData)
    })
}

function handleStream(socket) {
    device.on('connected', () => {
        console.log('Connected to device!');
    });
    socket.on('disconnect', () => {
        device.disconnect();
    })
    setInterval(() => {
        // iotService.getTemperatureSensorData();
        const temperatureValue = tempUtil.getRandomTemperature(55, 95).toFixed(1)
        const formattedTime = timeUtil.formatTime();
        stateHasChanged = iotService.toggleFan(temperatureValue, stateHasChanged, device);
        const tempDataObj = { temperature: temperatureValue, time: formattedTime, state: stateHasChanged}
        temperatureService.handleTemperatureData(tempDataObj);
        socket.emit("temperatureData", tempDataObj)
    }, 10000)
}

module.exports = {
    handleStream,
    initStream
}