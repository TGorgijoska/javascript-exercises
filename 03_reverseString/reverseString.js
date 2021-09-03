const reverseString = function(str) {
    let strReverse = str.split('');
    strReverse.reverse();
    return strReverse.join('');
};

module.exports = reverseString;
