const countCode = require('./countCodeRegex')

console.log("Test count code with regex:")

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
