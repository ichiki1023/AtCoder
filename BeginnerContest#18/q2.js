function Main(input) {
	var data = input.split("\n");
	var str = new Array();
	var n = Number(data[1]);
	var ch = new Array();

	str = data[0].split("");

	for(var i = 2; i< n + 2; i++){
		ch = data[i].split(" ");
		start = Number(ch[0]-1);
		end = Number(ch[1]);
		rvStr = str.slice(start,end).reverse();
		for(var j=start,k=0; j<end;j++,k++){
			str[j] = rvStr[k];
		}
	}

	console.log(str.join(""));

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));