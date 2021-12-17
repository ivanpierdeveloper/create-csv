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
        table.appendChild(th1);
        table.appendChild(th2);
        table.appendChild(th3);
        table.appendChild(th4);
        table.appendChild(th5);

        var tr1 = document.createElement('tr');

        var td1 = document.createElement('td');
        var texttd1 = document.createTextNode("1");
        td1.appendChild(texttd1);

        var td2 = document.createElement('td');
        var texttd2 = document.createTextNode("ivanpier");
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
            ["2", "ivanpier-2", "psw-2", "ivanpier@gmail.com-2", "age-2"],
            ["3", "ivanpier-3", "psw-3", "ivanpier@gmail.com-3", "age-3"],
            ["4", "ivanpier-4", "psw-4", "ivanpier@gmail.com-4", "age-4"],
            ["5", "ivanpier-5", "psw-5", "ivanpier@gmail.com-5", "age-5"],
            ["6", "ivanpier-6", "psw-6", "ivanpier@gmail.com-6", "age-6"]
        ];
     for(var x = 0; x < 5; x++) {
         var tr = document.createElement('tr');
         for(var y = 0; y < 5; y++) {
             var td = document.createElement('td');
             var text = document.createTextNode(ar[x][y]);
             td.appendChild(text);
             tr.appendChild(td);
         }
            
             table.appendChild(tr);
     }

        // button
        var btn = document.createElement('button');
        btn.setAttribute('class','btn-scarica-file-csv');
        var btnStyle = btn.style;
        btnStyle.setProperty('cursor','pointer');
        btnStyle.setProperty('background-color', 'var(--warning)');
        btnStyle.setProperty('border', '1px solid var(--dark)');
        btnStyle.setProperty('border-radius', '8px');
        btnStyle.setProperty('color', 'var(--dark)');
        btnStyle.setProperty('height', '40px');
        btnStyle.setProperty('width', '120px');
        var btnTitle = document.createTextNode("Scarica-csv");
        btn.appendChild(btnTitle);
        // ./button

     divContent.appendChild(table);
     divContent.appendChild(btn);
    } // create table
    // scarica file csv
    downloadCSVFile(csv, filename) {
        var csv_file, download_link;

        csv_file = new Blob([csv], {type: "text/csv"});

        download_link = document.createElement("a");

        download_link.download = filename;

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
} // ./classi

// call Classi
const cls = new Classi()
// cls.messaggioDiConferma("Salvato con successo");
cls.createTable();
// func create file csv
var btnScaricaFileCsv = document.querySelector('.btn-scarica-file-csv');
btnScaricaFileCsv.addEventListener('click', function() {
   cls.htmlToCSV(null, "File-csv");
});
// func create file csv

// call Funzioni
// Funzioni.messaggioDiBenvenuto();
// Funzioni.showMyAlert("primo messaggio di alert", "var(--success)", "var(--white)", "var(--yellow)");

