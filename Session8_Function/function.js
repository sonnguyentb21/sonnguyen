
// function hello (){
//     console.log("Hello World");
// }

// hello();
// hello();
// hello();

// function xinChao (s){
//     console.log(s);
// }
// xinChao ('Hello 111111111');

// function sum (a,b){
//     console.log(a+b);
// }
// sum(100,30)

// function hieu(m,n){
//     console.log(m-n);
// }
// hieu(100,50)

// function tich(h,k){
//     console.log(h*k);
// }
// tich(20,10);

// function chia(x,y){
//     console.log(x/y);
// }
// chia(20,10);
// 1. Viết F nhận vào số N , trả ra tổng S = 1+2+3 +...+N,
// 2. Viết F nhận vào số N trả ra gia thừa của N .
// 3. Viết F nhận vào giá trị N, trả ra mảng chứa các ước của N
// 4 .Viết F nhận vào giá trị N, trả ra mảng chứa các số nguyên tố <=N .
// 5. Viết F nhận vào 1 mảng số , trả ra tổng của mảng.
// 6. Viết F nhận vào 1 mảng số , trả ra số lớn nhẩt.
// 7. Viết F nhận vào 1 mảng số , trả ra số nhỏ nhất.
// 8. Viết F nhận vào 1 mảng số N, trả ra mảng chứa các giá trị < số N,
// 9. Viết F nhận vào 2 mảng , trả ra mảng là hợp 2 mảng trên
// 10.  Viết F nhận vào 2 mảng, trả ra là giao của 2 mảng trên.

//1.
let N = Number(prompt("Nhap N:"));

// function Tong(N){
//     let sum = 0;
//     for( i =1 ; i<=N ; i++){
//         sum+=i ;
//     }   
//     return sum;
    
// }
// console.log(Tong());

// 2,
// function giaiThua() {
//     let S=1;
//     for(i =1 ; i<=N ; i++){
//         S*=i;
//     }
//     return S;
    
// }
// console.log(giaiThua());

// 3,
function uoc(N){
    let U = [];
    for(i=1 ; i<=N ; i++){
        if(N%i === 0){
            U.push(i);
        };
    };
    return U ;
};
console.log(uoc(N));
// 4 ,
// function soNguyenTo (N){
//     let result =[];
//     for (let i = 1; i <=N ; i++) {
//        if (checkSoNT(i)){
//            result.push(i)
//        }
        
//     }
//     return result;
// }
// function checkSoNT(x){
//     let result = false ;
//     let count = 0 ;
//     for(let j =1 ; j<=x ; j++){
//         if (x % j ===0 ){
//             count++;
//         }
//         if ( count >2){
//             break ;
//         }
//     }
//     if ( count ===2){
//         result = true ;
//     }
//     return result;

// }
// console.log(soNguyenTo(N));









// 5. 
// function sumOfArray (array){
//     let s = 0;
//     for (let i = 0; i < array.length; i++) {
//         const value = array[i];
//         s+= value ;
        
//     }
//     return s;

// }
// console.log(sumOfArray([1,2,3,4,5,6]));
// // 6
// function TimSLN (array){
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         const value = array[i];
//          if(max<array[i]){
//              max = array[i]
//          }
//     }
//     return max;

// }
// console.log(TimSLN([1,2,3,4,5,6]));
// 8
// function lonHonN(arr, N){
//     let result = [];
//     for (let i = 1; i < array.length; i++) {
//         const value = array[i];
        
//     }
// }
// Tinh N! ,
// function giaiThua(N){
//     if(N ===0 || N === 1){
//         return 1;
//     }

//     return N * giaiThua(N-1);
// }
// console.log(giaiThua(7));
// Tim so thu N cua day Fibonacci : 1,1,2,3,5...
// function fibonacci(n){
//     if(n===1 || n ===2){
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(n));








