<?php
    fscanf(STDIN, "%d %d %d",$n,$a,$b);

    $result = 0;
    for ($i=0; $i<$n; $i++){
    	fscanf(STDIN, "%s %d",$dir_s, $dir_num);
    	$r_num = Direction($dir_s,$dir_num);
    	$result += $r_num;
    }

    if($result > 0){
    	$result = 'West '.$result;
    }elseif($result < 0){
    	$result *= -1;
    	$result = 'East '.$result;
    }
    echo $result."\n";

    function Direction($di,$di_num) {
    	global $a,$b;
    	$r = 0;
    	if($di_num>=$b){$r = $b;}
    	elseif($di_num<=$a){$r  = $a;}
    	else {$r = $di_num;}

    	if($di == 'East') $r *= -1;

    	return $r;
    }