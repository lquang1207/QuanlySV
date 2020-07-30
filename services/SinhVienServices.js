//File liên kết với Backend
var SinhVienServices = function() {
    this.themMoi = function(SinhVien) {

    }
    this.xoa = function(maSV) {

    }
    this.capNhat = function(SinhVien) {

    }
    this.layDanhSachSinhVien = function() {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
            method: 'GET'
        })
    }


}