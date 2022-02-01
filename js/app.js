
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const ulnavbar = document.getElementById('ulnavbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'  && e.target.id !== 'ulnavbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        ulnavbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
    ulnavbar.classList.toggle('active');
}