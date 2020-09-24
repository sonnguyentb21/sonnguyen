// cho người dùng 1 số , xem đó lớn hơn 10 hay nhỏ hơn 10 và in ra
// let x = Number(prompt("Nhập một số x:"));
// if(x>10){
//     console.log("In lớn hơn 10:");
// }
// else if (x == 10){
//     console.log(" bằng 10");
// }
// else{
//     console.log(" Nhỏ hơn 10");

// }

// Cho người dùng nhập chiều cao , cân nặng in ra chỉ số IBM

// let weight = Number(prompt("Nhập số cân nặng(kg):")) ;
// let heigh = Number(prompt(" Nhập chiều cao (m):"));
// let bmi = weight/(heigh*heigh) ;
// if(bmi < 18.5){
//     console.log("Gầy");
// }
// else if (bmi >= 18.5 && bmi<= 24.9){
//     console.log("Bình Thường");
// }
// else if (bmi >=25 && bmi <=29.9){
//     console.log("Hơi Béo");
// }
// else if(bmi >=30  && bmi <= 34.9){
//     console.log("Béo phì cấp độ 1");
// }
// else if (bmi >=35 && bmi <= 39.9){
//     console.log("Béo phì cấp độ 2");
// }
// else if (bmi > 40){
//     console.log("Béo phì cấp độ 3");

// }
// else{
//     console.log("Nhập lại chiều cao, cân nặng");
//}
// bài 1, Nhập vào 1 năm tính năm đó xem có bao nhiêu ngày.
// let year= Number(prompt(" Nhập năm :"))
// if(year%4 == 0){
//     if (year%100 == 0){
//         if(year % 400 == 0){
//             console.log("Năm " + year + ": có 366 ngày");
//         }
//         else{
//             console.log("Năm " + year + ": có 365 ngày");
//         }
//     }
//     else{
//         console.log("Năm" + year+ " : có 366 ngày");
//     }
// }
// else{
//     console.log("Năm " + year +" :có 365 ngày");
// }
// bài 2
// let month = Number(prompt("Nhập tháng"));
// if (month == 1 || month == 3 || month == 5 || month == 7 ||  month == 8 || month == 10 || month ==12 ){
//     console.log("31 ngày");
// }
// else if ( month === 2){
//     console.log("28 hoặc 29 ngày");
// }
// else if( month === 4 || month === 6 || month === 9){
//     console.log("30 ngày");
// }else{
//     console.log("tháng sai");
// }


// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`31 ngày`);
//         break ;    
//     case 2:
//         console.log(`28 hoặc 29 ngày`);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(30 ngày);
//         break;
// default :
    
// }
// Bài 3, nhập một tháng trong năm in ra mùa của tháng đố
// let month = Number(prompt("Nhập tháng:")); console.log("Tháng:" + month);
// let n = month;
// if (n>=1 && n<=3){
//     console.log("Mùa Xuân");
// }
// else if (n>=4 && n<=6){
//     console.log("Mùa Hạ");
// }
// else if (n>=7 && n<= 9){
//     console.log("Mùa Thu");
// }
// else if (n>=9 && n<=12){
//     console.log("Mùa Đông");
// }
// else{
//     console.log("Nhập lại tháng");
// }
// Bài 4: Nhập vào 3 số a,b,c In ra thứ tự tăng dần
// let a = Number(prompt("Nhập số a"));
// let b = Number(prompt("Nhập số b"));
// let c = Number(prompt("Nhập số c"));
// if(a>b && a>c){
//     if(b>c){
//         console.log("Thứ tự tăng dần :" + c + b + a);
//     }
//     else{
//         console.log("Thứ tự tăng dần:" + b + c + a);
//     }
// }
// if (b>a && b>c) {
//     if(a>c){
//         console.log(" Thứ tự tăng dần:" + c + a + b);
//     }
//     else{
//         console.log("Thứ tự tăng dần:" + a + c +b);
//     }
// }
// if (c>a && c>b){
//     if(a>b){
//         console.log("Thứ tự tăng dần :" + b + a + c);
//     }
//     else{
//         console.log("Thứ tự tăng dần :" + a + b + c);
//     }
// }
 //Cách 2,
// let a = Number(prompt("Nhập số a"));
// let b = Number(prompt("Nhập số b"));
// let c = Number(prompt("Nhập số c"));
// if(a>b){
//     if(b>c){
//         console.log("Thứ tự tăng dần:" + c + b + a );
//     }
//     else{
//         if(a>c){
//             console.log("Thứ tự tăng dần:" + b + c + a);
//         }
//     }
// }
// else{
//     if(a>c){
//         console.log("Thứ tự tăng dần:" + c + a + b );
//     }
//     else{
//         if(b>c){
//             console.log("Thứ tự tăng dần:" + a + c +b);
//         }
//     }

// }
// if (c>b){
//     if (b>a){
//         console.log("Thứ tự tăng dần:" + a + b + c);
//     }
//     else{
//         if (c>a){
//             console.log(" Thứ tự tăng dần :" + b + a + c);
//         }
//     }

// }    

