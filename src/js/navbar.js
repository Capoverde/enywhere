console.log('%c Hello from Demo.js', 'color: #bada55; background: #000; padding: 5px 10px; margin: 5px 25px; font-size:2em;')

const links = document.getElementsByClassName("navbar__link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("navbar__link--active");
  current[0].className = current[0].className.replace(" navbar__link--active", "");
  this.className += " navbar__link--active";
  });
}

