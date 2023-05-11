
var newDiv=document.createElement('div');

 newDiv.className="hello";
 newDiv.id="hello";



 newDiv.setAttribute('title','hello div');
 

 var newDivText=document.createTextNode('Hello');
 newDiv.appendChild(newDivText)

 var container =document.querySelector('header .container')
 var h1=document.querySelector('header h1')

console.log(newDiv)

container.insertBefore(newDiv,h1)

// Step 1: Select the first list item
const firstItem = document.querySelector('#items li:first-child');
console.log(firstItem)
// Step 2: Create a new text node with the word "Hello"
const helloText = document.createTextNode('Hello');

// Step 3: Insert the text node before the first list item
firstItem.parentNode.insertBefore(helloText, firstItem);