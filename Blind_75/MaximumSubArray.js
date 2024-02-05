/**
 * Kadane's Algo is efficient way to handling the maximum subarray
 * The key behind the idea of Kadane's algo is keep track of maxSum while ruuning the array
 */

const maxSubArray =(arr) =>{
    let curSum=arr[0];
    let maxSum=arr[0];

    for(let i=1; i<arr.length; i++){
        curSum =Math.max(arr[i], curSum +arr[i]);
        maxSum=Math.max(maxSum, curSum)
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))