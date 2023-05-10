let arr=[10,11,12]
  var sum=0
for(let i=0;i<=arr.length-1;i++){
  let count=1
 
  for(let j=i;j<=arr.length-1;j++){
    
    
        for(var k=i;k<=j;k++){
          
            
            
            if(count%2!=0){
                
            sum=sum+arr[k]  
             
            }
           
        }
    count++
  }
}

console.log(sum)
