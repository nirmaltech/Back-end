// Fundamentals of javaScript:
// arrays and objects
// function return
// async js coding

// Array[foreach, map, filter, find , indexOf]

// var arr = [1,2,3,4,"hey",{},true,function(){},[]]

// var arr = [1,2,3,4];
// // foreach map filter find indexof
// arr.forEach(function(val){

//    console.log(val + " Hello");
    
// })

// let arr = [1,2,3,4,5];

// let newarr = arr.map((val)=>{
//    // return 13;
//    return val * 2;
// })

// console.log(newarr);

// let arr = [1,2,3,4];

// let newarr = arr.filter((val)=>{
//     if(val > 2) {return true;}
//     else {return false;}
// })

// console.log(newarr);

// let arr = [1,2,3,4,5];

// let ans = arr.find((val)=>{
//     if(val === 3) {return val;}
// })
// console.log(ans);

// indexOf

// let arr = [12,3,3,4,5];

// let ans = arr.indexOf(3);
// console.log(ans);

// Objects

// let obj = {
//     name: "Nirmal",
//     age: 20,
// }


// Object.freeze(obj)// We can change the value of objects
// // obj.name
// // obj['name']
// obj.age = 25;

// find the length of function

//  function abcd(a,c,v,d){
    
// }
// the length is 4

// function val(){
//     return 100;
// }

// let ans = val();

// async 

// when code run line by line then called the synchronous
// jo bhi code async nature ka ho , usey side stack me bejh do and agle code ko run karo jo bhi sync nature ka ho , jb bhi sar sync code run ho jye , tab check karo async code complete hua ya nhi and bo complete hua ho toh usee me lao aour run akro

async function abcd(){
    const blob =  await fetch("https://randomuser.me/api/")
    const ans = await blob.json();
   
    console.log(ans.results[0].name);
    
   }
   
   abcd();
   
   