const moveZero=(nums)=>{
    let j=0
    for(let i=0; i<nums.length; i++){
        if(nums[i] !=0){
            [nums[i] , nums[j]] =[nums[j] , nums[i] ]
            j++;
        }
    }
}


/**
 * Initial State:

j = 0, pointing to the first position where a non-zero element could be placed.
nums = [0, 1, 0, 3, 12]
Iteration 1:

i = 0, nums[i] = 0. Since it's zero, we don't swap and move to the next element.
j remains 0.
nums = [0, 1, 0, 3, 12]
Iteration 2:

i = 1, nums[i] = 1. It's non-zero, so we swap with the element at j = 0:
[nums[i], nums[j]] = [nums[j], nums[i]] becomes [1, 0, 0, 3, 12].
j becomes 1, pointing to the next position for a non-zero element.
nums = [1, 0, 0, 3, 12]
Iteration 3:

i = 2, nums[i] = 0. It's zero, so we don't swap and move to the next element.
j remains 1.
nums = [1, 0, 0, 3, 12]
Iteration 4:

i = 3, nums[i] = 3. It's non-zero, so we swap with the element at j = 1:
[nums[i], nums[j]] = [nums[j], nums[i]] becomes [1, 3, 0, 0, 12].
j becomes 2, pointing to the next position for a non-zero element.
nums = [1, 3, 0, 0, 12]
Iteration 5:

i = 4, nums[i] = 12. It's non-zero, so we swap with the element at j = 2:
[nums[i], nums[j]] = [nums[j], nums[i]] becomes [1, 3, 12, 0, 0].
j becomes 3, pointing to the next position for a non-zero element (but there are no more).
nums = [1, 3, 12, 0, 0]
End of Loop:

The loop finishes iterating through all elements.
The final array nums = [1, 3, 12, 0, 0] has all zeros moved to the end while preserving the order of non-zero elements.
 */