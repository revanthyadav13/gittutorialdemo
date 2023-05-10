var headerTitle=document.getElementById('header-title');
console.log(headerTitle);

var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent="Hello";
items[1].style.fontWeight="bold";
items[1].style.backgroundColor="yellow";