<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio 010</title>
</head>
<body>
    <?php
        //Capturando os dados do formulario retro alimentado 
        $anoNascimento = $_GET['anoNascimento'] ?? '2000';
        $anoIdade =  $_GET['anoIdade'] ?? date("Y");
        $resultado = $anoIdade - $anoNascimento;

    ?>

    <main>
        <h1>Calculando a sua idade</h1>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="get">
            <label for="anoNascimento">Em que ano você nasceu?</label>
            <input type="number" name="anoNascimento" id="anoNascimento" max="<?=date("Y")-1?>" min="1900" value="<?=$anoNascimento?>">
            <label for="anoIdade">Quer saber sua idade em que ano? (atualmente estamos em <?=date("Y")?>)</label>
            <input type="number" name="anoIdade" id="anoIdade" min="1900" value="<?=$anoIdade?>">
            <input type="submit" value="Qual será minha idade?">
        </form>
    </main>

    <section id="resultado">
        <h2>Resultado</h2>
        <?php    
            echo "<p> Quem nasceu em $anoNascimento vai ter <strong>$resultado anos</strong> em $anoIdade!</p>";
        ?>
    </section>
    
</body>
</html>