// để sử dụng hàm được export default từ 1 module khác , sử dụng cú pháp 
// đối với loại import này => có thể đặt lại tên hàm tuỳ ý
import cong2So from './14.js';

//trường hợp 1
// import {tinhHieu,tinhTich} from './14.js';
// console.log('Tong: ',cong2So(2,3));
// console.log('Hieu: ',tinhHieu(12,3));

//trường hợp 2: nếu muốn đôi tên các hàm sau khu inmport
// import {tinhHieu as hieu ,tinhTich as tich} from './14.js';
// console.log('Tich: ',tich(2,3));
// console.log('Hieu: ',hieu(12,3));

//trường hợp 3: nếu muốn import tất cả các hàm 
import *as PhepToan from './14.js';
console.log('Tich: ',PhepToan.tinhTich(2,3));
console.log('Hieu: ',tinhToan.tinhHieu(12,3));

