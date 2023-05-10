var header=document.querySelector('#main-header');
header.style.borderBottom="solid";

var item=document.querySelector('.list-group-item');
item.style.color="red";

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color="blue";

//QuerySelectorAll

var odd=document.querySelectorAll('.li:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="red";
}

