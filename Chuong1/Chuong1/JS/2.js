//Với ES5
//1. khai báo hàm với Declaretion function
function tinhTong(a,b){
    return a + b;
}
console.log('Tổng 2 số: ' + tinhTong(3,5));

//2. khai báo hàm với Expression function
var tinhHieu = function(a,b){
    return a - b;
}
console.log('Hiệu 2 số: ' + tinhHieu(10,6));

//với ES6 => sử dụng hàm mũi tên (Arrow function)
let tinhSum =(a,b) =>{
    return a - b;
}
let tinhSum1 = (a,b) => a+b;
console.log(tinhSum1(100,50));
let xuatThongBao = msg => console.log(msg);
xuatThongBao('Chào bạn');