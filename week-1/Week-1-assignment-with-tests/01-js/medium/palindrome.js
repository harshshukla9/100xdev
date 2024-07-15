/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s=0;
 
  let temp='';
  for(let i=0;i<str.length;i++)
  {
    if(str.charAt(i)>='a' && str.charAt(i)<='z')
    {
      temp+=str.charAt(i);
    }
    else{
      if(str.charAt(i)>='A' && str.charAt(i)<='Z')
        {
          temp+=str.charAt(i).toLowerCase();
        }

    }
  }
  console.log(temp);
  let j=temp.length-1;

  while(s<j)
  {
    if(temp.charAt(s)!==temp.charAt(j))
    {
      return false;
    }
    s++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
