 document.addEventListener("DOMContentLoaded", fetchFromCrudCrud);


function fetchFromCrudCrud() {
  axios
    .get("https://crudcrud.com/api/cb15e48f3afe4585981a15ffb0aa08dc/stockManagement")
    .then((obj) => {
      let userData = obj.data;
      userData.forEach((data) => showStockDetails(data));
    });
}


document.getElementById("candyName").focus();

var addItemBtn=document.getElementById("addItem");

addItemBtn.addEventListener('click',saveToCrudCrud);

function saveToCrudCrud(event){
    event.preventDefault();

    const candyName=document.getElementById("candyName").value;
    const description=document.getElementById("description").value;
    const price=document.getElementById("price").value;
    const quantity=document.getElementById("quantity").value;

    const details={candyName:candyName, 
        description:description, 
        price:price,
        quantity:quantity}

        axios.post('https://crudcrud.com/api/cb15e48f3afe4585981a15ffb0aa08dc/stockManagement',details)
        .then((response)=>{showStockDetails(response.data)})

        .catch((err)=>console.log(err))
   }

   function showStockDetails(details){
    var parentEle= document.getElementById("list-items");
    var childEle=document.createElement("li");
    childEle.setAttribute("id","list-item");
    childEle.textContent="Candy Name:"+details.candyName+"---"+"Description:"+details.description+"---"+"Price:"+details.price+"---"+"Quantity:"+details.quantity;
    childEle.style.backgroundColor="lightblue";
    parentEle.appendChild(childEle);

  
var buyOne=document.createElement("button");
buyOne.textContent="Buy 1";
buyOne.style.backgroundColor="green"
buyOne.addEventListener("click",buyingOne)

function buyingOne(event){
    event.preventDefault();
     axios
    .put(
      `https://crudcrud.com/api/cb15e48f3afe4585981a15ffb0aa08dc/stockManagement/${details["_id"]}`,
      {candyName:details.candyName, 
        description:details.description, 
        price:details.price,
        quantity: details.quantity - 1
      }
    )
    .catch(err => console.log(err));
}
childEle.appendChild(buyOne);


var buyTwo=document.createElement("button");
buyTwo.textContent="Buy 2";
buyTwo.style.backgroundColor="green";
buyTwo.addEventListener("click",buyingTwo);

function buyingTwo(event){
    event.preventDefault();
     axios.put(`https://crudcrud.com/api/cb15e48f3afe4585981a15ffb0aa08dc/stockManagement/${details["_id"]}`,
      {candyName:details.candyName, 
        description:details.description, 
        price:details.price,
        quantity: details.quantity - 2
      }
    )
    .catch(err => console.log(err));
}
childEle.appendChild(buyTwo);



var del =document.createElement("button");
del.textContent="Delete";
del.style.backgroundColor="red";
del.addEventListener("click",deleteStock);

function deleteStock(event){
    event.preventDefault();

    axios.delete(`https://crudcrud.com/api/cb15e48f3afe4585981a15ffb0aa08dc/stockManagement/${details["_id"]}`)

    .catch((err) => console.log(err));
  parentEle.removeChild(childEle);
}
childEle.appendChild(del);


}

