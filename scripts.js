let nav_btn = document.getElementById('nav__btn');
let nav_links = document.getElementById('nav__links');

nav_btn.addEventListener('click',()=>{
    nav_links.classList.toggle('show');
})

