function mytime(){
    let date = new Date()
    // console.log(date)
    let hours = (date.getHours().toString().padStart(2,'0'))
    let min= (date.getMinutes().toString().padStart(2,'0'))
    let sec= (date.getSeconds().toString().padStart(2,'0'))
    let clock = `${hours}:${min}:${sec}`
    console.log(clock)
    document.getElementById("clock").innerHTML=clock
}
setInterval(mytime, 1000);