// let item1 = 'Cơm gạo nứt';
// let item2 = 'Cháo gà';
// let item3 = 'Buffet';
// let item4 = 'Khoai Tây Chiên' ;

// let menu = [];
// console.log(menu);

// let menu = ['Cháo gà'];
// console.log(menu);

// let namedMovies = ["Đi qua mùa hạ", "Đường lên đỉnh Olympia", "Ai là triệu phú"];
// console.log(namedMovies);
// let i = prompt("nhập i:");
// let n = prompt("Nhập n: ");
// namedMovies.splice(i,2)
// console.log(namedMovies);
// let i = prompt("i");
// console.log(namedMovies[i]);

// console.log(namedMovies[0]);
// namedMovies[0] = prompt("Người dùng nhập vào:")
// console.log(namedMovies[0]);
// console.log(namedMovies);

// let i = prompt("i") ;
// namedMovies[i] = prompt("Người dùng nhập vào:") ;
// console.log(namedMovies[i]);
// console.log(namedMovies);



// let itemnamednewMovie= prompt('newMovie entered by users');
// namedMovies.push (itemnamednewMovie);

//              0               1              2        => index
// let menu = [' Cháo gà ' , ' Burger' , ' Cơm gạo nứt'];
// console.log(menu);
// menu.splice(0,1);
// console.log(menu);



// console.log(menu[1]);

// let newItem = prompt('Enter new item');
// menu.push (newItem);
// console.log(menu);

// C1: console.log(menu[1]);

// C2: let i = 1;
// console.log(menu[i]);
// let i = prompt("i");
// console.log(menu[i]);
 
// let i =1 ;

// let item = 'Miến Ngũ Sắc';
// menu [i] = item ;
// console.log(menu [1]);
// console.log(menu);

// let x = 5;
// console.log(x);
//  x = 7 ;
// console.log(x);

// let menu = [' Cháo ' , ' Burger' , ' Cơm '];
// console.log(menu);
// let i = 1;
// console.log(menu[i]);

// Cho mảng gồm chiều cao (cm) của 5 người :
// let heighs = [150 , 155 , 170, 145 ,180];

// let sum = 0;
// console.log("In ra chiều cao của từng người");
// for (let i = 0; i < heighs.length; i++) {
//     console.log(`${i+1}: ${heighs}`);
// }

// for (let i =0 ; i<heighs.length ; i++){
//     console.log(heighs[i]);
//     sum += heighs[i];
// }

// let average = sum/heighs.length;
// console.log(`${average}`  );

// console.log("Dựa vào chiều cao trung bình , in ra những người cao hơn trung bình");

// for(let i= 0 ; i < heighs.length ; i++){
//     if(heighs>average){
//         console.log(`${heigh}`);
//     }
// }
// console.log("In ra người cao nhất ");
// let max = heighs[0];
// for (let i = 0; i < heighs.length; i++) {
//    for (let i = 0; i < heighs.length; i++) {
//        const height = heighs[i];
//        if ( height> max){
//            max = height;
//        }
//    }
//    console.log(`Cao nhất :${max}`);
//    console.log("In ra người thấp nhất ");
// let min = heighs[0];

//    for (let i = 0; i < heighs.length; i++) {
//        const height = heighs[i];
//        if ( height< min){
//            min = height;
//        }
//    }

//    console.log(`Thấp nhất :  ${min}`);

   //5
//    console.log(`Tăng dần`);
//    let heighs = [150 , 155 , 170, 145 ,180];
//    for (let i = 0; i < heighs.length-1; i++) {
//        for (let j = i +1 ; j < heighs.length; j++) {
//            if( heighs[i] > heighs[j]){
//                let temp = heighs[i];
//                heighs [i] = heighs[j];
//                heighs [j] = temp ;
//            }
           
//        }
       
//    }

//    console.log(`Giảm dần`);
//    let heighs = [150 , 155 , 170, 145 ,180];
//    for (let i = 0; i < heighs.length-1; i++) {
//        for (let j = i +1 ; j < heighs.length; j++) {
//            if( heighs[i] < heighs[j]){
//                let temp = heighs[i];
//                heighs [i] = heighs[j];
//                heighs [j] = temp ;
//            }
           
//        }
       
//    }
//    console.log(`Giảm dần: ${heighs}`);
   //  bài 6
