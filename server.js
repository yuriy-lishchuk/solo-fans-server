const express = require('express');
const socket = require('socket.io')
const app = new express();
const cors = require('cors')
const stream = require('./adapters/temperatureStream')
const temperatureService = require('./services/temperatureServices')


app.use(cors())
let server = app.listen(3030, function () {
	console.log('Server started!');
});
app.get('/getTemperatureData', async(req, res) => {
	const temperatureData = await temperatureService.getLastTemperatureReadings();
	res.json(temperatureData);
})

const io = socket(server, {
	cors: {
		origin: "http://localhost:8000",
		methods: ["GET", "POST"],
		credentials: true,
	}
});

io.on("connection", function (socket) {
	console.log("Socket Connection Established with ID :" + socket.id)
	stream.initStream(socket);
	stream.handleStream(socket)
})