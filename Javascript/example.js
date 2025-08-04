// console.log("hi everyone");

// let name;
// console.log("name", name);

// // 1 

// function print(hero, abc='13'){
//     console.log("HI, I am normal function");
//     console.log(abc);
// }

// print('hello', "prabhas");

// // 2 

// let b = function () {
//     console.log("anonymous function");
// };

// b();

// //3 arrow function or anonymous arrow function

// let c =()=> {
//     console.log("this is arrow function")
// };

// c();



// // function vaccinate(person) { 
//     //     console.log(person + 'has been vaccinated.')
//     // }
    
//     // for (var i = 0; i < persons.length; i++) {  
//         // vaccinate(persons[i]);  
//         // }
        
//         // HIGHER ORDER FUNCTION 
//         var persons = ['Chandra', 'Varun', 'Nrupul', 'Prateek', 'Aman'];

//  let result = persons.forEach((element, i)=>{
//             console.log(element, i);
//             return element;
//         });


//map 
let array = [ 1,2,3,4,5,6,7,8,9,10];


let evenArray = array.map((element)=>{


    if(element % 2 ===0) {
        return element;
    } ;
});

console.log(evenArray)


//filter

//sort high order function

let array3 = [ 34,-9, 34, 767, 1,0];

let sortArray = array3.sort((a,b)=>{
    return b-a;
});

console.log(sortArray)

//reduce


let array4= [1,2,3,4];

let output = array4.reduce((acc,current)=>{

    return acc *current;

},1);

console.log(output);