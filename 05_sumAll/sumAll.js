const sumAll = function(num1, num2) {
    let sum=0;
    if(isNaN(num1) || isNaN(num2) || num1 <0 || num2<0 ){
        return 'ERROR';
    }
    if(num1 >= num2){
        for(let i=num2; i<=num1; i++){
            sum+=num2;
            num2++;
        }
    }
    else {
        for(let i=num1; i<=num2; i++){
            sum+=num1;
            num1++;
        }
    }
    return sum;
    
};

module.exports = sumAll;
