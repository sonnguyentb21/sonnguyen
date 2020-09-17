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

// let canNang = Number(prompt("Nhập số cân nặng(kg):")) ;
// let chieuCao = Number(prompt(" Nhập chiều cao (m):"));
// let n = canNang/(chieuCao*chieuCao) ;
// if(n<18.5){
//     console.log("Cơ Thể Gầy");
// }
// else if (n>18.5 && n<25){
//     console.log("Cơ thể bình thường");
// }
// else if (n>25){
//     console.log("Cơ thể béo phì");
// }
// else if(n>25 && n<29.5){
//     console.log("Tiền béo phì");
// }
// else if (n>29.5 && n<35){
//     console.log("Béo phì độ I");
// }
// else if (n>35 && n<39){
//     console.log("Béo phì độ II");
// }
// else if (n>39){
//     console.log("Quá béo phì");
// }
// else{
//     console.log("Nhập lại chiều cao, cân nặng");
// }
// bài 1,
// let year= Number(prompt(" Nhập năm :"))

// l
// if(year%4 == 0){
//     if (year%100==0 ; year%400 !=0){console.log("Năm đó có" + year + "có 366 ngày");}
//     console.log("Năm đó có" + year +"có 366 ngày");
// }
// else{
//     console.log("Năm đó có" + year +" có 365 ngày");
// }
// bài 2
let month = Number(prompt("Nhập tháng"));
if (month == 1){
    console.log("31 ngày");
}
else if ( month === 2){
    console.log("28 hoặc 29 ngày");
}
else if( month === 4 || month === 6 || month === 9){
    console.log("30 ngày");
}else{
    console.log("tháng sai");
}


switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`31 ngày`);
        break ;    
    case 2:
        console.log(`28 hoặc 29 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30 ngày);
        break;
    
}
    default;