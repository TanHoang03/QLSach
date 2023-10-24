let myArr = [4, 8, 5, 7, 12];
console.log("======Vòng lập thông thường======");
for(let i = 0; i < myArr.length; i++){
    console.log(`phần tử ${i} - giá trị: ${myArr[i]}`);
}
console.log('vòng lập for.. in duyệt qua các chỉ số==');
for(let idx in myArr){
    console.log(myArr[idx]);
}
console.log('vòng lập for.. of duyệt qua các giá trị====');
for(let val of myArr){
    console.log(val);
}
console.log("======các phương thức thường dùng với mảng======");
// phương thức foreach duyệt qua các phần tử trong mảng
console.log("======phương thức foreach======");
// lưu ý: tham số nhận vào của foreach là một hàm => hàm này sẽ được thực thi trong mỗi lần lặp
let myFunc = function(val, idx){
    console.log(`phần tử thứ ${idx} - có giá trị: ${val}`);
}
console.log("======gọi hàm theo cách thông thường======");
myArr.forEach(myFunc);
// định nghĩa hàm trong foreach
console.log("======định nghĩa hàm dạng Arrow function======");
myArr.forEach((val, idx) => console.log(`phần tử thứ ${idx} - có giá trị: ${val}`));
// phương thức map => biến đổi giá trị các phần tử trong mảng => tham số của map là một hàm
let myArr1 = myArr.map(function(val){
    return val % 2 == 0 ?   val / 2 : val;
});
let myArr2 = myArr.map(val => val % 2 == 0 ? val / 2 : val);
console.log(myArr);
console.log(myArr2); 