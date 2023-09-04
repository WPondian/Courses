<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos primitivos em PHP</title>
</head>
<body>
    <h1>Teste de tipos primitivos</h1>

    <?php
    //0x = hexadecial 0b = binario 0 = Octal

    //$num = 0x1A;
    //echo "O valor da varivel é $num";

    //$num = 3e2; 3 x 10(2);
    //echo "O valor da variavel é $num";

    // $num = (int)"950";


    //$num = (integer) 3e2; 3 x 10(2) coercao;
    //echo "O valor da variavel é $num";
    
    // $vet = [6,2,3,4,5,6]; array;



    class Pessoa{
        private string $nome;
    }

    $p = new Pessoa;
    
    var_dump($vet);
    ?>
</body>
</html>