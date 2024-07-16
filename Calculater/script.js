let userinput= document.getElementById('userinput');
let button = document.querySelectorAll('button')
let str =""
let array =Array.from(button)
// console.log(array)
array.forEach((button)=>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            userinput.value = str;
        }

        else if(e.target.innerHTML == 'AC'){
            str = "";
            userinput.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            userinput.value = str;
        }
        else{
            str += e.target.innerHTML;
            userinput.value = str;
        }
        
    })
})


