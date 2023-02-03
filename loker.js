const navBar = document.querySelector('.navbar-nav');
document.querySelector('#humberger-menu').onclick = () =>{
    navBar.classList.toggle('active');
}

// event humberger
const humberger = document.querySelector('#humberger-menu');
document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && !navBar.contains(e.target)){
        navBar.classList.remove('active');
    }
});


