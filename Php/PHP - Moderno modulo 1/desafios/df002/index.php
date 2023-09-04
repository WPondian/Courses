<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Trabalhando com números aleatórios</title>
</head>
<body>
    <header>
        <h1>Trabalhando com números aleatórios</h1>
    </header>
    <main>
        <?php
            $numeroAleatorio = mt_rand(0, 100);

            echo "Gerando um número aleatório entre 0  e 100...<br/>";
            echo "O valor gerado foi $numeroAleatorio<br/><br/>";

        ?>
       <button onclick="javascript:document.location.reload()">&#x1F504; Gerar outro</button>

    </main>
    
</body>
</html>