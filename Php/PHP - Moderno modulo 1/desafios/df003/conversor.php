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
        <h1>Conversor de Moedas v1.0</h1>
    </header>
    <main>
        <?php
            $valor = $_GET["valor"] ?? 0;
            $valorCotacaoAtual = 4.88;
            $valorConvertido = $valor / 4.88;
          

            // echo "Seus R$ ". number_format($valor,2,",",".") . "equivalem a US$ <strong>". number_format($valorConvertido,2,",",".") . "</strong><br/><br/>";
            // echo "<strong>*Cotação fixa de R$ ". number_format($valorCotacaoAtual,2,",",".") ."</strong> informada diretamente no código<br/>";

            //Formatação de moedas com internacionalização!
            $padrao = numfmt_create("pt_BR", NumberFormatter::CURRENCY);
            
            echo "Seus ". numfmt_format_currency($padrao, $valor,"BRL") . " equivalem a <strong>". numfmt_format_currency($padrao, $valorConvertido,"USD") . "</strong><br/><br/>";
            echo "<strong>*Cotação fixa de". numfmt_format_currency($padrao, $valorCotacaoAtual,"BRL") ."</strong> informada diretamente no código<br/>";

        ?>
        <p><button onclick="javascript:window.location.href='index.html'"> &#x2B05 Voltar</button></p>
    </main>
    
</body>
</html>