import {capitalize,calculator,reverseString,ceaserCipher,analyzeArray} from './import';
// Triangulation
test('Capitlizes a string manasseh --> Manasseh',() => {
    expect(capitalize('manasseh')).toBe('Manasseh');
})

 test('Reverses a string manasseh --> hessanam',() => {
    expect(reverseString('manasseh')).toBe('hessanam');
})

test('adds 1 + 2 to equal 3',() => {
    expect(calculator.add(1,2)).toBe(3);
});

test('divides 2 by 2 ',() => {
    expect(calculator.divide(2,2)).toBe(1);
});

test('substract 3 from 5',() => {
    expect(calculator.subtract(3,5));
});

test('multiply 5 by 5',() => {
    expect(calculator.multiply(5,5)).toBe(25);
});

test('ceaser Cipher this Manasseh one character forward --> Nbobttfi ',() => {
    expect(ceaserCipher('Manasseh',13)).toBe('Znanffru');
})

test('ceaser Cipher this hallo one character backward --> gzkkn',() => {
    expect(ceaserCipher('hallo',-1)).toBe('gzkkn');
});

test('analyzes array and returns the average, minimu, maximum, length',() => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
}) 