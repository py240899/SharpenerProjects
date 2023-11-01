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

var title = document.getElementsByClassName('title')
console.log(title);
title.style.color = "green";