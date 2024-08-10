window.handleSaveAPi = function (data, url) {
    const save = document.getElementById('save-js');
    save.addEventListener('click', async (e) => {
        e.preventDefault();
        const fullName = document.getElementById('ten').value;
        const numberPhone = document.getElementById('dienThoai').value

        // console.log(fullName);
        // console.log(numberPhone);
        console.log(data);
        console.log(url);
        data.name = fullName;
        data.number = numberPhone;

        // trời đợi thực thi updateAPI(data, url)
        const update = await updateAPI(data, url);
    });
}

async function updateAPI(data, url) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("không tìm thấy server");
    }

    // const updatedData = await response.json();
    // console.log('Updated data:', updatedData);
    console.log('update completed')
    window.location.href = './success.html';
}