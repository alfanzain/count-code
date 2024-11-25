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

    console.log(count);

    return count;
}

module.exports = countCode;