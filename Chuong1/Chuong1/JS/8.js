var hoTen = 'Nguyễn Hùng';
var lopHoc = 'C22TH1';
//Sử dụng ES5
console.log('Học sinh ' + hoTen + ', học lớp ' + lopHoc);
//Sử dụng ES6 với template string (sử dụng blacktick ``)
console.log(`Học sinh ${hoTen}, học lớp ${lopHoc}`);
var a =5;
var b =10;
console.log(`Tổng của ${a} + ${b} = ${a + b}`);
function tinhTong(a,b){
    return a + b;
}
console.log(`Tổng của ${a} + ${b} = ${tinhTong(a,b)}`);