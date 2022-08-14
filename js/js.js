let ptn =document.querySelector(".menu-ptn")
let nav =document.querySelector(".navbar")
let round =document.querySelectorAll('.round a')
let bage =document.querySelector(".bage")
let menu =document.querySelectorAll(".menu-ptn span")
//scroll element
let scrol =document.querySelector(".scroll")

console.log(menu)

ptn.onclick=function(){
    nav.classList.toggle("open")
    ptn.classList.toggle("close")

}
for(let i=0; i<round.length;i++){
    round[i].onclick=()=>{
        nav.classList.toggle("open")
    }
}
//scroll method
window.onscroll=()=>{
    if(window.scrollY>=30){
        scrol.style.cssText=`visibility:visible; z-index: 1;`
    }else{
        scrol.style.cssText=`visibility:hidden;`
    }
}
scrol.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })

}
