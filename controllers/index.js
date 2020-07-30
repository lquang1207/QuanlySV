//tạo đối tượng service tương tác backend\
var svService = new SinhVienServices();
var renderSinhVien = function() {
    var promise = svService.layDanhSachSinhVien();
    promise.then(function(res) {
        //tạo <tr> table...
        //tạo nội dung các thẻ tr, thông qua data có đc từ api
        var contentTable = "";
        for (var index = 0; index < res.data.length; index++) {
            //mỗi lần duyệt lấy ra một đối tượng sv
            var sinhVien = res.data[index];
            //từ đối tượng sinh viên tạo ra thẻ tr
            contentTable += `
            <tr>
    <td>${sinhVien.MaSV}</td>
    <td>${sinhVien.HoTen}</td>
    <td>${sinhVien.Email}</td>
    <td>${sinhVien.SoDT}</td>
    <td>${sinhVien.CMND}</td>
    <td>${sinhVien.DiemToan}</td>
    <td>${sinhVien.DiemLy}</td>
    <td>${sinhVien.DiemHoa}</td>
    <td></td>
</tr>
            `
        }
        //in ra giao diện
        document.getElementById('tblSinhVien').innerHTML = contentTable;
        console.log(res.data)
    }).catch(function(error) {
        console.log(error)

    })
}
renderSinhVien();