<?php
/*
 # ABBREVIAZIONE DA TASTIERA DI QUESTO SOFTWARE CTRL+MAIUSC+A (commentare più righe)
 # ABBREVIAZIONE DA TASTIERA DI QUESTO SOFTWARE CTRL+MAIUSC+Z (selezionare e sostituire più testo conteporaneamente) 
    # VERIFICA CHE LA PROGRAMMAZIONE SIA SCRITTA CORRETTA.
    declare(strict_types=1);
    # MOSTRA O NASCONDE ERRORI A VIDEO.
    ini_set('display_errors', '1'); // MOSTRA.
    // ini_set('display_errors', '0'); // NASCONDE.
   
    error_reporting(E_ALL);
*/    
    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header ("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    // header('Content-Type: application/json; charset=UTF-8');
    try {
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $msg = "";
        // $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);
        if(empty($_POST['files'])) {
            exit("Nessun file selezionato.<br /><a href='javascript:history.back()'>Riprova</a>");
        }
        $POST = $_POST['files'];
        $path_folder = "docs/file/";
        // $files = ['auto-1.gif', 'auto-2.gif', 'auto-3.gif', 'auto-4.gif', 'auto-5.gif']; // test
        $msgSuccess = "";
        $msgDanger = "";
        $numFilesSuccess = 0;
        $numFilesDanger = 0;
    /*  
        print_r("<pre>");
        print_r($files);
        print_r("</pre>");
        foreach($files as $key => $file) :
            echo $file . "<br />";
        endforeach;
    */
    /*
    // se vuoi provare il post solo dati
        exit('[
            {
                "messaggio" : "Sei nel POST",
                "dati" : "'.$POST['create_zip'].'",
                "users" : {
                        "usr" : "ivanpier",
                        "psw" : "123",
                        "age" : 44
                    }
            } 
           ]');
        // se vuoi provare il post solo dati
    */
        if(extension_loaded('zip')) {
            $zip = new ZipArchive(); // Load Zip library
            $zip_name = time().".zip"; // Zip name
            if($zip->open($zip_name, ZIPARCHIVE::CREATE) !== TRUE) {
                $msg = ("Spiacente, creazione del file zip, non riuscita");
                echo '{"Messaggio" : "'.$msg.'"}';
                exit();
            }
                //foreach($files as $key => $file) {
                    foreach($POST as $key => $file) {
                    $filename = basename($file);
                    if(file_exists($path_folder.$file)) {
                        // $zip->addFile($path_folder.$file); // recupera tutta la cartella
                        $zip->addFile($path_folder.$file, $filename); // recupera soltanto il nome file
                        $numFilesSuccess += 1;
                        $msgSuccess = "numero file trovati: {$numFilesSuccess} "; 
                    }  else {
                        $numFilesDanger += 1;
                        $msgDanger .= "numero file non trovati: {$numFilesDanger} nome file {$file} ";
                        // exit('{"Messaggio: " : "'.$msg.'"}');
                    } 
                }
                if($numFilesDanger == 0) {
                    $msgSuccess = "processo completato con successo. files: {$numFilesSuccess} "; 
                    $zip->close();
                }
            if(file_exists($zip_name)){
                $msgSuccess = ("creazione file riuscita con successo.");
                // Push to download the Zip
                header('Content-type: application/zip');
                header('Content-Disposition: attachment; filename="'.$zip_name.'"');
                readfile($zip_name);
                // Remove zip file is exists in temp path
                unlink($zip_name);
            }
            $msg =  "file trovati: " . $msgSuccess . "<br />file non trovati :" . $msgDanger;
        } // ./extensione_loaded
        
    } // ./POST
    // throw new PDOException("THROW ERROR");
} catch(PDOException $error) {
    echo '{"Errore" : "'.$error->getMessage().'"}';
}
?>
<!DOCTYPE html>
<!-- <html lang="en"> -->
<html lang="it">

<head>
    <!--<meta http-equiv="Content-Security-Policy" content="default-src 'none' ; script-src resource:; "> -->
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="IT">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Dati utente">
    <meta name="author" content="https://ivanpierdeveloper.it">
    <meta name="keywords" content="app, create-file-csv">
    <link rel="shortcut icon" href="../../img/favicon-radius-8px-50.png" type="image/x-icon" sizes="16x16">
    <!--
      <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192"  href="img/favicon/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="img/favicon/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
      <link rel="manifest" href="img/favicon/manifest.json">
      <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
      <meta name="theme-color" content="#ffffff">
-->
    <link href="../css/root.css" rel="stylesheet" type="text/css">
    <link href="../css/my-alert.css" rel="stylesheet" type="text/css">
    <link href="../css/style.css" rel="stylesheet" type="text/css">
    <link href="../css/media-query.css" rel="stylesheet" type="text/css">
    <title>Home | Create-file</title>
    <style type="text/css">
        body {
            color: white;
        }
        table {
            table-layout: fixed;
            width: 100%;
            word-wrap: break-word;
            height: auto;
            color: var(--yellow);
        }
        
        table caption {
            color: var(--white);
            text-align: center;
        }
        
        table th {
            border: 1px solid var(--danger);
        }
        
        table td {
            border: 1px solid var(--orange);
            text-align: center;
            font-size: 8pt;
        }
        ul {
            list-style: none;
        }
        .btn-submit, .btn-select-all {
            transition: 2s;
        }
        .btn-submit:hover, .btn-select-all:hover {
            transition: 2s;
            background-color: var(--white);
            color: var(--dark);
        }
        .button-list {
            width: 100%;
        }
        .container-list {
            width: 100%;
        }
        .container-list li {
            float: left;
            position: relative; left: 25%;
        }
        @media (){

        }
    </style>
    <!--
    function patname() {
        let host        = window.location.host;
        let protocol    = window.location.protocol;
        let pathname    = window.location.pathname;
        alert(`HOST: ${host}\nPROTOCOLLO: ${protocol}\nPATHNAME: ${pathname}`);
    }
    // patname();
