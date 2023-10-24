//Giá trị tham số mặc định
//với ES5
function xuatThongTin(msg1,msg2){
    // xử lý khi tham số không có giá trị 


    // cách 1  sử dụng cấu trúc if
//     if(msg1== undefined) {
//         msg1='Thông Báo 1';
//     }
//     if(msg2== undefined) {
//         msg2='Thông Báo 2';
//     }
// }

// // cách 2 sử dung phép toán 3ngoi
// msg1= msg1 == undefined ? 'thông Báo 1' : msg1;
// msg1= msg2 == undefined ? 'thông Báo 2' : msg1;

// cách 3 sử dụng phép toán logic
msg1 = msg1 || ' Thông báo 1';
msg2 = msg2 || ' Thông báo 1';

console.log(msg1,msg2);
}
xuatThongBao('Hello','Good bye');
xuatThongBao();
xuatThongBao(undefined,'Good bye');
xuatThongBao('Hello');
xuatThongBao('Hello','Good bye');

//với ES6 : sử dụng giá trị mặc định 
function xuatThongBao1(msg1='Thông Báo 3',msg2='Thông báo 4'){
console.log(msg1,msg2);
}
xuatThongBao1();
xuatThongBao1('Hello 3');
xuatThongBao1(undefined,'Good bye 3');
xuatThongBao1('Hello 3','Good bye 3');
