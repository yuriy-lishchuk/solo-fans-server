const config= require('./../config/mongo')

const TemperatureSchema = new config.mongoose.Schema({
    temperature: Number,
	time: String,
	state: Boolean
})
const Temperature = config.mongoose.model('temp', TemperatureSchema);

module.exports = {
    Temperature,
	TemperatureSchema
}