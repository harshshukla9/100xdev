/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let date= new Date();
    date=date.getTime()
    console.log(date);
    let ans=0;
    for(let i=0;i<=n;i++)
    {
        ans+=i;
    }
    console.log(ans);
    let date2= new Date();
    date2=date2.getTime()
    console.log(date2)
    console.log(date2-date + "in sec");
}

calculateTime(1000000000)

