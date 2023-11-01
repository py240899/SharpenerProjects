//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);

console.log(document.domain);
console.log(document.title);
//document.title = 123;

console.log(document.all);
console.log(document.all[10]);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'HELLO';
//headerTitle.textContent = 'GOODBYE';

//console.log(headerTitle.innerText);

header.style.borderBottom = "solid 3px #000";

// var title = document.getElementsByClassName('title')
// console.log(title);
// title.style.color = "green";

var items = document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[2]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = "bold";
items[2].style.backgroundColor = "green";

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor = "#f4f4f4";
}

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight ="bold";
}