// let count = 0 ;
// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     if (height<160){
//         console.log(height);
//         count++;
//     }
    
// }
// console.log(`Có ${count} người`);
// let count = 0 ;
// let a = [];
// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     if (height<160){
//         //console.log(height);
//         a.push(height);
//         //count++;
//     }
    
// }
// if (a.lenght >0) {
//     console.log(` Có ${a.lenght} người ${a}`);
// }
// else {
//     console.log("Không có ai");
// }
 // while
 // nhập 1 số >=8, nhỏ hơn thì nhập lại;
//  let n = Number(prompt("Nhập n:"));
//  while (n<8) {
     
//      n = prompt("Nhập lại n>=8:");
//  }
//  console.log(n);
 
 // Nhập 1 số >=8 và <=10 , Sai nhập lại .

//  let n = Number(prompt("Nhập n:"));
//  while (n<8 || n > 10) {
//     n = Number(prompt("Nhập lại n n>= 8 và n<=10:"));
//  }
//  console.log(n);

// 1. Nhập pass  >= 8 ký tự
// let pass = prompt("Nhập pass:")
// while (pass.length < 8) {
//     pass = prompt("Nhập lại pass ký tự >=8")
// }
// console.log(pass);
// pass có độ dài >=8 ký tự và chứa "@"

// let pass = prompt("Nhập pass :");
// while (pass.length <8 || pass.indexOf('@') < 0)  {
//     pass = prompt("Nhập lại pass có độ dài >=8 ký tự và chứa @:");
// }
// console.log(pass);
// let pass = prompt("Nhập pass :");
// while (!(pass.length >=8 && pass.indexOf('@') >= 0 ))  {
//     pass = prompt("Nhập lại pass có độ dài >=8 ký tự và chứa @:");
// }
// console.log(pass);
 
// Nhập 1 số , tìm tất cả các ước của số đó , kiểm tra số đó có phải số nguyên tố không.
// let n = Number(prompt("Nhập n"));
// let demuoc = 0;
// for (let i = 1; i <= n; i++) {
//     if ( n % i == 0){
//         console.log( i );
//         demuoc++;
//     }    
// }
//  if( demuoc == 2){
//     console.log("Số Nguyên Tố:");
//  }
//  else {
//      console.log("Không là số nguyên tố:");
//  }

// let n = parseInt(prompt("Nhập n"));
// let a = [];
// for (let i = 1; i <= n/2; i++) {
//     if ( n % i === 0){
//         a.push(i)
//     }
//     if(a.length >1){
//         break;
//     }
    
// }
// // console.log(`Có ${a.length} ước là : ${a}`);
// if (a.length === 2){
//     console.log("Số nguyên tố");
// } else{
//     console.log("Không là số Nguyên Tố");
// }
// Do Homeword.
// Bài 1:Tính tổng các phần tử của 1 mảng
// let numbers = [150,180,190,200,160,140,170,230];
// console.log(`Bài 1: Tính tổng các phần tử của 1 mảng:`);
// let sum = 0 ;
// for (let i = 0; i< numbers.length; i++) {
//       const number = numbers[i];
//       sum += number;
// }
// console.log(` Tổng : ${sum}`);
// // Bài 2 : Tính trung bình các phần tử của mảng
// console.log(`Bài 2 : Tính trung bình các phần tử của mảng: `);
// for (let i = 0; i < numbers.length; i++) {
//    const number = numbers[i];
//    sum += number ;
   
// }
// let average = sum/numbers.length;
// console.log(`   Giá trị trung bình của các phần tử là : ${average}`);
// // Bài 3 :Tìm số lớn nhất, nhỏ nhất
// console.log(`Bài 3 :Tìm số lớn nhất, nhỏ nhất:`);
// let max = numbers [0];

// for (let i = 0; i < numbers.length; i++) {
//    const number = numbers[i];
//    if ( number > max){
//       max = number ;
//    }
// }
// console.log(` Số lớn nhất : ${max}`);

let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
   const number = numbers[i];
   if ( number < min){
      min = number ;
   }
}
console.log(` Số nhỏ nhất: ${min}`);

// // Bài 4 :Sắp xếp mảng
// console.log(`Bài 4 : Sắp xếp mảng.`);
