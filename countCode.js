function countCode(str) {
    // return early if str is not a string
    if (typeof str != "string") {
        console.log(0);
        return 0;
    }

    var count = 0
    for (var i = 0; i < str.length; i++) {
        // If last 4 letters is out of bound, finish the loop
        if (i+3 > str.length-1) {
            break;
        }

        // check 1st, 2nd, and 4th letter. skip 3rd letter because it's acceptable
        if (str[i] == "c" && str[i+1] == "o" && str[i+3] == "e") {
            count++;
        }
    }

    console.log(str + ": " + count);

    return count;
}

console.log("Test cases:")
countCode('aaacodebbb') // 1
countCode('codexxcode') // 2
countCode('cozexxcope') // 2

console.log("Extra test cases:")
countCode('abcdefg') // 0
countCode('code') // 1
countCode('core') // 1
countCode('cores') // 1
countCode('icore') // 1

console.log("Possible negative cases:")
countCode('') // 0
countCode('a') // 0
countCode('ab') // 0
countCode('abc') // 0
countCode('abcd') // 0
countCode(undefined) // 0
countCode(null) // 0
countCode(1234124151234123) // 0
countCode({name: "code"}) // 0
countCode([]) // 0
countCode(["code"]) // 0
countCode(["c", "o", "d", "e"]) // 0


