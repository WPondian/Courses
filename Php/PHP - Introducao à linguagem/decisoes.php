<?php

$idade = 23;
$numeroDePessoa = 2;

if ($idade >= 18) {
    echo "você tem $idade anos. Você pode entrar sozinho.";
} else if ($idade >= 16 && $numeroDePessoa > 1) {
    echo "você tem $idade anos, está acompanhado(a), então pode entrar.";
} else {
    echo "você só tem $idade anos. Você não pode entrar";
}


echo PHP_EOL;
