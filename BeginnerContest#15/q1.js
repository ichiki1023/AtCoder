function Main(input){
	var data = new Array();
	data = input.split("\n");
	if(data[0].length > data[1].length){
		console.log(data[0]);
	}else{
		console.log(data[1]);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));