const groupAnagrams = (strArr) => {
  if (strArr === undefined) {
   return 'where is your anagram?';
  } else {
    let mapStrArr = strArr.map((string) => {
      return {
        original: string,
        sorted: string.split('').sort().join('')
      };
    });

    mapStrArr.sort((a, b) => {
      return a.sorted < b.sorted ? 1 : -1;
    });

    const answer = mapStrArr.map((mapStr) => {
      return mapStr.original;
    });

    return answer;
  }
};

/* TEST */

const anagrams = [
  'motherinlaw', 
  'debit card', 
  'dormitory', 
  'theearthquakes', 
  'astronomer', 
  'punishments', 
  'schoolmaster', 
  'hitlerwoman',
  'badcredit',
  'dirtyroom',
  'thequeershakes',
  'moonstarrer',
  'ninethumps',
  'theclassroom'
];

const anagramsSorted = ["ninethumps", "punishments", "dormitory", "dirtyroom", "astronomer", "moonstarrer", "motherinlaw", "hitlerwoman", "thequeershakes", "schoolmaster", "theclassroom", "badcredit", "theearthquakes", "debit card"];

// groupAnagrams can be called
console.log(groupAnagrams() === 'where is your anagram?');

// groupAnagrams can be sorted
console.log(JSON.stringify(groupAnagrams(anagrams)) === JSON.stringify(anagramsSorted));
