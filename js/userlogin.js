
let loginbtn=document.querySelector('#loginbtn')

let loggedI=JSON.parse(localStorage.getItem('loggedIn'))||{}

console.log(loggedI)
if(loggedI.fullName!=undefined){
    loginbtn.innerText=`Hello ${loggedI.fullName}`
    loginbtn.parentElement.setAttribute('href','/login/profile.html')
}
