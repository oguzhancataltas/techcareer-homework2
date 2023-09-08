let numberArray = [10,99,66,763,55,987,13,34,19,26,355,13,11];

let orderArray = [];
orderArray.push(numberArray[0]);

for( let i = 1; i < numberArray.length; i++ ) {
    
    var isTrue = false;
    let temp = numberArray[i];

    for( let j = 0 ; j < orderArray.length; j++ ) {
        if( temp < orderArray[j] ) {
            orderArray.splice(j, 0, temp);
            isTrue = true;
            break;
        }
    }
    if(!isTrue) {
        orderArray.push(temp);
    }
}

console.log(orderArray);