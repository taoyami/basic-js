const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

  //throw new NotImplementedError('Not implemented');
  
  function transform(prevArr) {
    //throw new NotImplementedError('Not implemented');

    let arr = prevArr;
    let nextArr = [];
  
    if(Array.isArray(arr)){
      for(let i = 0 ; i < arr.length ; i++){
        let resArr = arr[i];
        
        if (resArr === '--discard-next' && arr[i+1]){
          arr.splice(i, 2)
        } else if (resArr === '--double-prev' && arr[i-1]){
          nextArr.push(arr[i-1])
        } else if (resArr === '--double-next' && arr[i+1]){
          nextArr.push(arr[i+1])
        } else if (resArr === '--discard-prev' && arr[i-1]){
          nextArr.pop()
        } else if(resArr != '--discard-next' && resArr != '--discard-prev' && resArr != '--double-next' && resArr != '--double-prev'){
          nextArr.push(arr[i])
        }
    }
     } else {
       throw new Error("'arr' parameter must be an instance of the Array!") 
     }
  
   return nextArr
  }

module.exports = {
  transform
};
