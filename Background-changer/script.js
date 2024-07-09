
let body = document.querySelector('body')
let blue =document.getElementById('blue')
let Yellow =document.getElementById('Yellow')
let Green =document.getElementById('Green')
let Orange =document.getElementById('Orange')
let Black =document.getElementById('Black')
let purple =document.getElementById('purple')
let changer=document.getElementById('bgchanger')
let picker = document.getElementById('picker')

blue.addEventListener('click',()=>{
    body.style.backgroundColor ="blue";
})
Yellow.addEventListener('click',()=>{
    body.style.backgroundColor ="Yellow";
})
Green.addEventListener('click',()=>{
    body.style.backgroundColor ="Green";
})
Orange.addEventListener('click',()=>{
    body.style.backgroundColor ="Orange";
})
Black.addEventListener('click',()=>{
    body.style.backgroundColor ="Black";
})
purple.addEventListener('click',()=>{
    body.style.backgroundColor ="purple";
})

changer.addEventListener('change',(e)=>{
    body.style.backgroundColor=e.target.value
})

picker.addEventListener('input',(e)=>{
    body.style.backgroundColor=e.target.value

})

