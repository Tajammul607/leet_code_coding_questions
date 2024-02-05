const maxProductSubArray =(nums) =>{
    let maxStart=nums[0];
    let minEnd=nums[0];
    let productSum=0;

    for(let i=1; i<nums.length; i++){
        let tempMax=minEnd;
        maxStart =Math.max(nums[i] , Math.max(maxStart * nums[i] , minEnd * nums[i]));
        minEnd =Math.min(nums[i] , Math.min(tempMax * nums[i], minEnd *nums[i]));

        productSum =Math.max(productSum,maxStart)
    }

    return productSum
}

console.log(maxProductSubArray([2,3,-2,4]))