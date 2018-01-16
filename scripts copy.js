slowMath.add(6, 2).then( function(sum){// 1. Add together 6 and 2.
    console.log(sum);
    return slowMath.multiply(sum, 2);// 2. Wait on the result, log it, and then multiply the result by 2.
}).then (function(product){
    console.log(product);
    return slowMath.divide(product,4);// 3. Wait on the result, log it, and then divide the result by 4.
}).then (function(quotent){
    console.log(quotent);
    return slowMath.subtract(quotent,3);// 4. Wait on the result, log it, and then subtract 3 from the result.
}).then(function(difference){
    console.log(difference);
    return slowMath.add(difference, 98);// 5. Wait on the result, log it, and then add 98 to the result.
}).then(function(sum){
    console.log(sum);
    return slowMath.remainder(sum,2);// 6. Wait on the result, log it, and then find the remainder from dividing the result by 2.
}).then(function(remainder){
    console.log(remainder);
    return slowMath.multiply(remainder,50);// 7. Wait on the result, log it, and then multiply the result by 50.
}).then(function(product){
    console.log(product);
    return slowMath.remainder(product,40);// 8. Wait on the result, log it, and then find the remainder from dividing the result by 40.
}).then(function (remainder){
    console.log(remainder);
    return slowMath.add(remainder,32);// 9. Wait on the result, log it, and then add 32 to the result.
}).then(function (sum){
    console.log (`The final result is ${sum}`);// 10. Wait on the result, and then log: The final result is ___, where you fill in the blank with the final result.
}).catch(function (err){
    console.log (err);// 11. Add a`.catch` function to handle any errors that occur.Log the error to the console.
})


