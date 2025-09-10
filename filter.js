// Get the id 
let filter = document.getElementById('filter');

// Add event listener to filter
filter.addEventListener('keyup', getItems);

// Get Items 
function getItems (e) {
   // Get input 
   let filterValue = filter.value.toUpperCase();

   // Get list 
   let list = document.querySelector('.contact-collection');

   // Get Headers
   let headers = document.querySelectorAll('.contact-header');

      // loop using forEach 
       headers.forEach((header => {
        let items = [];
         let head = header.nextElementSibling;
         while (head && !head.classList.contains('contact-header')) {
            items.push(head);
            head = head.nextElementSibling;
         }
      

       // Check if item is visible
       let isVisible = false;


   // Loop through Collections items 
   items.forEach((item) => {
      let a = item.getElementsByTagName('a')[0];
      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
         item.style.display = '';
         isVisible = true;
      } else {
         item.style.display = 'none';
      }
      });


   // Show or hide header based on items visibility
   header.style.display = isVisible ? '' : 'none';

    }));

   }

   // validate name 
function validateName(name) {
  try {
    if (name === '') throw 'empty';
    if (!isNaN(name)) throw 'number';
  } catch (err) {
    alert('Invalid input: ' + err);
    return false;
  }
  return true;
}


// Add contact to the list 
const addBtn = document.getElementById('add-contact-btn');
addBtn.addEventListener('click', addContact); 
   
function addContact(e) {
   e.preventDefault();
   const name = prompt('Enter the name of contact:');
   
   if (!validateName(name)) {
  return; // stop if invalid
   }
   if (name) {
      const list = document.querySelector('.contact-collection');
      const li = document.createElement('li');
      li.className = 'contact-item';
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = name;
      li.appendChild(a);
      list.appendChild(li);
   }
   
}


// Delete contact from list 
const deleteBtn = document.getElementById('delete-contact-btn');
deleteBtn.addEventListener('click', deleteContact);
function deleteContact(e) {
   e.preventDefault();
   const name = prompt('Enter the name of contact to delete:');

   if (!validateName(name)) {
     return; // stop if invalid
   }

   if (name) {
     const searchName = name.trim().toUpperCase();
     const list = document.querySelector('.contact-collection');
     const items = list.getElementsByClassName('contact-item');
     let found = false;

     for (let i = 0; i < items.length; i++) {
      let a = items[i].getElementsByTagName('a')[0];
      let contactName = a.innerHTML.trim().toUpperCase();
      if(contactName === searchName) {
         list.removeChild(items[i]);
         alert(name + ' has been deleted.');
         found = true;
         break;
     }
   }
   if(!found) {
      alert(name + ' not found in contacts.');
   }
   }
   
}