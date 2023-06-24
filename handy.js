const drop = document.querySelector('#active');
const i = document.querySelector('#active i')
drop.addEventListener('click',()=>{
    drop.classList.toggle('active')
    i.classList.toggle('')
})
// const cond = true
// drop.addEventListener('mouseover',()=>{
//      drop.classList.add('active') 
    
      
// })
// drop.addEventListener('mouseout',()=>{
//      drop.classList.remove('active')
// })
const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.da')
const navList2 = document.querySelector('.navlist2')

// menu.onclick = ()=>{
//     menu.classList.toggle('bx-x');
//     navList.classList.toggle('open')
// }
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open')
  
})
