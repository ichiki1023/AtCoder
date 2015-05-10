function Main(input){
	var data = new Array();
	data = input.split(" ");
	var n = 0;
	var A = parseInt(data[0]);
	var B = parseInt(data[1]);
	var C = parseInt(data[2]);
	if(A + B == C)n+= 1;
	if(A - B == C)n+= 2;

	var r = "";
	switch(n){
		case 0:
			r = "!";
			break;
		case 1:
			r = "+";
			break;
		case 2:
			r = "-";
			break;
		case 3:
			r = "?";
			break;
	}
	console.log(r);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));