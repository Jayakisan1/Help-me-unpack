const helper = require('./helper.js');

const GET_url = 'https://hackattic.com/challenges/help_me_unpack/problem?access_token=bca4271990f41bef';

const POST_url = 'https://hackattic.com/challenges/help_me_unpack/solve?access_token=bca4271990f41bef';

let mapping = {
    'A': '000000',
    'B': '000001',
    'C': '000010',
    'D': '000011',
    'E': '000100',
    'F': '000101',
    'G': '000110',
    'H': '000111',
    'I': '001000',
    'J': '001001',
    'K': '001010',
    'L': '001011',
    'M': '001100',
    'N': '001101',
    'O': '001110',
    'P': '001111',
    'Q': '010000',
    'R': '010001',
    'S': '010010',
    'T': '010011',
    'U': '010100',
    'V': '010101',
    'W': '010110',
    'X': '010111',
    'Y': '011000',
    'Z': '011001',
    'a': '011010',
    'b': '011011',
    'c': '011100',
    'd': '011101',
    'e': '011110',
    'f': '011111',
    'g': '100000',
    'h': '100001',
    'i': '100010',
    'j': '100011',
    'k': '100100',
    'l': '100101',
    'm': '100110',
    'n': '100111',
    'o': '101000',
    'p': '101001',
    'q': '101010',
    'r': '101011',
    's': '101100',
    't': '101101',
    'u': '101110',
    'v': '101111',
    'w': '110000',
    'x': '110001',
    'y': '110010',
    'z': '110011',
    '0': '110100',
    '1': '110101',
    '2': '110110',
    '3': '110111',
    '4': '111000',
    '5': '111001',
    '6': '111010',
    '7': '111011',
    '8': '111100',
    '9': '111101',
    '+': '111110',
    '/': '111111'
};




const convert = helper.getTask(GET_url)
    .then((data) => {
        let base = data['bytes'];
        let requestBytes = Buffer.from(base, 'base64');
        let myint = requestBytes.readInt32LE(0);
        console.log(myint);
        let myunsigned = requestBytes.readUInt32LE(4);
        console.log(myunsigned);
        let myshort = requestBytes.readInt16LE(8);
        console.log(myshort);
        let myfloat = requestBytes.readFloatLE(12);
        console.log(myfloat);
        let myDouble = requestBytes.readDoubleLE(16);
        console.log(myDouble);
        let myDoubleBE = requestBytes.readDoubleBE(24);
        console.log(myDoubleBE);

        let sendingData = {
            "int": myint,
            "uint": myunsigned,
            "short": myshort,
            "float": myfloat,
            "double": myDouble,
            "big_endian_double": myDoubleBE
        };
        //let sendingDataJson = JSON.stringify(sendingData);
        helper.sendTask(POST_url, sendingData).then((response) => {
            console.log(response);
        }).catch((error) => {console.log(error);});
    });