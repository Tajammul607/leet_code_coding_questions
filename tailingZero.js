const trailingZeroFactorial =(n)=>{
    let trailingZero=0;
    let powerOfFive=5;
    while(powerOfFive <=n){
       trailingZero +=Math.floor(n/powerOfFive)

       powerOfFive *=5
    }
    return trailingZero
}

console.log(trailingZeroFactorial(25))