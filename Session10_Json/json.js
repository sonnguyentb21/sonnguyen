// let name  ='Son';
// let age = 19;
// let numbers = [1,2,3,4,5];
// let infor ={
//     'name': 'Son',
//     age : 19,
// };
// let sName = JSON.stringify(name);
// console.log(name);
// console.log(sName);
// let sAge = JSON.stringify(age);
// console.log(sAge);
// let sInfor = JSON.stringify(infor);
// console.log(infor);
// console.log(sInfor);
// let newInfor = JSON.parse(sInfor)
// console.log(newInfor);

let http = new XMLHttpRequest();
http.onreadystatechange = function () {
   if(this.readyState === 4
        && this.status === 200){
           // console.log(this.responseText);
            let data = JSON.parse(this.responseText)
           // console.log(data);
           console.log(`Now:${data.date}`);
           console.log(`Temp:${data.temperature}`);

        }
    
}
http.open('GET', 'https://weather-data-demo.herokuapp.com/get-weather-today');
http.send();
