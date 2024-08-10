
// xử lý bất động bộ "async"
// get api buy Id from that api
// getting id depend on url param http

async function getAPIById (){
    // call function urlParam to get Param 
    // such as http://127.0.0.1:5500/src/main/resources/templates/update.html?id=57&name=hinh
    // = > urlParam return id=57&name=hinh
    // simplely, param is id=57&name=hinh
    // to get Id = urlParam.get(Id);

    const urlParam = new URLSearchParams(window.location.search);
    console.log("url param:  " + urlParam);
    console.log("name : " + urlParam.get("name"));
    const dataID =  urlParam.get("id");
    const urlapi = `http://localhost:8080/api/v1/party/${dataID}`;

    // response will wait fetch (urlapi) finish 
    // after reponse return a promise
    const response = await fetch(urlapi);

    if(!response){
        console.log("cannot find party !!!");
    }

    // data is an object, written below type json  
    // data will wait response from server tranfer to type json to become data is an object 
    const data = await response.json();

    // after put data into function applyInformation(data)
    // to fill into data to input on website 
    applyInformation(data);

    // after fill data in application, handle button save 
    window.handleSaveAPi(data, urlapi);
}

function applyInformation(data){
    console.log(data);
    const fullName = data.name;
    const numberPhone = data.number;
    document.getElementById('ten').value= fullName;
    document.getElementById('dienThoai').value = numberPhone;
};
getAPIById();