let plusbtn = document.getElementById('plusbtn')
let minsbtn = document.getElementById('minsbtn')
let resnumber = document.getElementById('number')
let message = document.getElementById('msg')
let inp=document.querySelector('input')

plusbtn.addEventListener('click',()=>{
  let pluseval= +(number.innerText);
  let inpval= parseInt(inp.value)
  let newval =number.innerText = pluseval + inpval
  message.innerText =`Your Number is Increse ${newval} Times....!`

})
minsbtn.addEventListener('click',()=>{
    let pluseval= +(number.innerText);
    let inpval= parseInt(inp.value)
    let newval = number.innerText = pluseval - inpval
     message.innerText =`Your Number is Decres ${newval} Times...! `
  })
