'use strict'
const Funzioni = {
    // messaggio di benvenuto
    messaggioDiBenvenuto : function() {
        alert("| Welcome To Back |");
    },
    // messagggio my-alert
    messaggioMyAlert : function(msg) {
        let el = document.querySelector('.my-alert-testo');
        el.innerHTML = msg;
    },
    // mostro my-alert
    showMyAlert : function(testo, sfondo, testocl, bordo) {
        $('.full-screen').css({
          'display' : 'block'
        });
        $('.my-alert').css({
            'background-color' : sfondo,
            'color' : testocl,
            'border-color' : bordo,
            'top' : '50%',
            'transition' : '2s'
        });
        this.messaggioMyAlert(testo);
    },
    // chiudo my-alert
    closeMyAlert : function() {
        $('.full-screen').css({
        'display' : 'none'
        });
        $('.my-alert').css({
        'position' : 'fixed',
        'top' : '-50%',
        'transition' : '2s'
        });
    }
}// ./funzioni

class Classi {
    // metodi
    // messagio di conferma
    messaggioDiConferma(msg) {
        // alert(`| ${msg} |`); // ` = alt(sx)+96(tastierino numerico)
    }
    // create element table
    createTable() {
        const divContent = document.querySelector('.content');

        var table = document.createElement('table');
        var caption = document.createElement('caption');
        var textCaption = document.createTextNode("dati caricati per creare file csv");
        caption.appendChild(textCaption);
        table.appendChild(caption)

        var trTh = document.createElement('tr');

        var th1 = document.createElement('th');
        var textth1 = document.createTextNode("id");
        th1.appendChild(textth1);

        var th2 = document.createElement('th');
        var textth2 = document.createTextNode("usr");
        th2.appendChild(textth2);

        var th3 = document.createElement('th');
        var textth3 = document.createTextNode("psw");
        th3.appendChild(textth3);

        var th4 = document.createElement('th');
        var textth4 = document.createTextNode("email");
        th4.appendChild(textth4);

        var th5 = document.createElement('th');
        var textth5 = document.createTextNode("age");
        th5.appendChild(textth5);

        trTh.appendChild(th1);
        trTh.appendChild(th2);
        trTh.appendChild(th3);
        trTh.appendChild(th4);
        trTh.appendChild(th5);
        table.appendChild(trTh);

        var tr1 = document.createElement('tr');

        var td1 = document.createElement('td');
        var texttd1 = document.createTextNode("0001");
        td1.appendChild(texttd1);

        var td2 = document.createElement('td');
        var texttd2 = document.createTextNode("Ivanpier");
        td2.appendChild(texttd2);

        var td3 = document.createElement('td');
        var texttd3 = document.createTextNode("abc123");
        td3.appendChild(texttd3);

        var td4 = document.createElement('td');
        var texttd4 = document.createTextNode("ivanpier@gmail.com");
        td4.appendChild(texttd4);

        var td5 = document.createElement('td');
        var texttd5 = document.createTextNode("25");
        td5.appendChild(texttd5);
        
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);
        table.appendChild(tr1);
        
        var ar = [
            ["0002", "Hulk", "def", "hulk@gmail.com", "22"],
            ["0003", "Ken", "ghi", "ken@gmail.com", "33"],
            ["0004", "Spiderman", "lmn", "spiderman@gmail.com", "44"],
            ["0005", "Batman", "opq", "batman@gmail.com", "55"],
            ["0006", "Superman", "rst", "superman@gmail.com", "33"]
        ];
     for(var x = 0; x < ar.length; x++) {
         var tr = document.createElement('tr');
         for(var y = 0; y < 5; y++) {
             var td = document.createElement('td');
             var text = document.createTextNode(ar[x][y]);
             td.appendChild(text);
             tr.appendChild(td);
         }
            
             table.appendChild(tr);
     }

