// //EXAMINE THE DOCUMENT OBJECT//

// //console.dir(document);

// console.log(document.domain);
// console.log(document.title);
// //document.title = 123;

// console.log(document.all);
// console.log(document.all[10]);

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// //console.log(headerTitle);
// //headerTitle.textContent = 'HELLO';
// //headerTitle.textContent = 'GOODBYE';

// //console.log(headerTitle.innerText);

// header.style.borderBottom = "solid 3px #000";

// // var title = document.getElementsByClassName('title')
// // console.log(title);
// // title.style.color = "green";

// //GET ELEMENT BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[2]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = "bold";
// items[2].style.backgroundColor = "green";

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight ="bold";
// }

// //GET ELEMENTS BY TAG NAME  

// var items = document.getElementsByClassName('new-list-group-item');
// console.log(items);
// items[0].textContent = 'Hello new item';
// items[0].style.fontWeight = "bold";
// items[0].style.backgroundColor = "blue";

//QUERY SELECTOR AND QUERY SELECTOR ALL

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';


// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = "green";

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = "none";

//QUERY SELECTOR ALL


// Deliverable

// 1-)Using QuerySelectorALL change the font color to green for 2nd item in the item list
// 2-)Choose all the odd elements and make their background green using QuerySelectorALL

var secondItem = document.querySelectorAll('.list-group-item');
secondItem[1].style.color = "green";


var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green"
}