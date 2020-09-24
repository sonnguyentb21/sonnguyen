

// let person = {};        // Khai báo rỗng 
// console.log(person);

// let person = {          // Khai báo 1 phần tử
//     name : 'Nam'
// };
// console.log(person);

// let person = {              // khai báo nhiều phần tử
//     name : 'Nam',
//     age : 19,
// }
// console.log(person);

// Example 1 : 
//  let namedMovie = {
//     title : 'The dark night rises' ,
//     year : 2012 ,
//     rate : 8.4 ,
//  }
//  console.log(namedMovie);

// Read 
// let person = {
//     name : ' Nam ',
//     age : 18 ,
// };
// console.log(person);
// console.log(person.age); // read
// let prop = 'name';
// // console.log(person.prop);
// console.log(person['age']);
 
// Update
// let person = {
//     name : 'Nam',
//     age : 18 ,
// };
// console.log(person.name);
// person.name = 'Nguyen Phuonng Nam';
// console.log(person.name);
// console.log(person['age']);
// person['age'] = 19 ;
// console.log(person['age']);
// console.log(person);

// person.age++ ;
// person['age'] ++ ;
// console.log(person); 

// console.log(person);
// person.location = ' Hanoi',
// console.log(person);

// console.log(person);
// person['status'] = 'Single';
// console.log(person);
// console.log(person);
// delete person['age'] ;
// console.log(person);

// Object of Array

// let person1 = {
//     name : 'Nam',
//     age : 18 ,
// };
// let person2 = {
//     name : 'Son',
//     age : 24 ,
// };
// let personArr = [];

// console.log(personArr);
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr);

// // console.log(personArr[0]);
// // let p = personArr[0];
// // console.log(p);
// // console.log(p.name);
// console.log(personArr[0].name);
// let n = personArr[0].name ;
// console.log(n);

// for(let i = 0 ; i< personArr.length ; i++){
//     let p = personArr[i];
//     console.log(p);
//     console.log(p.age);
// }
// Object containing Array
let person = {
    name : 'Nam',
    age : 18 ,
    favs : [ 'Netifix' , 'Caffe' , 'Code' ]
};

console.log(person.favs[1]); // in ra Cafe
let favs = person.favs ;
console.log(favs);
for(let i = 0 ; i < favs.length ; i++){
    console.log(favs[i]);
};
favs.push('Macbook');
console.log(favs);
console.log(person);
