<?php
    fscanf(STDIN, "%d",$n);
    fscanf(STDIN, "%s",$s);

    $r = "b";
    if($n % 2 !== 0){
        $n--;
        $n /= 2;
        for($i = 1; $i <= $n; $i++){
            if($i%3 == 1){
                $r = "a".$r."c";
            }elseif($i%3 == 2){
                $r = "c".$r."a";
            }else{
                $r = "b".$r."b";
            }
        }
        if($r === $s){
            echo $n."\n";
        }else{
            echo (-1)."\n";
        }
    }else{
        echo (-1)."\n";
    }

