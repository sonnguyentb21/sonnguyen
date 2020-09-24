// for (let index = 0; index < 100; index++) {
//    //console.log("Hello");
//     console.log(index);
// }
// In ra từ 1 đến 10
//In số lẻ từ 0 đến 10
// In số chẵn từ 0  đến 10
// In từ 10 về 0
// console.log("In ra từ 1 đến 10");
// for (let index = 1; index <=10; index++) {
//     console.log(index);
    
// }
// console.log("In ra số lẻ từ 0 -> 10");
// for (let index = 1; index <= 10; index+=2) {
//     console.log(index);
    
// }
// console.log("In ra số chẵn 0 ->10");
// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);
    
// }
// console.log("In ra các số từ 10 --> 0");
// for (let i = 10; i >= 0 && i <= 10; i--) {
    
//     console.log(i);
// }
// Bài 6.Tính tổng từ 0 đến 10

// let sum = 0;
// for (let i = 0; i <= 10;i++) {
//     sum += i ;
//     }
// console.log( sum );
// Bài 7. Tính tổng số lẻ từ 0 đến N (N : nhập từ bàn phím)
// let n = Number(prompt("Nhập n:"));
// let sum = 0 ;
// for (let i = 0 ; i <= n; i = i+2) {
//     sum += i;
    
// }
// console.log(sum);
// console.log("Tính Tổng các số chẵn 0 -->10");
// let s =0;
// for (let i = 2; i <=10 ; i = i+2) {
//     s+=i ;
// }
// console.log("Tổng = " +s);
// // // bài 8
// // let n = Number(prompt("Nhập n"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += 1/i ;
// }
// console.log(sum);
// bài 9,
// let n = Number(prompt("Nhập n"));
// let sum = 0;
// for (let i = 2; i <= n; i ++) {
//     sum += 1/((i-1) * i)
    
// }
// console.log(sum);
// bài 10,
// let n = Number(prompt("Nhập n"));
// let sum = 0;
// for (let i = 2; i <= n ; i++) {
//     sum += (i - 1)/i ;
    
// }
// console.log(sum);
// bài 11: S=n!
// let n = Number(prompt("Nhập n"));
// let s =1;
// for (let i = 1; i <= n; i++) {
//     s*=i;
    
// }
// console.log("tổng =" +s);
//Bài 12 : Tính S = 1! + 2! +3! +...+n!
// let n = Number(prompt("Nhập n"));
// let T = 1;
// let S = 0;
// for (let i = 1; i <= n; i++) {
//  T *= i;
//  S += T ;
// }
// console.log("Tổng = " + S);
  // Homework
//   // Bài 1: In ra các số từ 1 đến 100;
//   for (let i = 0; i <= 100 ; i++) {
//       console.log(i);
//   }
  // // Bài 2 : In ra các số từ 100 về 1
  // for (let i = 100; i >= 0 ; i--){
  //   console.log(i);
      
  // }
  // Bài 3 : In ra các số chẵn lẻ từ 0 --> 100
  // for (let i = 1; i <= 100; i = i+2) { // In ra số lẻ từ 0 --> 100;
  //   console.log(i);
    
  // }
  // for (let i = 2; i <= 100; i = i +2 ) { // In ra các số chẵn từ 0 --> 100;
  //   console.log(i);
    
  // }
  //Bài 4 : In ra các số chẵn lẻ từ 100 --> 0 ;
  // for (let i = 99; i >= 1 && i <= 100; i = i - 2) {
  //   console.log (i);
    
  // }
  // for (let i = 100; i >=2 ; i -= 2) {
  //  console.log(i);
    
  // }
  // Bài 5 :Tính tổng : S = 1+2+3 +...+ N,
  // let n = Number(prompt("Nhập số n:"));
 
  // let sum = 0;
  // for (let i = 0; i <= n ; i++) {
  //   sum += i; 
    
  // }
  // console.log("Tổng:" + sum); 
  // Bài 6 : Tính Tổng : S = 1 + 3 + 5 + ... + 2n +1.
  // let n = Number(prompt("Nhập n:")) ;
  // let sum = 1 ;
  // for (let i = 1; i <= n; i++) {
  //   sum += (2*i +1);
  // }
  // console.log("Tổng:" + sum);
 // Bài 7 : Tính tổng : S = 2 + 4 + 6 +...+2n;