        // button csv
        var btn = document.createElement('button');
        btn.setAttribute('class','btn-scarica-file-csv');
        var btnStyle = btn.style;
        btnStyle.setProperty('cursor','pointer');
        btnStyle.setProperty('background-color', 'var(--warning)');
        btnStyle.setProperty('border', '1px solid var(--dark)');
        btnStyle.setProperty('border-radius', '8px');
        btnStyle.setProperty('color', 'var(--dark)');
        btnStyle.setProperty('height', '40px');
        btnStyle.setProperty('width', '125px');
        btnStyle.setProperty("background-image" , "url('../create-csv-pdf/img/csv-icon-12.png')");
        btnStyle.setProperty('background-position' , '5px center');
        btnStyle.setProperty('background-repeat' , 'no-repeat');
        btnStyle.setProperty('background-size' , '25px');
        btnStyle.setProperty('padding-left', '17px');
        var btnTitle = document.createTextNode("Scarica-csv");
        btn.appendChild(btnTitle);
        // ./button csv

         // button pdf
         var btnPdf = document.createElement('button');
         btnPdf.setAttribute('class','btn-scarica-file-pdf');
         var btnStylePdf = btnPdf.style;
         btnStylePdf.setProperty('cursor','pointer');
         btnStylePdf.setProperty('background-color', 'var(--warning)');
         btnStylePdf.setProperty('border', '1px solid var(--dark)');
         btnStylePdf.setProperty('border-radius', '8px');
         btnStylePdf.setProperty('color', 'var(--dark)');
         btnStylePdf.setProperty('height', '40px');
         btnStylePdf.setProperty('width', '125px');
         btnStylePdf.setProperty("background-image" , "url('../create-csv-pdf/img/pdf-icon.png')");
         btnStylePdf.setProperty('background-position' , '5px center');
         btnStylePdf.setProperty('background-repeat' , 'no-repeat');
         btnStylePdf.setProperty('background-size' , '35px');
         btnStylePdf.setProperty('padding-left', '17px');
         var btnTitlePdf = document.createTextNode("Scarica-pdf");
         btnPdf.appendChild(btnTitlePdf);
         // ./button pdf

