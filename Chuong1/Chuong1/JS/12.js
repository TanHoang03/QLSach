//sử dụng thuật toán rest với
//1. Destructuring
let arr = [2,1,4,3,6,5,8,7,9];
let[a,b,c,...rest]=arr;
console.log(arr);
console.log(rest);
//2. sử dụng khi định nghĩa một hàm có số tham số truyền vào không xác định
//console.log(1,2,3,4,5,6,7,8,9); => số tham số truyền vào không xác định
function xuatThongTin(...rest){
    for(let val of rest){
        console.log(val);
    }
}
xuatThongTin(1,2,3,4,5,6,7,8,9,0);

//sử dụng phép toán Spread: [1,2,3] => 1,2,3
//đối với đối tượng obj = {hoTen:'Hung',tuoi:20}=> spread => hoTen:'Hung',tuoi:20
var arr1 = ['PHP','ASP','PYTHON'];
var arr2= ['JS','HTML','CSS'];
//ES5
var arr3 =arr1.concat(arr2);
console.log(arr3);
//ES6 với spread
let arr4 = [...arr1,...arr2];
console.log(arr4);
function tinh(...rest){
    for(let val of rest){
        console.log(val);
    }
}
tinh(...arr4);//sử dụng sprea => mảng arr4 thành danh sách các phần tử