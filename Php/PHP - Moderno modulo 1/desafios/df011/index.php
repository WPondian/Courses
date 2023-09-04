<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio 011</title>
</head>
<body>
    <?php
        //Capturando os dados do formulario retro alimentado 
        $precoProduto = $_REQUEST['precoProduto'] ?? 0;
        $percentReajuste =  $_REQUEST['percentReajuste'] ?? 0;
        // $novoValorProduto = $precoProduto + ($precoProduto * ($percentReajuste / 100));
        $novoValorProduto = $precoProduto + ($precoProduto * $percentReajuste) / 100;
        $padrao = numfmt_create("pt_BR", NumberFormatter::CURRENCY);
    ?>

    <main>
        <h1>Reajustador de Preços</h1>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="get">
            <label for="precoProduto">Preço do Produto R$</label>
            <input type="number" name="precoProduto" id="precoProduto" min="0.10" step="0.01" value="<?=$precoProduto?>">
            <label for="percentReajuste">Qual será o percentual de reajuste? (<strong><span id="percent">?</span>%</strong>)</label>
            <input type="range" min="0" max="100" step="1" oninput="mudaValor()" name="percentReajuste" id="percentReajuste">
            <input type="submit" value="Reajustar">
        </form>
    </main>
 
    <section id="resultado">
        <h2>Resultado do Reajuste</h2>
        <?php    
            echo "<p>O produto que custava ".numfmt_format_currency($padrao, $precoProduto, "BRL")." com <strong>$percentReajuste% de aumento</strong> vai passar a custar <strong>".numfmt_format_currency($padrao, $novoValorProduto, "BRL")."</strong> a partir de agora.</p>";
        ?>
    </section>
    
    <script>
        mudaValor();
        
        function mudaValor(){
            percent.innerText = percentReajuste.value;
        }
    </script>
</body>
</html>