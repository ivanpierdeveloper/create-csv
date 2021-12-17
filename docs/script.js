'use strict'
const Funzioni = {
    messaggioDiBenvenuto : function() {
        alert("| Welcome To Back |");
    },
    messaggioMyAlert : function(msg) {
        let el = document.querySelector('.my-alert-testo');
        el.innerHTML = msg;
    },
    showMyAlert : function(msg) {

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
Funzioni.messaggioDiBenvenuto();