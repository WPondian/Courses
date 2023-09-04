<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio 009</title>
</head>
<body>
    <?php
        //Capturando os dados do formulario retro alimentado 
       if($_GET){
           $primeroValor = $_GET['primeroValor'] ?? '';
           $primeroPeso =  $_GET['primeroPeso'] ?? '';
           $segundoValor = $_GET['segundoValor'] ?? '';
           $segundoPeso = $_GET['segundoPeso'] ?? '';
           
           
           $mediaAritmeticaSimples = ($primeroValor + $segundoValor) / 2;
           $mediaAritmeticaPonderada = (($primeroPeso * $primeroValor + $segundoPeso * $segundoValor) / ($primeroPeso + $segundoPeso));
        }

    ?>

    <main>
        <h1>Informe um número</h1>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="get">
            <label for="primeroValor">1 Valor:</label>
            <input type="number" name="primeroValor" id="primeroValor" value="<?=$primeroValor?>" required>
            <label for="primeroPeso">1 Peso:</label>
            <input type="number" name="primeroPeso" id="primeroPeso" min="1" value="<?=$primeroPeso?>" required>
            <label for="segundoValor">2 Valor:</label>
            <input type="number" name="segundoValor" id="segundoValor" value="<?=$segundoValor?>" required>
            <label for="segundoPeso">2 Peso:</label>
            <input type="number" name="segundoPeso" id="segundoPeso" min="1" value="<?=$segundoPeso?>" required>
            <input type="submit" value="Calular Médias">
        </form>
    </main>

    <section id="resultado">
        <h2>Cálculo das Médias</h2>
        <?php    
           if($_GET){
            echo "<p> Analisando os valores $primeroValor e $segundoValor:</p>";
            echo "<p>A <strong>Média Aritmética Simples</strong> entre os valores é igual a ". number_format($mediaAritmeticaSimples,2,",",".")."</p>";
            echo "<p>A <strong>Média Aritmética Ponderada</strong> com pesos $primeroPeso e $segundoPeso é igual a ". number_format($mediaAritmeticaPonderada,2,",",".")."</p>";
           }
        ?>
    </section>
    
</body>
</html>