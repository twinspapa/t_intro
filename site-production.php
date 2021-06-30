<?php
require_once 'vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('views', getcwd().'/.');
$twig = new \Twig\Environment($loader);

echo $twig->render('site-production.html', ['name' => 'Fabien']);
