function stringChop(str, size) {
  // your code here
	chunkedarr=[];
    
    if(!str){
        return chunkedarr;
    }
	let l=str.length;
        for(let i=0;i<l;i+=size){
            chunkedarr.push(str.slice(i,i+size));
        }

	
    return chunkedarr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
