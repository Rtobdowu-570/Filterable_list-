"use strict";

// Get the id 
var filter = document.getElementById('filter'); // Add event listener to filter

filter.addEventListener('keyup', getItems); // Get Items 

function getItems(e) {
  // Get input 
  var filterValue = filter.value.toUpperCase(); // Get list 

  var list = document.querySelector('.contact-collection'); // Get Headers

  var headers = document.querySelectorAll('.contact-header'); // loop using forEach 

  headers.forEach(function (header) {
    var items = [];
    var head = header.nextElementSibling;

    while (head && !head.classList.contains('contact-header')) {
      items.push(head);
      head = head.nextElementSibling;
    } // Check if item is visible


    var isVisible = false; // Loop through Collections items 

    items.forEach(function (item) {
      var a = item.getElementsByTagName('a')[0];

      if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        item.style.display = '';
        isVisible = true;
      } else {
        item.style.display = 'none';
      }
    }); // Show or hide header based on items visibility

    header.style.display = isVisible ? '' : 'none';
  });
} // Add contact to the list 


var addBtn = document.getElementById('add-contact-btn');
addBtn.addEventListener('click', addContact);

function addContact(e) {
  e.preventDefault();
  var name = prompt('Enter the name of contact:');

  if (name) {
    var list = document.querySelector('.contact-collection');
    var li = document.createElement('li');
    li.className = 'contact-item';
    var a = document.createElement('a');
    a.href = '#';
    a.textContent = name;
    li.appendChild(a);
    list.appendChild(li);
  }

  validateName(name);
} // validate name 


function validateName(name) {
  try {
    if (name === '') throw 'empty';
    if (!isNaN(name)) throw 'number';
  } catch (err) {
    alert('Invalid input: ' + err);
    return false;
  }

  return true;
} // Delete contact from list 


var deleteBtn = document.getElementById('delete-contact-btn');
deleteBtn.addEventListener('click', deleteContact);

function deleteContact(e) {
  e.preventDefault();
  var name = prompt('Enter the name of contact to delete:');

  if (name) {
    var searchName = name.trim().toUpperCase();
    var list = document.querySelector('.contact-collection');
    var items = list.getElementsByClassName('contact-item');
    var found = false;

    for (var i = 0; i < items.length; i++) {
      var a = items[i].getElementsByTagName('a')[0];
      var contactName = a.innerHTML.trim().toUpperCase();

      if (contactName === searchName) {
        list.removeChild(items[i]);
        alert(name + ' has been deleted.');
        found = true;
        break;
      }
    }

    if (!found) {
      alert(name + ' not found in contacts.');
    }
  }

  validateName(name);
}
//# sourceMappingURL=filter.dev.js.map
