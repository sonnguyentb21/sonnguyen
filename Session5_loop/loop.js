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
// for (let index = 0; index <= 10; index+=2) {
//     console.log(index);
    
// }
// console.log("In ra số chẵn 0 ->10");
// for (let i = 2; i <= 10; i+=2) {
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

// // bài 8
// let n = Number(prompt("Nhập n"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += 1/i ;
// }
// console.log(sum);
// bài 9,
let n = Number(prompt("Nhập n"));
let sum = 0;
for (let i = 2; i <= n; i ++) {
    sum += 1/((i-1) * i)
    
}
console.log(sum);