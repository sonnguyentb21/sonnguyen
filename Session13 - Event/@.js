
function addPhone() {
    let phoneNameDom = document.getElementById('txtPhoneName')
    let phoneName = phoneNameDom.value;
    phoneNameDom.value = '';
    let listPhonesDom = document.getElementById('list-phones')
    listPhonesDom.innerHTML += `<li>${phoneName}</li>`;
}

// function enterAddPhone (e){
//     if(e.key === 'Enter'){
//         addPhone();
//     }
// }

   