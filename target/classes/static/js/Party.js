$(document).ready(function () {
    const data =   {
        "name": "",
        "number": "",
        "date": "",
        "time": "",
        "quantity": 0,
        "typesofParty": "",
        "typesofRooms": "",
        "services": "",
        "members": true,
        "note": ""
    };

    window.getParty =  function (){
        data.name = $("#ten").val();  
        data.number = $("#dienThoai").val();
        data.date = new Date($("#date").val());
        data.time = $("#time").val();
        data.quantity =$("#many").val();
        data.typesofParty = $("#kind option:selected").text();
        data.typesofRooms = $("input[name= 'loaiPhong']:checked").val(); 
        
        var dichVuKem = "";
        $(".dichvu input[type='checkbox']").each(function () { 
            if($(this).is(":checked")){
                dichVuKem += $(this).val()+" ";
            }
        });

        data.services = dichVuKem ;
        var isMember =  $(".thanhVien input[type= 'checkbox']:checked").val();
        if(isMember === "Nếu bạn là thành viên của quán"){
            data.members = true;
        }
        else {
            data.members = false;
        }
        data.note =  $("#note").val();
        return data;
    };

});
