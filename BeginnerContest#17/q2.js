function Main(input) {
	var x = input.split("\n")[0];
	if(x.match(/^(ch|o|k|u)*$/)){
		console.log("YES");
	}else{
		console.log("NO");
	}


}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));