let about = document.querySelector('.about-yassin')
window.addEventListener('scroll',()=>{
    let rect = about.getBoundingClientRect();
    if(rect.top < window.innerHeight - 200){
        about.classList.add('show')
    }
})

let matchs = document.querySelector('.yassin-matchs')

window.addEventListener('scroll',()=>{
    let rect = matchs.getBoundingClientRect();
    if(rect.top < window.innerHeight - 200){
        matchs.classList.add('show')
    }
})

function scroll(){
let ele = document.querySelector("#about")
ele.scrollIntoView({behavior:'smooth'})
}