var li=document.getElementsByTagName('li');
console.log(li);
li[1].textContent="Hello";
li[1].style.fontWeight="bold";
li[1].style.backgroundColor="yellow";

for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor="grey"
}