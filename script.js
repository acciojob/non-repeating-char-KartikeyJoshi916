function firstNonRepeatedChar(str) {
	for (let i = 0; i < n; i++) {
                let j;
                // Checking if ith element is present in array
                for (j = 0; j < n; j++)
                    if (i != j && arr[i] == arr[j])
                        break;
                // if ith element is not present in array 
                // except at ith index then return element        
                if (j == n)
                    return arr[i];
            }
            return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
 
