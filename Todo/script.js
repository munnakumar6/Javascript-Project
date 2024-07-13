let userinput = document.querySelector('input')
let list=document.getElementById('listresult')


userinput.addEventListener('keyup', (e)=>{
    if(e.key==='Enter'){
        addresult(e.target.value)
        e.target.value =''
    }

})
function addresult(usertye){
    let listcreate=document.createElement('li')
    listcreate.innerHTML= `${usertye}
    <button>Delete</button>
    `;
    // localStorage.setItem(usertye)
    list.appendChild(listcreate);

    listcreate.querySelector('button').addEventListener('click',()=>{
        list.removeChild(listcreate)
    })
}
