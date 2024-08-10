
/* chuẩn loại 1 chưa tối ưu

window.deleteDate =  function (id){
    const url = `http://localhost:8080/api/v1/party/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if(!response.ok){
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Delete successful:', data);

            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
}
*/

// chuẩn loại 2 đã tối ưu
window.deleteDate = async function (id) {
    const url = "http://localhost:8080/api/v1/party";
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
}





