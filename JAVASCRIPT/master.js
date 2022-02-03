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

let arr = [4, 5, 4, "ahmed", 2, 8, [4, 3, 12, 1], 10, 3, 2];
console.log(typeof arr);
for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'object' || typeof arr[i] === 'string'){
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
    else{
        console.log(arr[i]);
    }
}


