function oneAway(str1,str2){
    str1 = str1.split("");
    str2 = str2.split("");
    let changes = 0;
    for(let i = 0; i< str1.length; i++){
        const charIndex =  str2.indexOf(str1[i]);
        if(charIndex == -1){
            changes +=1;
        }else{
             str2.splice(charIndex,1)
        }
    }
    return changes <= 1;
}
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