     divContent.appendChild(table);
     divContent.appendChild(btn);
     divContent.appendChild(btnPdf);
    } // create table
    // scarica file csv
    downloadCSVFile(csv, filename) {
        var csv_file, download_link;

        csv_file = new Blob([csv], {type: "text/csv"});

        download_link = document.createElement("a");

        download_link.download = filename+".csv";

        download_link.href = window.URL.createObjectURL(csv_file);

        download_link.style.display = "none";

        document.body.appendChild(download_link);

        download_link.click();
    } // ./ scarica file csv
    // crea file csv
    htmlToCSV(html, filename) {
        var data = [];
        var rows = document.querySelectorAll("table tr");
        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
    
            for (var j = 0; j < cols.length; j++) {
                    row.push(cols[j].innerText);
            }
                    
            data.push(row.join(",")); 		
        }
    
        this.downloadCSVFile(data.join("\n"), filename);
        // console.table(data[0]);
    // ./crea file csv
    }
    // create pdf
    create_pdf(file_name) {
        'use strict'
        try {
            // creo l'inserimento dell'immagine
            var pathImg = "../create-csv-pdf/img/favicon-radius-8px-50.png";
            var objImg = new Image();
            objImg.src = pathImg;
            // ./ creo l'inserimento dell'immagine

            // lib jsPDF
            let doc = new jsPDF('p', 'mm', 'a4');
            // ./lib jsPDF

            // add image al pdf
            doc.addImage(objImg, 'PNG', 5, 5);
            // ./add image al pdf

            // setting text head
            /*
            // The 14 standard PDF fonts are as follows
            Courier
            Courier-Bold
            Courier-BoldOblique
            Courier-Oblique
            Helvetica
            Helvetica-Bold
            Helvetica-BoldOblique
            Helvetica-Oblique
            Symbol
            Times-Roman
            Times-Bold
            Time-Italic
            Time-BoldItalic
            */
            // doc.addFont('ArialMS', 'Arial', 'normal');
            // doc.setFont('Arial');
            doc.setFont('Courier', 'normal'); // type font
            //doc.setFontType('normal') // bold or italic
            doc.setFontSize('8'); // pt font
            doc.setTextColor(0, 0, 139); // darkblue
            // ./setting text head

            // add text
                // left, top, text
            doc.text(20, 25, "ID");
            doc.text(40, 25, "USR");
            doc.text(60, 25, "PSW");
            doc.text(80, 25, "EMAIL");
            doc.text(100, 25, "AGE");
            // ./add text

            // add line
            doc.setLineWidth(0.2); // spessore
            doc.setDrawColor(139, 0, 0); // colore darkred
            doc.rect(5, 26, 200, 0.1); // left, top, width, height
            // ./add line

            // dati da visualizzare sul pdf
            var data = [
                ["0002", "Hulk", "def", "hulk@gmail.com", "22"],
                ["0003", "Ken", "ghi", "ken@gmail.com", "33"],
                ["0004", "Spiderman", "lmn", "spiderman@gmail.com", "44"],
                ["0005", "Batman", "opq", "batman@gmail.com", "55"],
                ["0006", "Superman", "rst", "superman@gmail.com", "77"]
            ];
            // ./dati da visualizzare sul pdf
            
            // var position and num records for page
            var left = 10;
            var top = 25;
            var numRecords = 0;
            // ./var position and num records for page

            // for populate the pdf head and body
            for(var i = 0; i < data.length; i++) {
                for(var j = 0; j < data[i].length; j++) {
                    if(numRecords == 15) {
                        // add the page pdf
                        doc.addPage();
                        doc.setFontSize(8);
                        doc.text(5, 25, "ID");
                        doc.text(15, 25, "USR");
                        doc.text(30, 25, "PSW");
                        doc.text(52, 25, "EMAIL");
                        doc.text(68, 25, "AGE");
                        // ./add the page pdf

                        // line
                        doc.setLineWidth(0.2); // spessore
                        doc.setDrawColor(139, 0, 0); // colore darkred
                        doc.rect(5, 26, 200, 0.1); // left, top, width, height
                        // ./line

                        // restore the var
                        left = 10;
                        top = 25;
                        numRecords = 0;
                        // ./restore the var

                    }// ./numRecords
                    // set cell border
                    doc.setLineWidth(0.3); // spessore
                    doc.setDrawColor(0, 0, 192); // darkblue
                    doc.rect(left - 1, top -1 , 20, 4); // left, top, width, heght
                    // ./set cell border

                    // set color text
                    doc.setTextColor(139, 0 ,0); // darkred
                    // ./set color text

                    // rows odd even
                    if(i % 2 == 0){
                        doc.setFillColor(173, 216, 230); // background cell
                        doc.rect(left - 2, top - 3.3, 19.2, 4.2, "F"); // left, top, width, height, Fill or "FD" Fill and Border
                    } else {
                        doc.setFillColor(135, 206, 250); // background cell
                        doc.rect(left - 2, top - 3.3, 19.2, 4.2, "F"); // left, top, width, height, Fill or "FD" Fill Border
                    }
                    // ./rows odd even
                    // set font size
                    doc.setFontSize(6); // pt 6
                    //. /set font size
                    // add text
                    doc.text(left + 2, top + 2, data[i][j]);
                    // ./add text
                    // increment var left and numRecords
                    left += 20;
                    numRecords += 1;
                    // ./increment var left and numRecords
                }// ./for j
                // restore var
                left = 10;
                top += 5; 
                // ./restore var
            }// ./ for i
            // ./for populate the pdf head and body
            
            // save file
            // throw new Error("File creato con successo");
            doc.save(`${file_name}.pdf`);
            // .save file
        } catch(Exception) {
            console.error(Exception.message);
        }
    }
    // ./ create pdf
} // ./classi

// call Classi
const cls = new Classi()
// cls.messaggioDiConferma("Salvato con successo");
cls.createTable();
// func create file csv
var btnScaricaFileCsv = document.querySelector('.btn-scarica-file-csv');
btnScaricaFileCsv.addEventListener('click', function() {
    var question = prompt("Nome file", "Nome file CSV");
    if(question) {
        cls.htmlToCSV(null, question);
    } else if(question == ""){
        Funzioni.showMyAlert("non hai scritto nome file", "var(--warning)", "var(--dark)", "var(--dark)");
    }
});
// func create file csv

// call Funzioni
// Funzioni.messaggioDiBenvenuto();
// Funzioni.showMyAlert("primo messaggio di alert", "var(--success)", "var(--white)", "var(--yellow)");
/* create pdf */
// button create pdf
let btn_pdf = document.querySelector('.btn-scarica-file-pdf');
btn_pdf.addEventListener('click', (e) =>{
    /*
    console.group("begin");
        console.log("Button-Pdf");
    console.groupEnd("begin");
    */
   cls.create_pdf("Testing");
});
// button create pdf
/* create pdf*/