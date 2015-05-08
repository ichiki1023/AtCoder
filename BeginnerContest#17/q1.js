function Main(input){
	var data = new Array();
	var sum = 0;

	for(var i=0; i<3; i++){
		var data = input.split("\n")[i].split(" ");
		sum += Number(data[0]) * (Number(data[1])/10);
	}

	console.log(sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));