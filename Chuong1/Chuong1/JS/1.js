//khai báo biến ES5
var ten = 'Hùng';
console.log(ten);
var ten ='Lan';// không lỗi => cho phép khai báo lại với var
console.log(ten);
ten='Nam';
ten='Hoa';// sử dụng var có thể gán trị nhiều lần

//khai báo biến với ES6
let tuoi=20;
console.log(tuoi);
//let tuoi=30; => lỗi không khai báo lại
tuoi=30; // sử dụng let có thể gán trị nhiều lần
const PI=3.14;
//const PI 3.1416 => lỗi không cho phép khai báo lại
//PI = 3.1416 => lỗi const không cho gán  trị nhiều lần

console.log('======================== Phần sau là hoisting ====================')

lopHoc ='C22TH1';
console.log('Hello' + lopHoc);
thongBao('Ngày mai học React');
var lopHoc;
function thongBao(msg){
    console.log(msg);
}

console.log('======================== Phần sau là function scope và block scope ====================')
function tong2So(a,b){
    var tong = a + b;
    return tong;
}
//console.log(tong) => lỗi do tong có phạm vi là function scope => chỉ hiểu trong phạm vi hàm tong2So
function xuatThongBao(chieuCao,canNang){
    if(chieuCao >=170 && canNang >=75){
        var canhBao = 'Thừa cân';
        console.log(canhBao);
    }
    console.log(canhBao + ' hiện nay rất nhiều');//không lỗi => tầm vực của canhBao là function scope
}
xuatThongBao(180,150);
//console.log(canhBao);=>lỗi sử dụng ngoài hàm
function xuatCanhBao(chieuCao,canNang){
    let canhBao ='Thừa cân';
    if(chieuCao >=170 && canNang >=75){
        let canhBao = 'Thừa cân';
        console.log(canhBao);
    }
    //console.log(canhBao + 'hiện nay rất nhiều');// lỗi do canhBao có phạm vi là block scope chỉ có ý nghĩa trong khối mà thôi
}
xuatCanhBao();
