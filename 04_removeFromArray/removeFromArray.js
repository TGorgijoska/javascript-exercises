const removeFromArray = function(array, ...arg) {
    for(let i=0;i< arg.length;i++){
        let index = array.indexOf(arg[i]);
        if(index != -1){
            array.splice(index,1);
        }
    }
    return array;
    
};

module.exports = removeFromArray;
