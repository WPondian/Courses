<?php


for ($i = 1; $i <= 100; $i++) {
    if ($i % 2 !== 0) {
        echo "$i" . PHP_EOL;
    }
}

$multiplicador = 5;

for ($i = 1; $i <= 10; $i++) {
    echo "$multiplicador x $i = " . $multiplicador * $i . PHP_EOL;
}

$altura = 1.80;
$peso = 95;

$imc = $peso / $altura ** 2;

echo "O seu IMC é $imc .Você esta com o IMC";

if ($imc < 18.5) {
    echo "abaixo do recomendado!";
} else if ($imc < 25 && $imc > 18.5) {
    echo "no recomendado!";
} else {
    echo "acima do recomendado!";
}
