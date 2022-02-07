
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const toggle2 = document.getElementById('toggle2');
const navbar = document.getElementById('navbar');
const ulnavbar = document.getElementById('ulnavbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle'
    && e.target.id !== 'toggle2' 
    && e.target.id !== 'navbar'  
    && e.target.id !== 'ulnavbar'){
        toggle.classList.remove('active');
        toggle2.classList.remove('active');
        navbar.classList.remove('active');
        ulnavbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    toggle2.classList.toggle('active');
    navbar.classList.toggle('active');
    ulnavbar.classList.toggle('active');
}