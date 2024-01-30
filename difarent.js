// // for(let m = 1; m < 30; m++){
// //     if( m % 5 === 0){
// //         console.log(m);
// //     }
// }

let total = 0;
for( i = 3; i < 50; i++){
    if(i % 3 === 0){
        console.log(i);
        total = total + i
    }
}
console.log('total:',total);