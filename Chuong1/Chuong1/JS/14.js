function tỉnCong(a,b){
    return a + b;
}

function tinhHieu(a,b){
    return a - b;
}

function tinhTich(a,b){
    return a * b;
}

// để các tập tin khác có thể sử dụng được các hàm => export hàm
// có 2 loại export
//1. export default => trong 1 module chì có 1 hàm được export default
export default tinhCong;
//2. export nhiều hàm trong module
export {tinhHieu,tinhTich};