//#region 
// function calc(nums){
//     var res =  0;
//     for(var i = 0; i < nums.length; i++){
//         res += nums[i];
//     }
//     return res;
// }
// var arr = [1,2,3,4,5,6];
// console.log(calc(arr));
// x = "";
// console.log(typeof x);
// var y = function (a , b){
//     return(a + b);
// }
// console.log(y(1,2));
// var x = 0;
// document.getElementById("show").onclick = function(){
//     document.getElementById("demo").innerHTML = x;
//     //console.log(x);
//     x++;
// }
// setTimeout(function(){
//     console.log("Allah Akbar and Mohamed Is A Proohet Of Allah")
//    // document.getElementById("demo").innerHTML = "Allah Akbar and Mohamed Is A Proohet Of Allah";
// }, 4000);
// console.log("Allah Akbar");
// arrow function{
// Arrays
// let arr = [4, 5, 9, 10, 3, 2];
// arr.sort(function (a, b){return a - b;}).reverse();
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'object' || typeof arr[i] === 'string'){
//         for(let j = 0; j < arr[i].length; j++){
//             console.log(arr[i][j]);
//         }
//     }
//     else{
//
//         console.log(arr[i]);
//     }
// }
// Aplication Programing Interface
// let arr = [4, 5, 9, 10, 3, 2];
// let arr1 = [4, 5, 9, 10, 3, 2];
// arr = arr.join('');
// console.log(arr)
// arr
// function show(){
//     document.getElementById("demo").innerHTML = arr;
//     arr = arr.concat(arr);
// }
// mainloop:for(let i = 1; i <= 10; i++){
//     nested:for(let j = 1; j <= 10; j++){
//         console.log(i, j);
//         if(j == 5)
//             break nested;
//         else if(i == 5)
//             break mainloop;    
//     }
// }
// document.querySelector("#demo").innerHTML = "<h1>A</h1>";
// document.getElementById("cli").onclick = function (){
//     let x = document.querySelector("#demo").style.color;
//     if(x != "red"){
//         document.querySelector("#demo").style.color = "red";
//         document.querySelector("#demo").style.background.color = "green";
//     }
//     else
//         document.querySelector("#demo").style.color = "green";
// } 
// let user = {
//     name : 'ahmed',
//     age : 19,
//     skills: ["Reading", "Football", "Basktball"],
//     available: true,
//     addresses: {
//         ksa: "Ridadh",
//         egypt: {
//             one: "Cairo",
//             two: "Giza",
//         },
//     },
//     checkAv: function(){
//         if(user.available === true){
//             return `free for work`;
//         }else{
//             return `Not Free`;
//         }
//     },
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.available);
// console.log(user.skills);
// console.log(user.skills[0]);
// console.log(user.skills[0]);
// console.log(user.skills[1]);
// console.log(user.addresses);
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt);
// console.log(user.addresses.egypt.one);
// console.log(user.addresses.egypt.two);
// console.log(user.checkAv());
// console.log(user.checkAv());
// console.log(user.);
// let user = {
// name: "ahmed",
// age: 850,
// doubleage : function (){
//     return this.age * 2;
// }
// };
// console.log("--------------user--------------\n");
// console.log(user);
// console.log(user.age);
// console.log(user.doubleage());
// let copyObj = Object.create(user);
// // user.age = 10;
// copyObj.age = 10;
// console.log("--------------user--------------\n");
// console.log(user);
// console.log(user.age);
// console.log(user.doubleage());
// console.log("--------------copyObj--------------\n");
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleage());
// user.age = 80;
// // copyObj.age = 80;
// console.log("--------------user--------------\n");
// console.log(user);
// console.log(user.age);
// console.log(user.doubleage());
// console.log("--------------copyObj--------------\n");
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleage());
// console.log(user);
// console.log(copyObj);
// let o1 = Object(
//     {
//         name: "ahmed",
//     }
// );
// console.log(o1.name);
// let o2 = Object(
//     {
//         age: 19,
//         mt:(a,b)=>{
//             console.log("");
//         }
//     }
// );
// let o3 = Object(
//     {
//         id: 20201701053,
//     }
// );
// let o4 = Object.assign({},o1,o2,o3);
// o4.name = "ALi";
// o4.age = "ALi";
// console.log(o4);
// console.log(o1);
// console.log(o2);
// console.log(o3);
//<<------- Dom = Documents Object Model------->>
// let myid = document.getElementById("cli");
// let mytage = document.getElementsByTagName("p");
// let myclass = document.getElementsByClassName("a")[0].textContent = "AAAAA";
// let query = document.querySelector("");
// let queryA = document.querySelectorAll(".a");
// // console.log(myid);
// // console.log(mytage[0]);
// // console.log(mytage[1]);
// // console.log(mytage[2]);
// // console.log(myclass[0]);
//document.querySelector("#pid").innerHTML = `<h1>${document.querySelector("#pid").textContent}</h1><br/><br/>`;
// innerText
// let myTagenme = document.getElementsByTagName("p");
// let im = document.images;
// console.log(im[0].getAttribute("src"));
// console.log(im[0].getAttribute("alt"));
// im[0].setAttribute("src", "");
// im[0].setAttribute("alt","eman");
// console.log(im[0].getAttribute("src"));
// console.log(im[0].getAttribute("alt"));
// console.log(im[0].attributes)
// console.log(im[0].hasAttribute("title"));
// console.log(im[0].hasAttribute("src"));
//#endregion

let myElem = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let mycoment = document.createComment("MY COMMENT AHMED");
myElem.className = "product";
myElem.setAttribute("data-custom", "testing");
for(let i = 0; i < 5; i++){
    let mytext = document.createTextNode("Product One 1  ");
    myElem.appendChild(mytext);
}
myElem.appendChild(mycoment);
myElem.prepend(mycoment);
document.body.appendChild(myElem);
console.log(myElem);
// Append