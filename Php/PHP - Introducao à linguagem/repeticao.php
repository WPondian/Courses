<?php

$contador = 1;

while ($contador < 15) {
    echo "#$contador" . PHP_EOL;
    $contador = $contador + 1;
}


for ($contador = 1; $contador <= 15; $contador++) {

    if($contador !== 13){ // pula para o proximo loop
        continue;   
    }

    if($contador !== 13){ //sai do loop
        break;   
    }
    echo "#$contador" . PHP_EOL;
}