//  let n = Number(prompt("Nhập n:"));
//  let sum = 0;
//  for (let i = 1; i <= n ; i ++) {
//     sum += 2*i;
//   }
//   console.log("Tổng : "+ sum);
// Bài 8 : Tính Tổng : S = 1/1 + 1/2 + 1/3 + ... + 1/n ;
// let n = Number(prompt("Nhập n:"));
// let sum = 0;
// for (let i = 1; i <= n ; i++){
//   sum += 1/i ;
// }
// console.log("Tổng :" + sum);
// Bài 9: Tính Tổng : S = 1/(1*2) + 1/ (2*3) + 1/(3*4) +...+ 1/(n(n+1));
// let n = Number(prompt( " Nhập n:"));
// let sum = 0;
// for (let i = 1; i <= n ; i++) {
//   sum += 1/(i*(i+1));
  
// }
// console.log("Tổng :" + sum);
// Bài 10 : Cho dãy số Fibonacci : 1,2,3,5,8....
// Có dạng F(2n+2)= F(2n+1) + F(n).
// - Tìm phần tử thứ N với N nhập từ bàn phím.
// - Tổng N phần tử đầu tiên của dãy với N nhập từ bàn phím.
let N = Number(prompt("Nhập N"));
let x1 = 1 ;
let x2 = 1 ;
let sum =0 , sum2 =0 ;
console.log("phần a,");
if ( N == 1 || N == 2){
  console.log(1);
}
else{
for (let i = 3; i <= N ; i++) {
    sum = x1 + x2 ;
    x1 = x2 ;
    x2 = sum ;
    sum2 += sum;
}
}
console.log(sum);
console.log("Phần b,");
console.log(sum2 +2 );


// let N = Number(prompt("Nhập N"));
// let x1 = 1 ;
// let x2 = 1 ;
// let sum = 0  ;
// if ( N == 1 || N == 2){
//   console.log(1);
// }
// else{
//   for (let i = 3; i <= N ; i++) {
//     sum = x1 + x2 ;
//     x1 = x2 ;
//     x2 = sum ;
  
// }
// }

// console.log(sum);

// Bài 11 : In ra màn hình hình sau:
// ***********
// ***********
// ***********
// với chiều dài là a dấu *, chiều rộng là b dấu * (a, b nhập từ bàn phím).
// let a = Number(prompt("Nhập chiều dài :"));
// let b = Number(prompt("Nhập chiều rộng"));
// if (a <=0 || b <= 0){
//   if ( a <=0 ){
//     console.log("Nhập lại chiều dài a >0 :");
//   }
//   if (b<=0){
//     console.log("Nhập lại chiều rộng b > 0:");
//   }
// }
// else{
// for (let i = 1 ; i<=b ; i++){
//     for (let k =1 ; k <= a ; k++ ){
//       console.log("*");
//     }
//     console.log("\n");
// }
// }

// Bài 12 : In ra màn hình hình sau:
// *
// **
// ***
// ****
// *****
// với chiều dài cạnh dưới cùng là a dấu * (a nhập từ bàn phím).
// let n = Number(prompt("Nhập n:"));  
// let s = "*"  ;

//   for (let i = 1; i <= n; i++) {
//     console.log(s);
//     s += "*";
//     }

// console.log(s);

// Bài 13 : Yêu cầu người dùng nhập mật khẩu, nếu mật khẩu ngắn hơn 8 ký tự, yêu cầu nhập lại.