-->
    <script lang="javascript">
        /*
        function pathName(valore) {
            switch(valore) {
                case 1: return window.location.host;
                break;
                case 2: return window.location.protocol;
                break;
                case 3: return window.location.pathname;
            default: null;
            break;
            } 
        }
        var path_name = pathName(3);
        var split_data = path_name.split("/"); 
        console.table(split_data);
        */
       function selectAll() {
           'use strict'
           try {

           } catch (Exception) {
            console.error(`Messaggio di errore della funzione: selectAll() ${Exception.message}`);
           }
       }
    </script>
</head>

<body>
    <div class="full-screen"></div>
    <!-- ./full-screen -->
    <div class="my-alert"></div>
    <!-- ./my-alert -->
    <div class="loader"></div>
    <!-- loader-->
    <div class="loader-text"></div>
    <!-- loader-text -->
    <div class="container">

        <div class="list-image">
            <img src="../../img/close.png" class="root-el-align-right root-cursor-pointer"
            width="30" height="30" alt="Not image" onclick="javascript:window.close();" />
            <div class="root-clear-dom"></div>
        </div><!-- ./list-image -->
        <h1 class="root-text-color-indianred root-text-align-center">create file csv, pdf e excel</h1>
        <hr />
        <div class="content">

            <div class="button-list">
                <button class="root-el-align-right btn btn-select-all">seleziona tutti</button>
                <div class="root-clear-dom"></div>
            </div><!-- /.button-list -->
            <form method="POST" action="<?php htmlspecialchars($_SERVER['PHP_SELF']); ?>" name="frm_file_zip" id="frm_file_zip">
            <div class="container-list">
                <ul>
                    <li><input type="checkbox" name="files[]" id="files[]" value="auto-1.gif" class="chk">auto 1</li>
                    <li><input type="checkbox" name="files[]" id="files[]" value="auto-2.gif" class="chk">auto 2</li>
                    <li><input type="checkbox" name="files[]" id="files[]" value="auto-3.gif" class="chk">auto 3</li>
                    <li><input type="checkbox" name="files[]" id="files[]" value="auto-4.gif" class="chk">auto 4</li>
                    <li><input type="checkbox" name="files[]" id="files[]" value="auto-5.gif" class="chk">auto 5</li>
                    <div class="root-clear-dom"></div>
                </ul>
                
            </div> <!-- ./container-list --> 

            <div class="container-button-submit">
                <button class="btn btn-submit" type="submit">zip image</button>
            </div><!-- /.container-button-submit -->
            </form>
        </div>
        <!-- ./content -->
    </div>
    <!-- ./container -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
    <!-- ./lib google ajax -->
    <script lang="javascript" src="../js/my-alert.js" defer></script>
    <script lang="javascript">
        'use strict'
        // catturo l'evento click button submit
        var frm_submit = document.querySelector('#frm_file_zip');
        frm_submit.addEventListener('submit', function(event) {
            try {
            event.preventDefault();
            var chk_checked = 0;
            var chk_val = [];
            var chk = document.querySelectorAll('.chk');
                for(var i = 0; i < chk.length; i++) {
                    if(chk[i].checked) {
                        chk_val[i] = chk[i].value;
                        chk_checked += 1;
                    }
                } // ./for
                // console.log(`chk_checked ${chk_val.length}`);      
                if(chk_checked > 0) {
                    Funcmyalertjs.loader();
                        chk_val.forEach(function(val, indice) {
                            console.group('Begin');
                                console.log(`valore: ${val} indice: ${indice}`);
                            console.groupEnd('Begin');
                        }); // ./forEach
                        frm_submit.submit();
                        setTimeout((e) => {
                            Funcmyalertjs.loaderHide();
                        }, 2000);
                    } else {
                        throw new Error("nessuna selezione!!!");
                    }
        } catch (Exception) {
            Funcmyalertjs.showMyAlert("avviso", Exception.message, 'var(--danger)', 'var(--yellow)', 'var(--dark)', 'var(--orange)');
        }
        });
    // button select-all
    var btn_select_all = document.querySelector('.btn-select-all');
    btn_select_all.addEventListener('click', function() {
        try {
            // var content = [];
            var chk_all = document.querySelectorAll('.chk');
            /*
            chk_all.forEach(function(val, indice) {
                // content[indice] = val;
            });
            // throw new Error(content[0].checked);
            */
           for(var i = 0; i < chk_all.length; i++) {
               if(chk_all[i].checked == false) {
                   chk_all[i].checked = true;
               } else {
                   chk_all[i].checked = false;
               }
           }
        } catch (Exception) {
            Funcmyalertjs.showMyAlert("avviso", `errore ${Exception.message}`, 'var(--warning)', 'var(--white)', 'var(--dark)', 'var(--orange)');
        }
    });
    </script>
</body>

</html>