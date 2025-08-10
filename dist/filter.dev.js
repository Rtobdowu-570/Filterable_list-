"use strict";

var filter = document.querySelector('#filter');
filter.addEventListener('keyup', fill);

function fill() {
  // Getting the input value
  var filterText = document.querySelector('#filter').value.toUpperCase(); // Getting the ul

  var ul = document.getElementById('names'); // Getting list from ul

  var li = ul.querySelectorAll('li.contact'); // Loop through using For

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0];

    if (a.innerHTML.toUpperCase().indexOf(filterText) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

;
//# sourceMappingURL=filter.dev.js.map
