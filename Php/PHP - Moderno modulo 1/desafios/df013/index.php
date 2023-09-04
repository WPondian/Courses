<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio 013</title>

    <style>
        img.nota{
            height: 50px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <?php
        //Capturando os dados do formulario retro alimentado 
        $valorSaque = $_GET['valorSaque'] ?? 0; 
        $resto = $valorSaque;
        

        $cemReais = floor($resto / 100);
        $resto %= 100;

        $cinquentaReias = floor($resto / 50);
        $resto %= 50;
        
        $dezReais = floor($resto / 10);
        $resto %= 10;

        $cincoReais = floor($resto / 5);
        $resto %= 5;

        $padrao = numfmt_create("pt_BR", NumberFormatter::CURRENCY);

    ?>

    <main>
        <h1>Caixa Eletrônico</h1>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="get">
            <label for="valorSaque">Qual valor você deseja sacar? (R$)</label>
            <input type="number" name="valorSaque" id="valorSaque" step="5" min="0" required value="<?=$valorSaque?>">
            <p>*Notas disponiveis: R$100, R$50, R$10 e R$5</p>
            <input type="submit" value="Sacar">
        </form>
       
    </main>
 
    <section id="resultado">
        <h2>Saque de <?=numfmt_format_currency($padrao, $valorSaque, "BRL")?> realizado</h2>
        <p>O caixa eletrônico vai te entregar as seguintes notas:</p>
        <ul>

            <li>
                <img src="./img/100-reais.jpg" alt="100 reais" class="nota">
                x<?=$cemReais?>
            </li>
            <li>
                <img src="./img/50-reais.jpg" alt="50 reais" class="nota">
                x<?=$cinquentaReias?>
            </li>
            <li>
                <img src="./img/10-reais.jpg" alt="10 reais" class="nota">
                x<?=$dezReais?>
            </li>
            <li>
                <img src="./img/5-reais.jpg" alt="5 reais" class="nota">
                x<?=$cincoReais?>
            </li>
        </ul>
    </section>
</body>
</html>