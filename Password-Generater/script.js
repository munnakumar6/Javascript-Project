const upperval="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerval="abcdefghijklmnopqrstuvwxyz";
const numberval="1234567890";
const symboleval="~!@#$%^&*()_+/";

let userinput=document.getElementById('userinput')
let userlength=document.getElementById('usernumber')
let uppercase=document.getElementById('uppercase');
let lowercase=document.getElementById('lowercase');
let number=document.getElementById('number');
let symbole=document.getElementById('symbole');
let submit=document.querySelector('button');

// set default value 
uppercase.checked=true
number.checked=true

function passwordgenerter(){
    let password = ''
    let setchar=""

    if(uppercase.checked){
        setchar += upperval
    }
    if(lowercase.checked){
        setchar +=lowerval
    }
    if(number.checked){
        setchar +=numberval
    }
    if(symbole.checked){
        setchar +=symboleval
    }

    if(setchar=="" || setchar==0){
        return password ;
    }

    for(i=0;i<userlength.value;i++){
        password += setchar.charAt(Math.floor(Math.random() * setchar.length))
    }
 
    return password ;
}
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    userinput.value=passwordgenerter()
})


