'use strict'
const Funzioni = {
    messaggioDiBenvenuto : function() {
        alert("| Welcome To Back |");
    },
    messaggioMyAlert : function(msg) {
        let el = document.querySelector('.my-alert-testo');
        el.innerHTML = msg;
    },
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
    }
}// ./funzioni
class Classi {
    // metodi
    messaggioDiConferma(msg) {
        // alert(`| ${msg} |`); // ` = alt(sx)+96(tastierino numerico)
    }
} // ./classi
// test
// var cls = new Classi()
// cls.messaggioDiConferma("Salvato con successo");

// Funzioni.messaggioDiBenvenuto();
Funzioni.showMyAlert("Primo messaggio di alert", "var(--success)", "var(--white)", "var(--yellow)");