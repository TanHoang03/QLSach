//Với ES5
//1.tạo trực tiếp một đối tượng(object)
var myObj ={
    name: 'JavaScript',
    price:2000,
    xuatThongTin: function(){
        console.log(this.name,this.price);
    }
}
console.log(myObj);
myObj.xuatThongTin();

//2.tạo lớp đối tượng với constructor function
function KhoaHoc(tenKhoa,giaHocPhi){
    this.tenKhoa = tenKhoa,
    this.giaHocPhi=giaHocPhi,
    //cách định nghĩa phương thức sau không khuyến khích => tốn bộ nhớ
    this.xuatThongTin = function(){
        console.log(this.tenKhoa,this.giaHocPhi);
    }
}
var kh1 = new KhoaHoc('PHP',3000);
kh1.xuatThongTin();
var kh2 = new KhoaHoc('CSS',2000);
kh2.xuatThongTin();