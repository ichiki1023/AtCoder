function Main(input){
	var data = new Array();
	data = input.split(" ");
	var result = data[0] % data[1] === 0 ? "YES" : "NO";
	console.log(result);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));