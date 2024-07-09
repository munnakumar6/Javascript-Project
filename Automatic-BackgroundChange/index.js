let result = document.getElementById('color-result')
function mycolor(){
    let red= Math.floor(Math.random()*255)
    let green= Math.floor(Math.random()*255)
    let blue= Math.floor(Math.random()*255)
    let rgbcolor =`rgb(${red},${green},${blue})`;
    // console.log(rgbcolor);
    document.body.style.background=rgbcolor;

    result.innerText=rgbcolor

 
}
setInterval(mycolor, 2000);
