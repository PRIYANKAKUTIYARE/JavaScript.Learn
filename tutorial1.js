// console.log("✅ tutorial1.js is loaded!");
// console.log("Welcome to the JavaScript tutorial!");
// console.log("This is a simple script to demonstrate JavaScript functionality.");

// //functios in javascript
// function greet(name) {
//     console.log(`Hello, ${name}! Welcome to the JavaScript tutorial.`);
// }   
// function add(a, b) {
//     return a + b;
// }   

// function createcourse(name, durations, price) {
//     return {
//         name: name,
//         durations: durations,
//         price: price
//     };
// }
// console.log(x);
// greet("Priyanka");
// console.log("Sum of 5 and 10 is:", add(5, 10));     
// console.log("Course created:", createcourse("JavaScript Basics", "4 weeks", 99.99));

// console.log(this.a);
// console.log(window.a);
// // Uncomment the line below to see the value of x
// var x = 10;
// var a = 20;
// console.log("Value of x is:", x);
// console.log(window.a);
// console.log(this.a);

// console.log("this === window:", this === window );
// // console.log("Value of x is:", x);
// //const cannot be reassigned, so the following line is commented out
// // x = 20; // This will throw an error if uncommented   
// //var x = 20; // This will not throw an error, but it will change the value of x
// // var cannot be reassigned, so the following line is commented out

// let z = 30; // let can be reassigned
// const y = 40; // const cannot be reassigned
// var w = 50; // var can be reassigned

// {
//     let v = 60; // This z is block-scoped
//     console.log("Inside block, v:", v); // 60
// }
// console.log("Outside block, v:", v); // 30

// function hello(){
//     let g = "Hello, Priyanka!";
//     console.log(g);
// }
// hello(); // This will log "Hello, Priyanka!" to the console

// let globalVar = "I am global";

// function outer() {
//     let outerVar = "I am outer";

//     function inner() {
//         console.log(globalVar); // ✅ from global
//         console.log(outerVar);  // ✅ from outer
//     }

//     inner();
// }

// outer();

// function add(a,b){
//     return a + b;
// }

// // console.log(add);
// // console.log(add(5, 10)); // Outputs: 15

// let sum = function(a,b){
//     return a+b;
// }

// // console.log(sum);
// // console.log(sum(5, 10)); // Outputs: 15

// // console.log(typeof add); // Outputs: function
// // console.log(typeof sum); // Outputs: function

// let diff = function(a, b) {
//     return a - b;
// }   

// // console.log(diff(10, 5)); // Outputs: 5

// function operator(functionasargument, a, b) {
//     return functionasargument(a, b);
// }

// // console.log(operator(add, 5, 10)); // Outputs: 15
// // console.log(operator(sum, 5, 10)); // Outputs: 15       
// // console.log(operator(diff, 10, 5)); // Outputs: 5

// let multiply = (a, b) => {
//     return a * b;
// }
// // console.log(multiply(5, 10)); // Outputs: 50
// // console.log(operator(multiply, 5, 10));


// function outer(){
//     let count = 0;
//    function inner(){
//         count++;
//         console.log(count);
//     }
//     // inner();
//     return inner;
// }

// let increament = outer();
// increament(); // Outputs: 1
// increament(); // Outputs: 2         
// increament(); // Outputs: 3



//new comment 
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Priyanka", sayBye);


// function fetchdata() {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         console.log("Data fetched successfully!");
//     }, 2000);
// }   

// fetchdata();

// function fetchdatafromserver(){
//     console.log("fetching data from server...");
//     setTimeout(() => {
//         console.log("Data fetched from server successfully!!!!")
//     }, 8000);
// }
// fetchdatafromserver();

// function fetchdatacallback(callback){
//     console.log("Fetching data...");
//     setTimeout(() =>{
//         console.log("Data fetched succssfully by using callback!!!!");
//         callback();
//     }, 3000);
// }
// fetchdatacallback(() => {
//     console.log("Callback executed after data fetch!");
// });


// function fetchdatawithparameter(callback, name){
//     console.log("Fetching data for " + name + "...");
//     setTimeout(() => {
//         console.log("Data fetched successfully for " + name + "!");
//         callback(name);
//     }, 4000);
// }


// fetchdatawithparameter((name) => {
//     console.log("Callback executed after data fetch for " + name + "!");
// }, "Priyanka");


// function fetchData(callback){
// console.log("Starting data fetch...");
//     setTimeout(() =>{
//         let data = 'fetched data';
//         callback(data,null);
//     }, 5000);
// }

// function handleData(data, error){
//     if(error){
//         console.error("Error fetching data:", error);
//     }else{
//         console.log("Data received:", data);    
//     }
// }
// fetchData(handleData);


// let arg1 = "start";  
// function asyncOperation1(arg, callback) {
//     setTimeout(() => callback(arg + " -> step1"), 1000);
// }
// function asyncOperation2(arg, callback) {
//     setTimeout(() => callback(arg + " -> step2"), 1000);
// }
// function asyncOperation3(arg, callback) {
//     setTimeout(() => callback(arg + " -> step3"), 1000);
// }
// asyncOperation1(arg1,(result1) => {
//     asyncOperation2(result1, (result2) => { 
//         asyncOperation3(result2, (result3) => {
//             console.log("Final result:", result3);
//         });
//     });
// }); 

//Promises

function getDat(){
    console.log("Fetching data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched successfully!";
            resolve(data);
            const error = "Error fetching data!";
            reject(error);
        }, 2000);
    });
}

getDat()
.then((data) => {
    console.log(data);
})  
.catch((error) => {
    console.error("Error:", error);
}); 

async function getdata(){
    try{
        const result = await getDat();
        console.log(result);
    }
    catch(error){
        console.error("Error:", error);
    }
}