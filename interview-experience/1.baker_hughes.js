// let a = 10;
// {
// var b = 20;
// let a = 30;
// console.log(a);
// }
 
// console.log(a);
// console.log(b);



// const a = {
//     name: 'name1'
//   };
//   let b = a;
//   b.name = 'name2'
//   console.log(a)


// for(var i = 0; i < 5; i++) {
//     setTimeout(()=>{
//              console.log(i);
//     });
//     }


// for(var i = 0; i < 5; i++) {
//     let x = i
//     setTimeout(()=>{
//          console.log(x);
//     });
// }


// function sumOfArray(arr){
//     return new Promise((resolve,reject)=>{
//         if(arr.length == 0){
//             reject("length should be greater than 0")
//         }else{
//             let sum = 0;
//             for(let i=0;i<arr.length;i++){
//                 sum += arr[i]
//             }
//             resolve(sum)
//         }
//     })
// }

// async function main(){
//     let result = await sumOfArray(arr)
//     console.log(result)
// }

// main()


// function sumOfArray(arr){
//     return new Promise((resolve,reject)=>{
//         if(arr.length == 0){
//             reject("length should be greater than 0")
//         }else{
//             let sum = 0;
//             for(let i=0;i<arr.length;i++){
//                 sum += arr[i]
//             }
//             resolve(sum)
//         }
//     })
// }

// async function main(){
//     let result = await sumOfArray(undefined)
//     console.log(result)
// }

// main()