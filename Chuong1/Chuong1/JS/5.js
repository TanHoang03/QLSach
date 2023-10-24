// với ES6
// tạo lớp đối tượng với class
// sử dụng kế thừa với constructor funtion
// khai báo lớp cha là HocSinh
class HocSinh{
    constructor(hoTen, tuoi){
        this.hoTen = hoTen;
        this.tuoi = tuoi;
    }
    // tạo phương thức cách 1
    xuatThongTin = function(){
        console.log(this.hoTen,this.tuoi);
    }
}
let hs1 = new HocSinh('Lan',25);
hs1.xuatThongTin();
// khai báo lớp con HocSinhCap1 kế thừa từ lớp cha HocSinh
class HocSinhCap1 extends HocSinh{
    constructor(hoTen, tuoi, diem){
        super(hoTen, tuoi);
        this.diem = diem;
    }
// ghi đè hàm xuatThongTin
xuatThongTin=function(){
    console.log(this.hoTen, this.tuoi, this.diem);
}
// tạo phương thức trong lớp theo cách 2 như sau
xuatThongBao(){
    console.log('Hello');
}
}
let hs2 = new HocSinhCap1('Đào',20,8);
hs2.xuatThongTin();