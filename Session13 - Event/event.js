// function helloWorld() {
//     alert('Hello World');
//     console.log('12345');
    
// }

// let h2Dom = document.getElementById('title');
// h2Dom.addEventListener('click', helloWorld);
// function welcome(){
//     let inputName = document.getElementById('inputName');
//     // console.dir(inputName.value);
//     alert('Thành Công: ' + inputName.value);
    
// }
// function check(e, t){
//     console.log(e);
//     console.dir(t);
//     let inputName = document.getElementById('inputName');
//     let inputPass = document.getElementById('inputPass');
//     if (inputName.value === 'admin' && inputPass.value === '123456'){
//         alert ('Welcome: ' )
//         window.location = "https://www.24h.com.vn/";
//         // window.location.href = "https://www.24h.com.vn/";
//         // window.location.replace('https://www.24h.com.vn/')
//     }
//     else{
//         alert('Wrong Name or Pass')
//     }
// } 
// function enterLogin(e, t){
//     console.log(e);
//     console.log(t);
//     if(e.key === 'Enter'){
//         check();
//     }
// }

    let listPhones = [];
     function addPhone(){

        let phoneNameDom = document.getElementById('txtPhoneName');
        let phoneName = phoneNameDom.value.trim();
        if(phoneName === ''){
            alert("Nhập tên điện thoại");
            return;
        }
        phoneNameDom.value = '';


        listPhones.push(phoneName);
        // displayListPhones();
        displayListPhones(listPhones);
     }

     function displayListPhones(){
     function displayListPhone(phones){
        let listPhoneDom = document.getElementById('list - phones');
        listPhoneDom.innerHTML = '';
        for (let i = 0; i < listPhones.length; i++) {
            const phoneName = listPhones[i];
            for (let i = 0; i< phones.length; i++) {
            const phoneName = phones[i];
            }
            listPhonesDom.innerHTML += `<li>${phoneName}</li>`;
        }
    }  
    }
        
     function searchPhone(){
         let txtSearchDom = document.getElementById('txtSearch');
         let search = txtSearchDom.value;
         let result = listPhones.filter(function(v){
             return v.toLowerCase().includes(search.toLowerCase());
         });
         displaylistPhone(result);
     }  
     function enterAddPhone(e){
         if(e.key === 'Enter'){
             addPhone();
         }
     }
    

   