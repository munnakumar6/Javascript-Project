let showeres = document.getElementById('timer');
let stop=document.getElementById('stopbtn')
let start=document.getElementById('startbtn');
let reset=document.getElementById('resetbtn');

let hours =0;
let minutes=0;
let seconds=0;
let starttimer =false;
let timerid


function display(){
 let h=  hours < 10 ? '0' + hours :hours
 let m=  minutes < 10 ? '0' + minutes :minutes
 let s=  seconds < 10 ? '0' + seconds :seconds
 showeres.textContent=`${h} : ${m} : ${s}`
  
}

start.addEventListener('click' ,()=>{
    if(!starttimer){
        starttimer =true;
        timerid =setInterval(() => {
            seconds ++
            if(seconds==60){
                seconds=0;
                minutes++
                if(minutes==60){
                    minutes=0;
                    hours++
                }
            }
            display()
        }, 500);
    }
    
})

stop.addEventListener('click',()=>{
  if(starttimer){
    clearInterval(timerid)
    starttimer=false
  }
})

reset.addEventListener('click',()=>{
    clearInterval(timerid)
    starttimer=false
    hours=0
    minutes=0
    seconds=0
    display()

  
})

