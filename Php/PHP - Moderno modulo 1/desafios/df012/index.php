<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio 012</title>
</head>
<body>
    <?php
        //Capturando os dados do formulario retro alimentado 
        $segundos = $_GET['segundos'] ?? 0;
        $segundosInformado = $_GET['segundos'] ?? 0;
        
        $segundoPorHora =  60*60;
        $segundoPorDia =  $segundoPorHora*24;
        $segundoPorSemana =  $segundoPorDia*7;

        $segundos = $_GET['segundos'] ?? 0;

        $semanas = (int)($segundos / $segundoPorSemana);
        $segundos = $segundos % $segundoPorSemana;

        $dias = (int)($segundos / $segundoPorDia);
        $segundos = $segundos % $segundoPorDia;
        
        $horas = (int)($segundos / $segundoPorHora);
        $segundos = $segundos % $segundoPorHora;
        
        $minutos = (int)($segundos / 60);
        $segundos = $segundos % 60;

    ?>

    <main>
        <h1>Calculadora de Tempo</h1>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="get">
            <label for="segundos">Qual é o total de segundos?</label>
            <input type="number" name="segundos" id="segundos" min="0" step="1" value="<?=$segundosInformado?>" required>
            <input type="submit" value="Calcular">
        </form>
    </main>
 
    <section id="resultado">
        <h2>Totalizando tudo</h2>
        <?php   
        echo "<ul>";
            echo "<li>$semanas semanas</li>";
            echo "<li>$dias dias</li>";
            echo "<li>$horas horas</li>";
            echo "<li>$minutos minutos</li>";
            echo "<li>$segundos segundos</li>";
        echo "</ul>"; 
        ?>
    </section>
</body>
</html>