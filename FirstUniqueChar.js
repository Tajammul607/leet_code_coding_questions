const firstUniqueChar =(str)=>{
   let createEmptyObj ={}

   for(let char of str){
    createEmptyObj[char] =(createEmptyObj[char] || 0) +1;
   }

   for(let i=0; i<str.length; i++){
    if(createEmptyObj[str[i]]===1){ // str[i] is used to see the occurance of the characters
        return i
    }
   }

   return -1
}

console.log(firstUniqueChar("tajammul"))