//ES5
var myArr1 = ['JavaScript','HTML','CSS'];
console.log(myArr1[0]);
console.log(myArr1[1]);
console.log(myArr1[2]);
//ES6: Sử dụng Destructuring với mảng
[pt1,pt2,pt3] = myArr1;
console.log(pt1);
console.log(pt2);
console.log(pt3);



//ES6
var HocSinh = {
    hoTen: 'Tấn Hoàng',
    tuoi: 20,
    diem: 8
}
console.log(HocSinh.hoTen);
console.log(HocSinh.tuoi);
console.log(HocSinh.diem);
//ES6: Sử dụng Destructuring với đối tượng
let {hoTen, tuoi, diem} = HocSinh;
console.log(hoTen);
console.log(tuoi);
console.log(diem);
//Trường hợp muốn đổi tên thì
let {hoTen:ht, tuoi:t, diem:d} = HocSinh;
console.log(ht);
console.log(t);
console.log(d);