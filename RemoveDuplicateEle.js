// this problems can be solved using two pointer approach

const removeDuplicate =(num)=>{
    let count=0;
    let useSet=new Set();

    for(let i=0; i<num.length; i++){
        if(!useSet.has(num[i])){
            useSet.add(num[i]); //add to set and marked the it useSet
            num[count++] =num[i] // Place it at the current count index and increment
            
        }
    }

    return count;
}

console.log(removeDuplicate([1,2,3,2]))


// const countVowels=(str)=>{
//     const matches=str.match(/[aeiou]/g)
//     return matches
// }

// console.log(countVowels("Tajammul"))