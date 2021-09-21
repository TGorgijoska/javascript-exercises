const palindromes = function (string) {
    let newString = "";
    for(let i=string.lenght-1; i<=0 ; i--){
        newString += string.substr(i,1);
    }
    if(newString == string) return true;
    return false;
};

module.exports = palindromes;
