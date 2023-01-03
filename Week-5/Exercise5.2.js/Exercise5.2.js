function isVowel(char)
{
    let vowel = ['a' , 'e' , 'i' , 'o' , 'u'];
    return vowel.includes(char);
}
function vowelCount(str)
{
    const vowelMap = new Map();
    for(let char of str)
    {
        let lowerCaseChar =  char.toLowerCase() ;
        if(isVowel(lowerCaseChar) && vowelMap.has(lowerCaseChar))
        {
             vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
        }
        else
        {
                vowelMap.set(lowerCaseChar,1);
        }
     }
        return vowelMap;
}
console.log(vowelCount('salman')); //Map(5) { 's' => 1, 'a' => 2, 'l' => 1, 'm' => 1, 'n' => 1 }