window.handleUpdate = function () {
    const updateButtons = document.querySelectorAll(".update-js");
    updateButtons.forEach(item => {
        item.addEventListener('click', (e)=>{
            e.preventDefault(); 
            const dataId = item.getAttribute('data-id');
            const dataInt = parseInt(dataId, 10);
            console.log(dataInt);
            console.log(typeof(dataInt));  
            window.location.href = `./update.html?id=${dataId}`;
        })
    });
}