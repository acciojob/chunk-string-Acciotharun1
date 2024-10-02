function stringChop(str, size) {
  // your code here
	chunkedarr=[];
    let l=str.length;
    if(str==""){
        return chunkedarr;
    }
        for(let i=0;i<l;i+=size){
            chunkedarr.push(str.slice(i,i+size));
        }
    
    return chunkedarr.join(", ");
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
