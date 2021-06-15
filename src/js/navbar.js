console.log('%c Hello from Demo.js', 'color: #bada55; background: #000; padding: 5px 10px; margin: 5px 25px; font-size:2em;')


const activeclass = document.querySelectorAll('.navbar__link--active');
   

function activateClass(e) {
    var previous = e.target.previousElementSibling;
    var next = e.target.nextElementSibling;
    e.target.classList.add('navbar__link--active');
    previous.classList.remove('navbar__link--active');
    next.classList.remove('navbar__link--active');
}


activeclass.forEach(link => link.addEventListener('click', activateClass)
