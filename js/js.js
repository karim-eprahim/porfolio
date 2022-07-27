let ptn =document.querySelector(".menu-ptn")
let nav =document.querySelector(".navbar")
let round =document.querySelectorAll('.round a')
let bage =document.querySelector(".bage")
let menu =document.querySelectorAll(".menu-ptn span")

console.log(menu)

ptn.onclick=function(){
    nav.classList.toggle("open")

}
for(let i=0; i<round.length;i++){
    round[i].onclick=()=>{
        nav.classList.toggle("open")
    }
}
