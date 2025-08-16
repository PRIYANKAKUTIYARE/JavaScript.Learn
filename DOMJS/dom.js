//DOM Learning and Practice
// This file contains JavaScript code for DOM manipulation and event handling

let z = 123;
let viewname = "Priyanka";
let isLoggedIn = true;

console.table([z, viewname, isLoggedIn]);

const tempclasslist = document.getElementsByClassName('list-items');

undefined
const myconvert = Array.from(tempclasslist);

undefined
myconvert.forEach(function(li) {
  li.style.backgroundColor = 'grey';
});
undefined
myconvert.forEach(function(li) {
  li.style.color = 'grey';
});
undefined
const tempclasslist = document.getElementsByClassName('list-item');

undefined
const myconvert = Array.from(tempclasslist);

undefined
myconvert.forEach(function(li) {
  li.style.backgroundColor = 'grey';
});
undefined
myconvert.forEach(function(li) {
  li.style.padding = '5px';
});
undefined
myconvert.forEach(function(li) {
  li.style.backgroundColor = 'grey';
    li.style.margin = '10px';         // space between boxes
    li.style.padding = '10px 20px';   // inner spacing
    li.style.display = 'inline-block'; // makes each li act like a box
    li.style.width = '100px';         // set fixed width
    li.style.textAlign = 'center';    // center text inside
    li.style.borderRadius = '8px';
});
undefined
myconvert.forEach(function(li) {
   li.style.backgroundColor = 'grey';
    li.style.margin = '10px 0';       // vertical space between boxes
    li.style.padding = '10px 20px';   // inner spacing
    li.style.display = 'block';       // each box on a new line
    li.style.width = '200px';         // fixed width (optional)
    li.style.textAlign = 'center';    // center text inside
    li.style.borderRadius = '8px';
});
undefined
myconvert.forEach(function(li) {
   li.style.backgroundColor = 'grey';
    li.style.margin = '10px 0';       // vertical space between boxes
    li.style.padding = '10px 20px';   // inner spacing
    li.style.display = 'block';       // each box on a new line
    li.style.width = '200px';         // fixed width (optional)
    li.style.textAlign = 'center';    // center text inside
    li.style.borderRadius = '8px';   li.style.cursor = 'pointer';      // show hand cursor

    // ✅ make it clickable
    li.addEventListener("click", function() {
        alert("You clicked: " + li.textContent);
    });
});
undefined
myconvert.forEach(function(li) {
   li.style.backgroundColor = 'grey';
    li.style.margin = '10px 0';       // vertical space between boxes 
    li.style.padding = '10px 20px';   // inner spacing
    li.style.display = 'block';       // each box on a new line
    li.style.width = '200px';         // fixed width (optional)
    li.style.textAlign = 'center';    // center text inside
    li.style.borderRadius = '8px';   li.style.cursor = 'pointer';      // show hand cursor

    // ✅ make it clickable
    li.addEventListener("click", function() {
        alert("You clicked: " + li.textContent);
    });
});
undefined
myconvert.forEach(function(li) {
   li.style.backgroundColor = 'grey';
    li.style.margin = '10px 0';       // vertical space between boxes 
    li.style.color = 'white'
    li.style.padding = '10px 20px';   // inner spacing
    li.style.display = 'block';       // each box on a new line
    li.style.width = '200px';         // fixed width (optional)
    li.style.textAlign = 'center';    // center text inside
    li.style.borderRadius = '8px';   li.style.cursor = 'pointer';      // show hand cursor

    // ✅ make it clickable
    li.addEventListener("click", function() {
        alert("You clicked: " + li.textContent);
    });
});
undefined