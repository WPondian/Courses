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
        <h1>Conversor de Moedas v2.0</h1>
    </header>
    <main>
        <?php

            // $inicio = date("m-d-Y", strtotime("-7 days"));
            $inicio = date("m-d-Y");
            $fim = date("m-d-Y");

            $url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial=\''. $inicio .'\'&@dataFinalCotacao=\''. $fim .'\'&$top=100&$format=json';

            $dados = json_decode(file_get_contents($url), true); 
            // file_get_contentes: pega os arquivos dessa url; 
            // json_decode vai descodificar o arquivo JSON;
            // é passado true para que ele fique dentro de um array e nao de um objeto;

            

            // $curl = curl_init();

            // curl_setopt_array($curl, array(
            // CURLOPT_URL => 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?%40dataInicial=%2708-30-2023%27&%40dataFinalCotacao=%2708-30-2023%27&%24top=100&%24format=json',
            // CURLOPT_RETURNTRANSFER => true,
            // CURLOPT_ENCODING => '',
            // CURLOPT_MAXREDIRS => 10,
            // CURLOPT_TIMEOUT => 0,
            // CURLOPT_FOLLOWLOCATION => true,
            // CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            // CURLOPT_CUSTOMREQUEST => 'GET',
            // CURLOPT_HTTPHEADER => array(
            //     'Cookie: TS01d9825e=012e4f88b384c2fef940f6e29c3391c1bfff8b4d3642f658f388ce0f1e93cdfb880e65f10616414224d08220a3e898ff5669bcecbb; dtCookie=68E97EDDEFAE624128E0125C1EB2AA93|cHRheHwx; BIGipServer~was_p_as3~was_p~pool_was_443_p=4275048876.47873.0000; JSESSIONID=0000FcQxrng2Ttvq7PAu7wQ2LMS:1cn7m3fq4; TS013694c2=012e4f88b384c2fef940f6e29c3391c1bfff8b4d3642f658f388ce0f1e93cdfb880e65f10616414224d08220a3e898ff5669bcecbb'
            // ),
            // ));

            // $response = curl_exec($curl);

            // curl_close($curl);
            // $dados = json_decode($response);

            
            $valor = $_GET["valor"] ?? 0;
            $valorCotacaoAtual = $dados["value"][0]["cotacaoCompra"];
            $valorConvertido = $valor / $valorCotacaoAtual;

            $padrao = numfmt_create("pt_BR", NumberFormatter::CURRENCY);
          

            echo "Seus " .numfmt_format_currency($padrao, $valor,"BRL"). " equivalem a <strong>" .numfmt_format_currency($padrao, $valorConvertido,"USD"). "</strong><br/><br/>";
            echo "*Cotação " .numfmt_format_currency($padrao, $valorCotacaoAtual,"BRL"). " obtida diretamente do site do <strong>Banco Central do Brasil</strong><br/>";

        ?>
        <p><a href="javascript:history.go(-1)"> <button><- Voltar</button></a></p>
    </main>
    
</body>
</html>