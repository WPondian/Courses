<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio 008</title>
</head>
<body>
    <?php
        //Capturando os dados do formulario retro alimentado 
        $numero = $_GET['numero'] ?? 0;
        $raizQuadrada =  $numero ** (1/2);
        $raizCubica = $numero ** (1/3);
    ?>

    <main>
        <h1>Informe um número</h1>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="get">
            <label for="numero">Número:</label>
            <input type="number" name="numero" id="numero" value="<?=$numero?>">
            <input type="submit" value="Calular Raízes">
        </form>
    </main>

    <section id="resultado">
        <h2>Resultado Final</h2>
        <?php    
            echo "<p> Analisando o <strong>número $numero</strong>, temos:</p>";
            echo "<p>A sua raiz quadrada é <strong>". number_format($raizQuadrada,3,",",".")."</strong></p>";
            echo "<p>A sua raiz cúbica é <strong>".number_format($raizCubica,3,",",".")."</strong></p>";
        ?>
    </section>
    
</body>
</html>