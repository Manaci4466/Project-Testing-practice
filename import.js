export {sum,capitalize,reverseString,calculator,ceaserCipher,analyzeArray};
const sum =  (a,b) => {
    return a + b;
}
const capitalize = (str) => {
    // returns a string with all matches replaced
    return str.replace(str[0],str.at(0).toUpperCase())
}

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const calculator = {
    add(a,b) {
        return a + b;
    },
    subtract(a,b){
        return a - b
    },
    divide(a,b){
        return a / b;
    },
    multiply(a,b){
        return a * b;
    }
}

const ceaserCipher = (str,shiftFactor) => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const indices = [];
    let result = '';
    let rest;
    // O(n * 27) linear search time complexity 
    while(indices.length < str.length){
        for(let i = 0; i < alphabet.length; i++){
            if(indices.length < str.length && str[indices.length].toLowerCase() === alphabet[i]){
                indices.push(i);
            }
        }
    }
    // shift string indices add/subtract indices depedning on shift factor
        indices.forEach((value,index) => {
            if(value + shiftFactor > 25){
                rest = (value + shiftFactor) % 25;
                if(str[index] === str[index].toUpperCase())  result += alphabet[rest - 1].toUpperCase();
                else{
                    result += alphabet[rest - 1];
                }
                return;
            }
            if(value + shiftFactor < 0){
                rest = (value + shiftFactor) % 25;
                if(str[index] === str[index].toUpperCase())result += alphabet[alphabet.length - rest].toUpperCase();
                else{
                    result += alphabet[alphabet.length + rest];
                }
                return;
            }
            
            if(str[index] === str[index].toUpperCase())result += alphabet[value + shiftFactor].toUpperCase();
            else {
            result += alphabet[value + shiftFactor];
            } 
            
        })

    return result;
}

const analyzeArray = (arr) => {
    let average = 0;
    let min;
    let max;
    for(let i = 0; i < arr.length; i++){
        average += arr[i];
        if(max < arr[i] || i === 0){
            max = arr[i];
        }
        if(min > arr[i] || i === 0){
            min = arr[i];
        }
    }
    average /= arr.length;
    // linear search



    return {average,min, max,length: arr.length}
}

