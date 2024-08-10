
$(document).ready(function () {
    var stt = 0;
    function reset(){
        $("#ten").val("");
        $("#dienThoai").val("");
        $("#many").val("");
        $("#kind").val("");
        $("#date").val("");
        $("#time").val("");
        $("input[name= 'loaiPhong']").prop("checked", false);
        $(".dichvu input[type='checkbox']").prop("checked", false);
        $(".thanhVien input[type= 'checkbox']").prop("checked", false);
        $("#note").val("");
    }

    $(".btn-js").click(function (e) { 
        // Assuming this code is within a click event listener or some other appropriate context
        // $(".modal").modal("show");
        e.preventDefault();
        if (typeof window.kemTra === 'function') {
            if (window.kemTra()) {
                alert("Thành công");
                window.postData(window.getParty());
                reset();
                $(".modal").modal("hide");
            }
            else {
                e.preventDefault(); 
            }
        }
    });
});