let btnDelete = document.createElement("input");
  btnDelete.value = "Delete";
  btnDelete.type = "button";
  btnDelete.onclick = () => {
    axios
      .delete(
        `https://crudcrud.com/api/0fe379fafba5444995ba0ce1bd46fc5d/appointmentData/${obj["_id"]}`
      )
      .catch((err) => console.log(err));
    listItems.removeChild(node);
  };

  node.appendChild(text);
  node.appendChild(btnEdit);
