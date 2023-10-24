// Với ES5
//. Tạo lớp đối tượng với constructor function
function KhoaHoc(tenKhoa, giaHocPhi){
    this.tenKhoa = tenKhoa,
    this.giaHocPhi = giaHocPhi
}
// Tạo phương thức cho các đối tượng thuộc lớp Khoahoc => khuyến khích
// sử dụng prototype
KhoaHoc.prototype.xuatThongTin = function(){
    console.log(this.tenKhoa,this.giaHocPhi);
}
var kh1 = new KhoaHoc('PHP',3000);
kh1.xuatThongTin();
var kh2 = new KhoaHoc('CSS',2000);
kh2.xuatThongTin();
// Sử dụng kế thừa với constructor function
// Khai bao lớp cha là HocSinh
function HocSinh(hoTen, tuoi){
    this.hoTen = hoTen,
    this.tuoi = tuoi;
}
// Định nghĩa phương thức xuất thông tin cho lớp cha
HocSinh.prototype.xuatThongTin=function(){
    console.log(this.hoTen,this.tuoi);
}
// Định nghĩa lớp con HocSinhCap1 kế thừa từ lớp HocSinh
function HocSinhCap1(hoTen,tuoi,diem){
    // Khai báo kế thừa thuộc tính
    HocSinh.apply(this, arguments);
    // Khai báo thuộc tính mới của lớp con
    this.diem = diem;
}
// Khai báo kế thừa phương thức từ lớp cha => có thể ghi chồng phương thức
HocSinhCap1.prototype = new HocSinh;
// HocSinhCap1.prototype.xuatThongTin = function(){
//     console.log(this.hoTen,this.tuoi,this.diem);
// }
var hs1 = new HocSinhCap1('Lan',20,8.5);
hs1.xuatThongTin();