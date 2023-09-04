<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Resultado</title>
</head>
<body>
    <header>
        <h1>Analisador de Número Real</h1>
    </header>
    <main>
        <?php
            $numeroReal = $_POST["numeroReal"] ?? 0;
            $valorInteiro = (int)$numeroReal;
            $valorFracionado = ($numeroReal - $valorInteiro);
          

            echo "Analisando o número <strong>". number_format($numeroReal,3, ",",".")."</strong> informado pelo usuário:<br/><br/>";
            echo "\t\tA parte inteira do número é <strong>". number_format($valorInteiro,0, ",",".")."</strong><br/><br/>";
            echo "\t\tA parte fracionária do número é <strong>". number_format($valorFracionado, 3, ",",".")."</strong><br/><br/>";

        ?>
        <p><a href="javascript:history.go(-1)"><button>&#x2B05 Voltar</button></a></p>
    </main>
    
</body>
</html>