function firstNonRepeatedChar(str) {
	let s2 = str.split('').sort().join('');
	for(let i=0;i<s2.length-1;i+=2){
		if(s2[i]!==s2[i+1]){
			return s2[i];
			
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
 
