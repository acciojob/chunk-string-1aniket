function stringChop(str, size) {
  // your code here
	let ans=[];
	if(!str){
	  
	  return [];
	}

	let cnt=str.length /size;
	let j=0;
	
	for(let i=0;i<Math.floor(cnt);i++)
	{
		ans.push(str.substr(j , size));
		j+=size;
	}
if(j<str.length)ans.push(str.substr(j ,str.length))
	console.log(ans);
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


