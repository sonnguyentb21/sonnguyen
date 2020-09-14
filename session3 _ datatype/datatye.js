// let a = 5 ;
// let b = 3 ;
// let c = 2 ;
// let d = a/c ;

// console.log(d);

// let name = "Son" ;
// let name1 = ' Son';
// let name2 = ` Son` ;
// let hello = `Xin Chào ${name}` ;
// console.log("2020"-"2000");
// console.log("2020"-"2000a");
// console.log(name);
// cho người dùng nhập vào hai số
// in ra tổng , hiệu , tích, thương hai số đó ;

// let a = Number(prompt ("nhap so a"));
// let b = Number(prompt (" nhap so b")) ;

// console.log(a-b);
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);

// let a = 10 ;

// // // console.log(a++); //11
// // console.log(a);//10

// // console.log(++a); // 11
// // console.log(a);// 11

// console.log(a+=2);// tăng thêm 2 đơn vị


//  let r = Number(prompt("Bán Kính:"));
//  let p = 2*r* Math.PI ;
//  let s = Math.PI * Math.pow(r,2) ;
//  console.log("Bài 1:");
//  console.log("Diện Tích : " + s.toFixed(2)); // toFixed (2) lấy sau dấu phẩy 2 số
// console.log("Chu Vi :"+ p.toFixed(2));

// bài 4
let X = Number(prompt("Nhập Số Tiền X:"));
let m = X;
let  dem100 , dem50 , dem20, dem10 ;
dem100 = Math.floor(X/100000);
X=X-dem100*100000;
dem50 = Math.floor(X/50000);
X-=dem50*50000;
dem20 = Math.floor(X/20000) ;
X-=dem20*20000;
dem10 = Math.floor(X/10000);
X=-dem10*10000;
console.log(m+" = "+ dem100 + " to_100000" + dem50 + " To_50000" + dem20 + " To_20000"+ dem10 + " To_10000");





