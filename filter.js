let filter = document.querySelector('#filter');
filter.addEventListener('keyup', fill);

function fill() {
    // Getting the input value
    let filterText = document.querySelector('#filter').value.toUpperCase();
    
    // Getting the ul
    let ul = document.getElementById('names');
    
    // Getting list from ul
    let li = ul.querySelectorAll('li.contact');
    
    // Loop through using For
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterText) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
};
