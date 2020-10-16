// Tim 1 so le
// Tim 1 so > 10
// Tim cac so chan
// Tim cac so chia het cho 8
// Co so nao > 20 khong?
// Tat cac cac so co chia het cho 3 khong?
//Tim cac so le va >5?
//

// 1.
let A = [5,7,9,10,12,32,3];


let x1 = A.find(sole);
function sole(v){
    return v % 2 ===1 ;
}
console.log(x1);
// 2.

let x2 = A.find(soLonHon10);
function soLonHon10(v){
    return v > 10 ;
}
console.log(x2);

// 3.
let x3 = A.filter(soChan);
function soChan(v){
    return v % 2 === 0;
}
console.log(x3);
// 4.
let x4 = A.filter(soChiaHetCho8);
function soChiaHetCho8(v){
    return v % 8 === 0;
}
console.log(x4);

// 5.
let x5 = A.some(KTCoSoNaoLonHon20);
function KTCoSoNaoLonHon20(v){
    return v > 20 ;
}
console.log(x5);
// 6.
let x6 = A.every(checkAllChiaHetCho3);
function checkAllChiaHetCho3(v){
    return v % 3 === 0;
};
console.log(x6);
// 7.
let x7 = A.filter(findAllOddOver5);
function findAllOddOver5(v){
    return v % 2 != 0 && v > 5;
};
console.log(x7);