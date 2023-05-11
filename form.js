var form=document.getElementById("myForm")


form.addEventListener("submit", saveToLocalStorage)


function  saveToLocalStorage(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  
  const userDetails = {
    name: name,
    email: email
  }

  localStorage.setItem("userDetails", JSON.stringify(userDetails));

}
