let myarr = [200, 500, 123];
// forEach() function and arrow function ()=>{}
myarr.forEach((element,index,arr)=>{
    console.log(`the element is ${element} and index : ${index}`);
});

// IIFE global pollution ko hatane k liye 

(()=>{
    console.log("This is iife");
})();

(function(){
    console.log("function keyword iife");
})();