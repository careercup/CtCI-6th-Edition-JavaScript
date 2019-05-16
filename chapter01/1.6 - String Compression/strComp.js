function compress(str) {
   var arr = [], j = 0;
   for(var i = 0; i < str.length; i = j) {
     var ch = str[i], count = 1;
     while(str[++j] == ch) {
       count++;
     }
     arr.push(ch + count);
   }
   var rtn = arr.join('');
   return rtn.length < str.length ? rtn : str; 
}


// Test
console.log('aaaaaa', compress('aaaaaa'), 'a6');
console.log('aabcccccaaa', compress('aabcccccaaa'), 'a2b1c5a3');
