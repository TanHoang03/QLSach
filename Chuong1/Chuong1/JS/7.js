// Khai báo đối tượng
var tenKhoaHoc = 'JavaScrip';
var hocPhi = 250000;
var khoaHoc = {
    tenKhoaHoc:tenKhoaHoc,
    hocPhi: hocPhi,
    // định nghĩa phương thức trong ES5
    xuatTenKhoaHoc: function(){
        console.log(this.tenKhoaHoc);
    }
}
console.log(khoaHoc);
// Sử dụng Enhanced Object literals để khai báo đối tượng ngắn gọn

let khoaHoc1 = {
    tenKhoaHoc,
    hocPhi,
    // định nghĩa phương thức trong ES6 với Enhanced Object literals
    xuatTenKhoaHoc(){
        console.log(this.tenKhoaHoc);
    }
}
console.log(khoaHoc1);

// Sử dụng thuộc tính với tên biến
let bienTenKhoaHoc = 'tenKhoaHoc';
let bienHocPhi = 'hocPhi';
let khoaHoc2 = {
    [bienTenKhoaHoc]:tenKhoaHoc,
    [bienHocPhi]:hocPhi,
    xuatTenKhoaHoc(){
        console.log(this.tenKhoaHoc);
    }
}
console.log(khoaHoc2);



