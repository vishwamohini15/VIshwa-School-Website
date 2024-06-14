//change navbar styles on scroll

window.addEventListener("scroll",()=>{
     document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})


// ----------show/hide faq Answer

let faqs=document.querySelectorAll(".faq")
let torn=true;

faqs.forEach(faq=>{
     faq.addEventListener("click",()=>{
          faq.classList.toggle("open")

          //change icon
          const icon=document.querySelector(".faq__icon ")
          if (torn===true) {
               icon.innerHTML='<img src="minus.svg" alt="">'
               torn=false;
          }else{
               icon.innerHTML='<img src="plus.svg" alt="">'
               torn=true;
          }
         
     })
})



// ............HAMBURGER for tablet................
let show=true;
let menuItem=document.querySelector(".nav__menu")
let closeMenu=document.querySelector("#close-menu-btn")
let menuEL=document.querySelector("#open-menu-btn")

menuEL.addEventListener("click",()=>{
     if (show===true) {
  menuItem.style.display="block"
 menuEL.innerHTML=`<img src="close.svg" alt="">`
     show=false;
     }
     else{
menuItem.style.display="none"
menuEL.innerHTML=`<img src="menu.svg" alt="">`
      show=true
     }
})