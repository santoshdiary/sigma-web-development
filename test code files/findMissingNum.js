var missingNumber = function(nums) {
    let n=nums.length;

    // range= [0, n]
    
   let actualSum= n*(n+1)/2;
   let obtainSum=0

   for(let i=0; i<n;i++){
    obtainSum+=nums[i]
   }

   return (actualSum-obtainSum)
};