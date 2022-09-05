const mongoose = require('mongoose')
require('dotenv').config();

const DB = {
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	url: process.env.MONGO_URL

}
const DBUrl = `mongodb+srv://${DB.username}:${DB.password}@${DB.url}?retryWrites=true&`
mongoose.connect(DBUrl, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}).then((response) => {
	console.log('DB connection successful!')
}).catch((error) => { console.log(`Error: ${error}`) })

module.exports = {
    mongoose
}