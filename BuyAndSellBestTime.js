// Input: prices = [7,1,5,3,6,4]
// Output: 5
// we'll buying the stock at lower price and sell them at higher price 


function maxProfit(prices) {
   let min=prices[0]; // consider first val as min
   let profite=0;

   for(let i=0; i<prices.length; i++){
       if(prices[i]<min){  //
           min=prices[i];
       }

       profite=Math.max(profite,prices[i]-min)
   }
   return profite;
};




