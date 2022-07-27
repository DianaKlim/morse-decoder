const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':      ' ',
};


function arrayFromTenLetter(expr) {
    let arrayTenLetter = [];
    for (i = 0; i < expr.length; i = i + 10) {
        let sliceArray = expr.slice(i, i + 10);
        arrayTenLetter.push(sliceArray)
    }
    return arrayTenLetter
}


function encodedLetter(arrayTenLetter) {
    return arrayTenLetter.map(item => {
        item = item.replace(/10/g, '.');
        item = item.replace(/11/g, '-');
        item = item.replace(/[*]+/g, ' '); //если [*]+ то звездочка встретится один или больше раз 
        item = item.replace(/0/g, '');
        return item
    })
}

function MorzeInterpreter(arrayMorze) {
console.log(arrayMorze)
   const letterInArray = arrayMorze.map(elem => {
    return MORSE_TABLE[elem]
    })
    const result = letterInArray.join('')
        return result
}


function decode(expr) {
    const arrayTenLetter = arrayFromTenLetter(expr);
    const arrayMorze = encodedLetter(arrayTenLetter);
    return MorzeInterpreter(arrayMorze);
}

// const expr = '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010';
// console.log(decode(expr));


module.exports = {
    decode
}