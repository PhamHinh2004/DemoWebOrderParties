$(document).ready(function () {
    window.kemTra =  function (){
        //tên
        var regexTen = /^([a-zA-Z]{2,}\s*)+$/;
        var ten = $("#ten").val();  

        // điện thoại
        var regexDienThoai = /^\([0-9]{4}\)[0-9]{3}\-[0-9]{3}$/;    
        var dienThoai = $("#dienThoai").val();

        // số người 
        var soNguoi = $("#many").val();

        // loại tiệc 
        // $("#kind").change(function (e) { 
        //     e.preventDefault();
        //     tiec = $("#kind option:selected").text();
        //     console.log(tiec);
        // });
        var tiec = $("#kind option:selected").text();

        // ngày đặt tiệc 
        var now = new Date();
        var date = new Date($("#date").val());

        // giờ nhận tiệc
        var time = $("#time").val();

        // loại phòng 
        var loaiPhong = $("input[name= 'loaiPhong']:checked").val(); 

        // dịch vụ kèm 
        var dichVuKem = "";
        $(".dichvu input[type='checkbox']").each(function () { 
            if($(this).is(":checked")){
                dichVuKem += $(this).val()+" ";
            }
        });

        // thành viên 
        var thanhVien = $(".thanhVien input[type= 'checkbox']:checked").val();

        // ghi chú
        var ghiChu = $("#note").val();
        // console.log(thanhVien);
        if(ten.length === 0 || !regexTen.test(ten)){
            alert("Bạn cần nhập lại tên");
            return false;
        } 
        // else if(dienThoai.length === 0 || !regexDienThoai.test(dienThoai)){
        //     alert("Điện thoại liên hệ có mẫu sau: (0000)000-000, 0 đại diện cho ký số bất kỳ");
        //     return false;
        // }       
        else if(soNguoi.length === 0 || soNguoi < 1){
            alert("Số người tham gia dự tiệc phải là số, ít nhất là 1");
            return false;
        }
        else if(date > now){
            alert("Ngày đặt tiệc trước ngày hiện tại");
            return false;
        }
        else if(tiec.length === 0 ){
            alert("Loại tiệc gồm: Set Menu, Buffet và Finger Food");
            return false;
        }
        // var row = "<tr><td>"+ (stt+=1)+ "</td><td>" + ten + "</td><td>" + dienThoai + "</td><td>" + date.getDate()+"-"+date.getMonth()+"-"
        // + date.getFullYear()+ "</td><td>" + time+ "</td><td>" + soNguoi +"</td><td>"+tiec+"</td><td>" +loaiPhong+"</td><td>"+thanhVien+
        // "</td><td>" +dichVuKem+"</td><td>" +ghiChu+"</td></tr>";

        // $(".table-js").append(row);
        return true;
    };
});