<?php
    fscanf(STDIN, "%d %d",$n,$t);

    for ($i=0; $i < $n; $i++){
        fscanf(STDIN, "%d",$a[$i]);
    }

    $r = 0;
    for ($i=0; $i < $n-1; $i++){
        if($a[$i+1]-$a[$i] <= $t){
            $r += $a[$i+1]-$a[$i];
        }else{
            $r += $t;
        }
    }
    $r += $t;

    echo $r."\n";