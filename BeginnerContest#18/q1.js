function Main(input){
	var data = input.split("\n");
	var max = 0,min = 0;
	min = Math.min.apply(null,[data[0],data[1],data[2]]);
	max = Math.max.apply(null,[data[0],data[1],data[2]]);
	for (var i = 0; i < 3; i++){
		if(data[i] == max){
			console.log(1);
		}else if(data[i] == min){
			console.log(3);
		}else{
			console.log(2);
		}
	};

}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));