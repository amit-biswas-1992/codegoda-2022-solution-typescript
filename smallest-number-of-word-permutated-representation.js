function minValue(str) {
    var map = {
        'z': [0, 'zero'],
        'w': [2, 'two'],
        'u': [4, 'four'],
        'x': [6, 'six'],
        'g': [8, 'eight'],
        'o': [1, 'one'],
        'h': [3, 'three'],
        'f': [5, 'five'],
        's': [7, 'seven'],
        'i': [9, 'nine']
    };
    var freq = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        var ch = str[i];
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    console.log(freq);
    var numFreq = new Array(10).fill(0);
    for (var key in map) {
        var index = key.charCodeAt(0) - 'a'.charCodeAt(0);
        var count = freq[index];
        var numString = map[key][1];
        while (count > 0) {
            numFreq[map[key][0]]++;
            for (var i = 0; i < numString.length; i++) {
                freq[numString.charCodeAt(i) - 'a'.charCodeAt(0)]--;
            }
            count--;
        }
    }
    console.log(numFreq);
    var result = '';
    let numberCount = 0;
    for (var i = 1; i < 10; i++) {
        let count = numFreq[i];
        while (numFreq[i] > 0) {
            numberCount++;
            result += i;
            if (numberCount == 1) {
                if (count > 0) {
                    while (numFreq[0] > 0) {
                        result += '0';
                        numFreq[0]--;
                    }
                }
            }
            numFreq[i]--;
        }
    }
    return parseInt(result);
}
var str = "otwtheerzeorzero";
console.log(minValue(str));
