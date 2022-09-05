const formatTime = ()=>{
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    if(hours < 10){
        hours = `0${hours}`
    }
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}



module.exports = {
    formatTime
}