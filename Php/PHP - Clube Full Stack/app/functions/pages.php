<?php

function load()
{
    $page = filter_input(INPUT_GET, 'page');

    $pages = [
        'home' => 'pages/home.php',
        'contato' => 'pages/contato.php',
    ];

    if (!$page) {
        return $pages['home'];
    }

    if (!array_key_exists($page, $pages)) {
        throw new Exception("Pagina não encontrada.");
    }

    return $pages[$page];
}
