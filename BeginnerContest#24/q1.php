<?php
    fscanf(STDIN, "%d %d %d %d",$a,$b,$c,$k);
	fscanf(STDIN, "%d %d",$s, $t);

	$r = ($a*$s)+($b*$t);

	if($k<=($s + $t)){
		$r-=($s + $t)*$c;
	}

	echo $r."\n";