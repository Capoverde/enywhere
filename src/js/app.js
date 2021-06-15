import '../scss/app.scss'
/* Demo JS */
import './navbar.js'
import $ from "jquery";

/* Your JS Code goes here */
console.log('%c Hello from app.js', 'color: #ffc600; background: #000; padding: 5px 10px; margin: 5px 25px; font-size:2em;')

$('.navbar__link').on('click', function() {
    $('.navbar__link').removeClass('.navabr__link--active');
    $(this).addClass('.navbar__link--active');
});