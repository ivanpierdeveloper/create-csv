'use strict'
const Funzioni = {
    messaggioDiBenvenuto : function() {
        alert("| Welcome To Back |");
    }
}// ./funzioni
class Classi {
    // metodi
    messaggioDiConferma(msg) {
        alert(`| ${msg} |`); // ` = alt(sx)+96(tastierino numerico)
    }
} // ./classi
// test
var cls = new Funzioni()
cls.messaggioDiConferma();