function countCode(str) {
    // return early if str is not a string
    if (typeof str != "string") {
        console.log(0);
        return 0;
    }

    const matches = str.match(/co.e/g);
    console.log(matches?.length ?? 0);
    
    return matches?.length ?? 0;
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