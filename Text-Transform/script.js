let userinput=document.querySelector('input')
let uppercase=document.getElementById('upper')
let lowercase=document.getElementById('lower')
let camelcase=document.getElementById('camel')


function toCamelCase(str) {
    return str
        .toLowerCase() // Convert the entire string to lowercase
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

userinput.addEventListener('input',(event)=>{
    uppercase.innerText=event.target.value.toUpperCase()
    lowercase.innerText=event.target.value.toLowerCase()
    camelcase.innerText=toCamelCase(event.target.value)

})


