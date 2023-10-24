//Ngữ cảnh con trỏ This
let myObj = {
    hoTen: 'Tấn Hoàng',
    tuoi: 20,
    xuatThongTin: function(myFunc){
        console.log(this);
        myFunc();
    }
}
function myFunction(){
    console.log(this);//Ngữ cảnh là đối tượng Windows
}
myObj.xuatThongTin(myFunction);

let myObj1 = {
    hoTen: 'Tấn Hoàng',
    tuoi: 20,
    diemThi: [7,6,9],
    xuatThongTin: function(){
        console.log(this);
        this.diemThi.forEach(function(val){
            console.log(this.hoTen, this.tuoi, val);
        });
    }
}


myObj1.xuatThongTin();
//XỬ lý trong ES5
//Cách 1:
let myObj2 = {
    hoTen: 'Tấn Hoàng',
    tuoi: 20,
    diemThi: [7,8,9],
    xuatThongTin: function(){
        console.log(this);
        //Khai báo biến trung gian
        var _bind = this;
        this.diemThi.forEach(function(val){
            console.log(_bind.hoTen, _bind.tuoi, val);
        });
    }
}
myObj2.xuatThongTin();


//Cách 2: Sử dụng hàm bind để thay đổi ngữ cảnh của this trong callback function
let myObj3 = {
    hoTen: 'Tấn Hoàng',
    tuoi: 20,
    diemThi: [7,8,9],
    xuatThongTin: function(){
        console.log(this);
        this.diemThi.forEach(function(val){
            console.log(_bind.hoTen, this.tuoi, val);
        }.bind(this));
    }
}
myObj3.xuatThongTin();


//Xử lý trong ES6: Sử dụng Arrow function => do Arrow function không có ngữ cảnh
//=> Ra bên ngoài để xác định ngữ cảnh của this
let myObj4 = {
    hoTen: 'Tấn Hoàng',
    tuoi: 20,
    diemThi: [7,8,9],
    xuatThongTin: function(){
        console.log(this);
        this.diemThi.forEach(val => console.log(this.hoTen, this.tuoi, val));
    }
}


myObj4.xuatThongTin();