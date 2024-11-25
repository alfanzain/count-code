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

module.exports = countCode;