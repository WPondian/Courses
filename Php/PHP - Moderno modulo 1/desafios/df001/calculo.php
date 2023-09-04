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
        <h1>Resultado Final</h1>
    </header>
    <main>
        <?php
            $numero = $_GET["numero"] ?? "0";
            $antecessor = $numero - 1;
            $sucessor = $numero + 1;

            echo "O número escolhido foi <strong>$numero</strong><br/>";
            echo "<br/>O seu <em>antecessor</em> é $antecessor<br/>";
            echo "<br/>O seu <em>sucessor</em> é $sucessor<br/>";
        ?>
        <p><button onclick="javascript:window.location.href='index.html'"> &#x2B05 Voltar</button></p>
    </main>
    
</body>
</html>