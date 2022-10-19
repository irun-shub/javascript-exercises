const removeFromArray = function(arryParameter,...anyOtherParameter) {
  
     for(let i = 0;i < arryParameter.length ; i++){
        if(arryParameter[i] === anyOtherParameter){
            arryParameter.splice(i,1);
        }
     }
    return arryParameter;

};

// Do not edit below this line
module.exports = removeFromArray;
