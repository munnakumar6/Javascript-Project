
let randomnumber = parseInt(Math.random() * 100 +1);
let userinpute= document.getElementById('data');
let submitgame= document.getElementById('submit');
let gameover=document.getElementById('end')
let allguessnumber = document.getElementById('userguessnumber');
let attempt=document.getElementById('usertrygame');
let res=document.getElementById('msg')
let restart=document.querySelector('.tostart')

let guessnumber =[]
trygame=0;
let startgame=  true;

if(startgame){
    submitgame.addEventListener('click',(event)=>{
        event.preventDefault()
        let userguess = parseInt(userinpute.value)
        checkinputes(userguess)
    })
}

gameover.addEventListener('click', (event) => {
    event.preventDefault();
    if (startgame) {
        endgame();
    } else {
        gamestart();
    }
});

// restart.addEventListener('click', (event) => {
//     event.preventDefault();
//     gamestart();
// });

function checkinputes(userguess){
    if(userguess<1){
        alert('Please Enter a Valid Number !')
    }
    else if(userguess>100){
        alert('Please Enter Valid Number 1 and 100')
    }
    else if(isNaN(userguess)){
        alert("Please Enter a Valid Number !")
    }
    guessnumber.push(userguess)
    showresult(userguess)
    matchrandomnumber(userguess)
}

function matchrandomnumber(userguess){
    if(userguess===randomnumber){
        res.innerText='Congratulations!'
        endgame()
    }
    else if(userguess<randomnumber){
        res.innerText='your number is too low'
    }
    else if(userguess>randomnumber){
        res.innerText='to high number'
    }
    

}
function showresult(userguess){
    userinpute.value=''
    allguessnumber.innerHTML += `${userguess}, `
    trygame++;
    attempt.innerHTML= `${trygame}`
}

function gamestart(){
    randomnumber = parseInt(Math.random() * 100 + 1);
    guessnumber = []; 
    trygame = 0; 
    startgame = true; 
    submitgame.disabled = false; 
    userinpute.disabled = false; 
    res.innerText = ''; 
    allguessnumber.innerHTML = 'Previous Guess: '; 
    attempt.innerHTML = ''; 
    submitgame.innerText='Game Over'
    submitgame.style.backgroundColor='lime'
    gameover.style.backgroundColor='red'
    submitgame.innerHTML='Game Start'
    gameover.innerText='Game Over'



}

function endgame(){
    startgame = false;
    submitgame.disabled = true;
    userinpute.disabled = true;
    gameover.innerText='Start Game'
    submitgame.style.backgroundColor='gray'
    gameover.style.backgroundColor='lime'
    submitgame.style.color='white'
    submitgame.innerHTML='Game Over'
    gameover.removeAttribute('id')
    gameover.setAttribute('class','tostart')
}



