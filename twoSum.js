// in this approach we're checking each pair of the ele 
//the time complextiy is gona be O(n^2)

const twoSumBruteForce= (num,target)=>{
    for(let i=0; i<num.length; i++){
        for(let j=i+1; j<num.length-1; j++){
            if(num[i]+num[j]==target){
                return [i,j]
            }
        }
    }
    return -1
}

let arr=[2,1,2,3,4,5]
let target=5;

console.log(twoSumBruteForce(arr,target))

const twoSumUsingHash=(nums,target)=>{
   
    let usingMap=new Map();

    for(let i=0; i<nums.length; i++){
        let diff=target-nums[i]

        if(usingMap.has(diff)){
            return [usingMap.get(diff),i] // if exist get the element along with index
        }

        usingMap.set(nums[i],i) // set the element and set the index in the hash
    }

    return[]
}

console.log(twoSumUsingHash(arr,target))


function reverseAStringByWord(str){
    let reverseWord= str.split(" ").map(word=>{
        return word.split('').reverse().join('')
    })

   return reverseWord
}

console.log(reverseAStringByWord("This is gonna be amazing"))

const fizzBuzzSequence = (start, end) => {
    for (let num = start; num <= end; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
      } else if (num % 3 === 0) {
        console.log("Fizz");
      } else if (num % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(num);
      }
    }
  };
console.log(fizzBuzzSequence(1,10))


function median(num){
  let total=num.sort((a,b)=>a-b)

  let index= Math.floor(total.length/2)

  return num[index]
}

console.log(median([2, 5, 7, 9, 11, 13, 15]))


const twoSum=(nums,target) =>{
  let useMap=new Map();

  for(let i=0; i<nums.length; i++){
    let diff=target-nums[i];

    if(useMap.has(diff)){
      return [useMap.get(diff),i]
    }

    useMap.set(nums[i],i)
  }
}

console.log(twoSum([1,2,3,4],5))