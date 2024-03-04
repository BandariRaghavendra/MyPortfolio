let instagram=document.getElementById("insta")
let facebook=document.getElementById("face")
let about=document.getElementById("about")
instagram.addEventListener("click",function(){
window.location.href="https://www.instagram.com/raghava9951?igsh=Yno5MGp0dmJ3NzFp"   
})
facebook.addEventListener("click",function(){
window.location.href="https://www.facebook.com/raghu.don.3551380?mibextid=ZbWKwL"
})
about.addEventListener("click",()=>{
let h3=document.createElement("h3")
h3.innerText="Raghu"
h3.style.color="white"
document.body.append(h3)
})