// Bài 5 : Nhập vào 3 số a ,b ,c kiểm tra xem 3 số đó có tạo thành tam giác không? Nếu có kiểm tra xem tam giác đó có vuông, cân , đều không?

// let a = Number(prompt("Nhập cạnh a:"));
// let b = Number(prompt("Nhập cạnh b:"));
// let c = Number(prompt("Nhập cạnh c:"));
// if ( a + b > c && a + c > b &&  b  + c > a){
//     console.log("Là 1 tam giác:");
//     if( a == b && a != c && b != c ){
//         console.log(" Tam giác cân tại C");
//     }
//     if( a == c && a != b && a != b){
//         console.log(" Tam giác cân tại B");
//     }
//     if( b == c && b != a && c != a){
//         console.log(" Tam giác cân tại A");
//     }
//     if( a == b && b == c){
//         console.log("Là tam giác đều:");
//     }
//     if ( a*a == b*b + c*c || b*b == c*c + a*a || c*c == a*a + b*b){
//         console.log("Tam giác vuông");
//     }

// }

// // if ( a == b || a == c || b == c) {
// //     console.log(" Là tam giác cân :");
// // }

// // if( Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2)){
// //     console.log("Tam giác vuông tại A");
// // }
// // if(Math.pow(b,2) == Math.pow(a,2) + Math.pow(c,2)){
// //     console.log("Tam giác vuông tại B");
// // }
// // if(Math.pow(c,2) == Math.pow(a,2) + Math.pow(b,2)){
// //     console.log("Tam giác vuông tại C");
// // }

// else{
//     console.log("Không phải là 1 tam giác, nhập lại.");
// }
 // bài 6 :Cho thông tin bảng giá điện sau. Nhập vào số điện sử dụng của 1 hộ trong tháng. In ra chi tiết số tiền từng bậc và tổng số tiền phải trả.

 let nhapSoDien = Number(prompt("Nhập số điện (Kwh) :"));
 let x = nhapSoDien ;
 console.log("Số điện (KWH) : " + x);
 let b1 = 1.678 ;
 let b2 = 1.734 ;
 let b3 = 2.014 ;
 let b4 = 2.536 ;
 let b5 = 2.834 ;
 let b6 = 2.927 ;
 let s1,s2,s3,s4,s5,s6;

if ( x>0 && x <= 50){
     console.log(" Mức bậc 1:" ) ;
     s1 = x * b1 ;
     console.log(" Tổng số tiền phải trả :" + s1);
}
 if ( x>51 && x <= 100){
    console.log("Mức bậc 2 :" );
    s2 = (x-50) * b2 + 50*b1;
    console.log(" Số tiền Bậc 1 = " + 50*b1);
    console.log(" Số tiền Bậc 2 = " + (x-50)*b2);
    console.log(" Tổng số tiền phải trả = " + s2);
}
if ( x>101 && x <= 200){
    console.log("Mức bậc 3 :" );
    s3 = (x-100) * b3 + 50*b1 + 50*b2;
    console.log(" Số tiền Bậc 1 = " + 50*b1);
    console.log(" Số tiền Bậc 2 = " + 50*b2);
    console.log(" Số tiền Bậc 3 = " + (x-100)*b3);
    console.log(" Tổng số tiền phải trả = " + s3);
}if ( x>201 && x <= 300){
    console.log("Mức bậc 4 :" );
    s4 = (x-200) * b4 + 50*b1 + 50*b2 + 100*b3;
    console.log(" Số tiền Bậc 1 = " + 50*b1);
    console.log(" Số tiền Bậc 2 = " + 50*b2);
    console.log(" Số tiền Bậc 3 = " + 100*b3);
    console.log(" Số tiền Bậc 4 = " + (x-200)*b4 );
    console.log(" Tổng số tiền phải trả = " + s4);
}
if ( x>301 && x <= 400){
    console.log("Mức bậc 5 :" );
    s5 = (x-300) * b5 + 50*b1 + 50*b2 + 100*b3 + 100*b4;
    console.log(" -Số tiền Bậc 1 = " + 50*b1);
    console.log(" -Số tiền Bậc 2 = " + 50*b2);
    console.log(" -Số tiền Bậc 3 = " + 100*b3);
    console.log(" -Số tiền Bậc 4 = " + 100*b4 );
    console.log(" -Số tiền Bậc 5 = " + (x-300)*b5);
    console.log(" -Tổng số tiền phải trả = " + s5);
}
if ( x>401){
    console.log("Mức bậc 6 :" );
    s6 = (x-400) * b6 + 50*b1 + 50*b2 + 100*b3 + 100*b4 + 100*b5;
    console.log(" -Số tiền Bậc 1 = " + 50*b1);
    console.log(" -Số tiền Bậc 2 = " + 50*b2);
    console.log(" -Số tiền Bậc 3 = " + 100*b3);
    console.log(" -Số tiền Bậc 4 = " + 100*b4 );
    console.log(" -Số tiền Bậc 5 = " + 100*b5);
    console.log(" -Số tiền Bậc 6 = " + (x- 400)*b6);
    console.log(" -Tổng số tiền phải trả = " + s6);
}