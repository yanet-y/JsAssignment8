//Exercise 1
function doubler(nums){
    const arr= [];
    for (element of nums){
        arr.push(element*2)
        
    }
    return arr;
}
const nums = [1,2,3,4];
const doubledArray= doubler(nums);
console.log(doubledArray);

//Exercise 2
function printObject(obj){
    for ( const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

const Employee ={
    name:'Abebe',
    age : 37
};
printObject(Employee);

//Exercise 3
 function printArray(str){
    for(string of str){
        console.log(string);
    }
   
 }
 const stringArray=["Yanet","Yohannes","Beyene"]
 setTimeout(() => printArray(stringArray),1000);