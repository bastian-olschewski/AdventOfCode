const fs = require('fs').readFileSync;
const file = fs('input.txt','utf-8').split('\n') .map(file => parseInt(file,10));

let result = 0;

for (let x of file){
    for (let y of file){
        if(x + y === 2020){
            result = x * y;
            break;
        }
    }
}

console.log(result);


