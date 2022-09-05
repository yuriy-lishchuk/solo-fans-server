const getRandomTemperature = (min, max) => {
    return Math.random() * (max - min) + min;
}

module.exports = {
    getRandomTemperature,
}