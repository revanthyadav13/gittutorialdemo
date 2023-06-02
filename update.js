function fetchFromCrudCrud() {
  axios
    .get("https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData")
    .get("https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData")
    .then((obj) => {
      let userData = obj.data;
      userData.forEach((data) => displayNewRegristrationData(data));
@@ -23,7 +23,7 @@ function onClick() {

  axios
    .post(
      "https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData",
      "https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData",
      userDetails
    )
    .then((obj) => displayNewRegristrationData(obj.data))
@@ -42,14 +42,26 @@ function displayNewRegristrationData(obj) {
  let btnEdit = document.createElement("input");
  btnEdit.value = "Edit";
  btnEdit.type = "button";
  btnEdit.onclick = () => {
    document.getElementById("userName").value = obj["name"];
    document.getElementById("emailID").value = obj["email"];
    document.getElementById("mobile").value = obj["mobile"];
    listItems.removeChild(node);
    axios
      .delete(
        `https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData/${obj["_id"]}`
      )
      .catch((err) => console.log(err));
    document.getElementById("submitButton").addEventListener("click", onClick);
  };

  let btnDelete = document.createElement("input");
  btnDelete.value = "Delete";
  btnDelete.type = "button";
  btnDelete.onclick = () => {
    axios
      .delete(
        `https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData/${obj["_id"]}`
        `https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData/${obj["_id"]}`
      )
      .catch((err) => console.log(err));
    listItems.removeChild(node);