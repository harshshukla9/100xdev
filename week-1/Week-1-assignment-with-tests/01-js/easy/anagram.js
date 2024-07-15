/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  //object

  let mp={};

  for(let i=0;i<str1.length;i++)
  {
    let char= str1.charAt(i);

    if(char>='a' && char<='z')
    {
      char=char.toUpperCase();
    }

              if(mp[char])
              {
                mp[char]++;
              }
              else{
                mp[char]=1;
              } 
              
      
  }

  for(let i=0;i<str2.length;i++)
  {
    let char= str2.charAt(i);
    if(char>='a' && char<='z')
      {
        char=char.toUpperCase();
      }
    if(mp[char])
    {
      mp[char]--;
      if(mp[char]<0)
      {
        return false;
      }
    }
    else{
      return false;
    }
  }

  for(let char in mp)
  {
    if(mp[char]!==0)
    {
      return false;
    }
  }
  return true;



}

module.exports = isAnagram;
