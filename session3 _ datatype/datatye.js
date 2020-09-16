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
// let X = Number(prompt("Nhập Số Tiền X:"));
// let m = X;
// let  dem100 , dem50 , dem20, dem10 ;
// dem100 = Math.floor(X/100000);
// X=X-dem100*100000;
// dem50 = Math.floor(X/50000);
// X-=dem50*50000;
// dem20 = Math.floor(X/20000) ;
// X-=dem20*20000;
// dem10 = Math.floor(X/10000);
// X-=dem10*10000;
// console.log(m+" = "+ dem100 +  ",to_100000 + " + dem50 + ",To_50000 + " + dem20 + ",To_20000 + "+ dem10 + ",To_10000 + ");

// bài 2 : Nhập chiều dài , chiều rộng tính chu vi , diện tích HCN

// let a = Number(prompt("Nhập chiều dài:"));
// let b = Number(prompt("Nhập chiều rộng:"));
// let p = ( a+b ) * 2 ;
// let s = a * b ;

// console.log("Bài 2 : Tính Chu Vi và Diện Tích Hình Chữ Nhật");
// console.log("+) chiều dài = " + a);
// console.log("+) chiều rộng = " + b);
// console.log("+) Chu Vi = " + p);
// console.log("+) Diện Tích = " +s );

// // Bài 3.Tính giá trị biểu thức
// a,
// let x = Number(prompt("Nhập giá trị của x :"));
// let y1 = 4*(x*x + 10*x*Math.sqrt(x) + 3*x + 1);
// console.log("Bài 3: Tính giá trị biểu thức:");
// console.log(" - Giá trị của x = " + x );
// console.log(" - Kết quả = " + y1);

// // b,

// let x = Number(prompt("Nhập giá trị của x :"));
// let y2 =  (Math.sin(x * x * Math.PI) + Math.sqrt(x*x +1)) / (Math.pow(Math.E,2*x) + Math.cos(( x * Math.PI )/ 4));

// console.log("bài 2: b,");
// console.log(" - Giá Trị của x = " + x);
// console.log(" - kết quả = " + y2);

// Bài 5: nhập số có 3 chữ số rồi tính tổng chữ số đó.
//  let x = Number(prompt("Nhập số X:"));
//  let m = x ;
//  let ketQuaChia100 , ketQuaChia10 , ketQuaChia1 ;
//  ketQuaChia100 = Math.floor(x/100) ;
//  x = x - ketQuaChia100 * 100 ;
//  ketQuaChia10 = Math.floor(x/10);
//  x -= ketQuaChia10 * 10 ;
//  ketQuaChia1 = Math.floor(x/1);
 
//  let sum = ketQuaChia100 + ketQuaChia10 + ketQuaChia1 ;
//  console.log("Tổng = " + sum);


//Bài 5.1 Nhập số có 4 chữ số tính tổng các chữ số đó
    let x = Number(prompt("Nhập số x:"));
    let n = x ;
    let ketQuaChia1000 , ketQuaChia100 , ketQuaChia10 , ketQuaChia1 ;
    ketQuaChia1000 = Math.floor(x/1000);
    x = x - ketQuaChia1000 * 1000;
    ketQuaChia100 = Math.floor(x/100) ;
    x = x - ketQuaChia100 * 100 ;
    ketQuaChia10 = Math.floor(x/10);
    x -= ketQuaChia10 * 10 ;
    ketQuaChia1 = Math.floor(x/1);
    

    let sum = ketQuaChia1000 +  ketQuaChia100 + ketQuaChia10 + ketQuaChia1 ;
    console.log("Tổng = " + sum );










