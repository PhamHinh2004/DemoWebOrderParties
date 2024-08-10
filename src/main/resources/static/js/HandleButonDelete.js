/* đây là cách lấy element của cả table và xử lý controler với mọi hành động trong table   


const dataTable = document.getElementById('data-table');
if (dataTable) {
    dataTable.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete-js')) {
            const dataId = event.target.getAttribute('data-id');
            console.log
            window.deleteDate(dataId);
        }
    });
} else {
    console.log('Element with id "data-table" not found.');
}
*/

window.handleDelete = function () {
    const buttons = document.querySelectorAll(".delete-js")
    buttons.forEach(element => {
        element.addEventListener('click', async () => {
            const dataId = element.getAttribute('data-id');
            const dataInt = parseInt(dataId, 10);

            // get parent để có thể xóa được element hiện tại 
            // element.parentElement lấy div chứa button ( cột chứa thanh button )
            // element.parentElement.parentElemen lấy div chứa các giá tri của một hàng trong table  
            element.parentElement.parentElement.parentElement.remove();
            try {
                await window.deleteDate(dataInt);
                console.log('Delete operation was successful.');
                window.location.href = `./success.html?id=${dataId}`;
                // Thực hiện các bước khác sau khi xóa thành công
            } catch (error) {
                console.error('Error deleting the resource:', error);
                // Xử lý lỗi nếu có
            }
        })
    });

    console.log("finish handle delete");
}



