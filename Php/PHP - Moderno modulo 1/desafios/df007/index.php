<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio 007</title>
</head>
<body>
    <?php
        //Capturando os dados do formulario retro alimentado 
        $salario = $_GET['salario'] ?? 0;
        $salarioMinimoAtual = 1380.00;

        //     $quantidadeSalariosMinimos = $salario / $salarioMinimoAtual;
        //     $quantidadeSalariosMinimos = intval($quantidadeSalariosMinimos,10);
        //     $resto = $salario -  ($quantidadeSalariosMinimos * $salarioMinimoAtual);
        
            $quantidadeSalariosMinimos = intdiv($salario, $salarioMinimoAtual);
            $resto = $salario % $salarioMinimoAtual;
        
            $padrao = numfmt_create("pt_BR", NumberFormatter::CURRENCY);


    ?>

    <main>
        <h1>Informe seu salário</h1>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="get">
            <label for="salario">Salário (R$)</label>
            <input type="number" name="salario" id="salario" step="0.01 " value="<?=$salario?>">
            <p>Considerando o salário de <strong><?=numfmt_format_currency($padrao, $salarioMinimoAtual,"BRL")?></strong></p>
            <input type="submit" value="Analisar">
        </form>
    </main>

    <section id="resultado">
        <h2>Resultado Final</h2>
        <?php    
            echo "<p> Quem recebe um salário de ".numfmt_format_currency($padrao, $salario,"BRL")." ganha <strong>".$quantidadeSalariosMinimos." salários mínimos</strong> + ". numfmt_format_currency($padrao, $resto,"BRL") ."</p>";
        ?>
    </section>
    
</body>
</html>