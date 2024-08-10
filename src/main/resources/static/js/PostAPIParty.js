const url = 'http://localhost:8080/api/v1/party';

// const data =   {
//     "name": "",
//     "number": "",
//     "date": "",
//     "time": "",
//     "quantity": 0,
//     "typesofParty": "",
//     "typesofRooms": "",
//     "services": "",
//     "members": true,
//     "note": ""
// }

window.postData = function (data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            window.location.href = './success.html';
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
}

