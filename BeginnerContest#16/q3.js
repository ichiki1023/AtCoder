function Main(input){
	var data = new Array();
	data = input.split("\n")[0].split(" ");
	var userNum = 0,groupNum = 0;
	userNum = Number(data[0]);
	groupNum = Number(data[1]);

	var use = new Object();

	var array = new Array();
	for(var i=1; i<=groupNum; i++){
		array = input.split("\n")[i].split(" ");
		if(use[array[0]] == undefined)use[array[0]] = new Array();
		if(use[array[1]] == undefined)use[array[1]] = new Array();

		use[array[0]].push(Number(array[1]));
		use[array[1]].push(Number(array[0]));
	}

	var count = 0;
	var exceptArray = new Array();
	for(var i=1; i<=userNum; i++){
		count = 0;
		exceptArray.length = 0;
		exceptArray = use[String(i)].slice(0);
		exceptArray.push(i);
		for (var j in use[String(i)]){
			var now = String(use[String(i)][j]);
			for(var k in use[now]){
				if(exceptArray.indexOf(Number(use[now][k])) == -1){
					count++;
					exceptArray.push(Number(use[now][k]));
				}
			}
		}
		console.log(count);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));