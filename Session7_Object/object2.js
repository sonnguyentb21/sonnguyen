// let o_empty = {} ; // Object rỗng

// // Name, Age , School
// let myIfo = {
//     "name" : 'Son' ,
//     "age" : 19 ,
//     school : 'Hnue',
   
// };
// console.log(myIfo);
// myIfo.favorite = ['Football', 'Watching'] ;
// console.log(myIfo);

// myIfo.age ++;
// console.log(myIfo);

// for (const key in myIfo) {
//     let value = myIfo[key];
//     console.log(`${key}: ${value}`); // xuat hien key voi value
  
// }

//==================/
// Tạo 1 mảng chứa thông tin của 5 điện thoại
// mỗi điện thoại là 1 object chứa 3 thông tin 
// Tên, Giá , Hãng

// 1. In danh sách mảng này
// Cú pháp:
// Giá:.....
// Hãng :....
// 2. Tên : ...
//....
// 2. Cho người dùng nhập thêm 1 điện thoại mới,
// cũng gồm 3 thông tin trên => in lại danh sách mới
// 3. Cho người dùng nhập vào giá , in ra các điện thoại,
// 4. Cho người dùng nhập vào tên, in ra các điện thoại
// có tên chứa nội dung ng dùng nhập (không phân biệt
// hoa thường)
// 5. In các đt của hãng Apple
// 6. Tìm đt có giá cao nhất, thấp nhất
// 7. Nhập tên và giá, tìm đt chứa tên và giá thấp hơn
// ng dùng nhập (ko phân biệt hoa thường)
// 8. Sắp xếp đt theo giá cao => thấp

let listPhones = [
    {
        name : 'Iphone X',
        price: 20e6,
        brand :'Apple',
    },
    {
        name : 'Redmi note 8',
        price: 3e6 ,
        brand : 'xiaomi'
    },
    {
        name : 'Samsung galaxy j8',
        price: 5e6 ,
        brand : 'samsung'
    },
    {
        name :'Opp3s',
        price: 4e6 ,
        brand :'Oop',

    },
    {
        name :'Iphone5s',
        price: 2e6 ,
        brand :'Apple',

    },
    {
        name :'relmi 7',
        price: 5e6 ,
        brand :'xiaomi',

    },
];
// for (let i = 0; i< listPhones.length; i++) {
//   const phone = listPhones[i];
//   for (const key in phone) {
//       console.log(`${i+1}`);
//     let value = phone[key]
//      console.log(`${key }: ${value}`);
//   }
//     }

// let newphone = {}
//     newphone.name = prompt("Nhập tên máy mới");
//     newphone.price = Number(prompt("Nhập giá"));
//     newphone.brand = prompt("Nhập thương hiệu:");
//     listPhones.push(newphone);
//     for (let i = 0; i< listPhones.length; i++) {
//         const phone = listPhones[i];
//         for (const key in phone) {
//             console.log(`${i+1}`);
//           let value = phone[key]
//            console.log(`${key }: ${value}`);
//         }
//           }
// 3. Cho người dùng nhập vào giá , in ra các điện thoại,

// let searchPrice = Number(prompt("Nhập giá"));
// let searchResult =[];
// for (let i = 0; i < listPhones.length; i++) {
//     const phone = listPhones[i];
//     if(phone.price > searchPrice){
//         searchResult.push(phone);
//     }
    
// }
// // // 1. In
// if(searchResult.length >0){
    
   
//     print(searchResult)

// } 
// else {
//     console.log('Không có đt thỏa mãn');
// }      
  
// // 4.1 Cho người dùng nhập vào tên, in ra các điện thoại
// có tên chứa nội dung ng dùng nhập (không phân biệt
// hoa thường)

// let searchName = prompt("Nhập tên");

//  searchResult = [];
// for (let i = 0; i < listPhones.length; i++) {
//     const phone = listPhones[i];
//     if(phone.name.toLowerCase().includes(searchName.toLowerCase())){
//         searchResult.push(phone);
//     }
    
// }

// if(searchResult.length >0){
//     console.log(`Có ${searchResult.length} đt thỏa mãn:`);
//     print(searchResult)
      
// } 
// else{
//     console.log('Không có đt thỏa mãn');
// }

function print(){
    for (let i = 0; i<searchResult.length; i++) {
        const phone = searchResult[i];
        for (const key in phone) {
            console.log(`${i+1}`);
          let value = phone[key]
           console.log(`${key}: ${value}`);
        }
          }
      console.log(`===========`);
}

// 5. In các điện thoại của hãng Apple
let brand  =[] ;
let x = prompt('Nhap ten hang:')

for (let i = 0; i < listPhones.length; i++) {
        const phone = listPhones[i];
        let value =phone['brand'];
        if(value.toLowerCase().includes(x.toLowerCase())){
           console.log(phone);
        }
}
    


