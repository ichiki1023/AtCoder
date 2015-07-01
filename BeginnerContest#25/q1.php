<?php
    fscanf(STDIN, "%s",$s);
	fscanf(STDIN, "%d",$n);

	$array = array();
	for($i=0; $i<5; $i++){
		for ($j=0; $j<5; $j++){
			$array[] = $s[$i].$s[$j];
		}
	}

	echo $array[$n-1]."\n";