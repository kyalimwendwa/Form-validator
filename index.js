let navigation_bar=document.getElementById('navbar');
let menus_btn=document.getElementById('menu-btn');
let close_btn=document.getElementById('close-btn');


if(menus_btn){
    menus_btn.addEventListener('click',()=>{
        navigation_bar.classList.add('show-menu')
    })
}
if(close_btn){
    close_btn.addEventListener('click',()=>{
        navigation_bar.classList.remove('show-menu')
    })
}