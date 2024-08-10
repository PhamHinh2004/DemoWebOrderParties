// link của api 
const apiUrl = 'http://localhost:8080/api/v1/parties';

/* đây là cách chuẩn loại 1 chưa tối ưu

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // console.log(data);
    data.forEach(item => {
      addRowTable(item);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
*/

// chuẩn loại 2 sủa dụng await
async function  getAPI(apiUrl) {
    const response = await fetch(apiUrl);
    if(!response){
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    data.forEach(item => {
      window.addRowTable(item);
    });
    window.handleDelete();
    window.handleUpdate();
}


  
window.addRowTable =  function(item){
    const table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent= item.id;
    newRow.insertCell(1).textContent= item.name;
    newRow.insertCell(2).textContent= item.number;
    newRow.insertCell(3).textContent= item.date;
    newRow.insertCell(4).textContent= item.time;
    newRow.insertCell(5).textContent= item.quantity;
    newRow.insertCell(6).textContent= item.typesofParty;
    newRow.insertCell(7).textContent= item.typesofRooms;
    const cell = newRow.insertCell(8);

    const formDelete = document.createElement("form");
    formDelete.action= '/success';
    formDelete.method= 'post';

    const formUpdate = document.createElement("form");
    formUpdate.action = '';
    formUpdate.method = 'get';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-success delete-js';
    deleteButton.style = 'width: 100%; margin: 3px 0px;';
    deleteButton.setAttribute('data-id', item.id);
    deleteButton.textContent = 'Delete';
    
    const updateButton = document.createElement('button');
    updateButton.className = 'btn btn-primary update-js';
    updateButton.style = 'width: 100%; margin: 3px 0px;';
    updateButton.setAttribute('data-id', item.id);
    updateButton.textContent = 'Update';
    
    // Thêm các nút vào ô
    formDelete.appendChild(deleteButton)
    formUpdate.appendChild(updateButton)
    cell.appendChild(formDelete);
    cell.appendChild(formUpdate);
    if(item.members === true){
      newRow.insertCell(8).textContent= "Thành viên";
    }
    else {
      newRow.insertCell(8).textContent= "Không Là Thành Viên";
    }

    
    newRow.insertCell(9).textContent= item.services;
    newRow.insertCell(10).textContent= item.note;

    console.log("finish get");
  }

  getAPI(apiUrl);