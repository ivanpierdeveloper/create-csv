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

        divContent.appendChild(table);

    }
} // ./classi

// call Classi
var cls = new Classi()
// cls.messaggioDiConferma("Salvato con successo");
cls.createTable();

// call Funzioni
// Funzioni.messaggioDiBenvenuto();
// Funzioni.showMyAlert("primo messaggio di alert", "var(--success)", "var(--white)", "var(--yellow)");