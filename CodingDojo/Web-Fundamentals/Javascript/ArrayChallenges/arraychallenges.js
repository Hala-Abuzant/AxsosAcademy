
// function alwaysHungry(arr)
// {
//         var counter=0;
//     for( var i =0;i<arr.length;i++)
//     {
//     if( arr[i]=="food")
//     {
//         console.log("yummy");
//         counter++;   }}


//     if ( counter==0)
//     {
//         console.log("i am hungry");
//     }

//     }      



//     function highPass(arr, cutoff) {
//         var filteredArr = [];

// for(var i=0;i<arr.length;i++){
    
// if(arr[i]> cutoff){
//     filteredArr.push(arr[i]);
// }
// }    
//         return filteredArr;
//     }

//     var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//     console.log(result); 



function reverse(arr) {
    var temp=[];
for(var i=0;i<arr.length;i++)
{
    temp[i]=arr[arr.length-1-i]
}
    
    return temp;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);

console.log(result); 



// function fibonacciArray(n) {
    
//     var fibArr = [0, 1];
//    for(var i=2;i<n;i++)
//        fibArr[i]=fibArr[i-1]+fibArr[i-2];
//     return fibArr;
// }
   
// var result = fibonacciArray(10);
// console.log(result); 
