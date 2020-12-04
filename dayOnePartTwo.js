const fs = require('fs').readFileSync;
const file = fs('input.txt','utf-8').split('\n') .map(file => parseInt(file,10));

let result = 0;

for (let x of file){
    for (let y of file){
        for(let z of file){
            if(x + y + z === 2020){
                result = x * y * z;
                break;
            }
        }
    }
}

console.log(result);