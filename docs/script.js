'use strict'
//############################################################### FUNCTION #######################################.//
const Funzioni = {
        // messaggio di benvenuto
        messaggioDiBenvenuto: function() {
            alert("| Welcome To Back |");
        },
        // messagggio my-alert
        messaggioMyAlert: function(msg) {
            let el = document.querySelector('.my-alert-testo');
            el.innerHTML = msg;
        },
        // mostro my-alert
        showMyAlert: function(testo, sfondo, testocl, bordo) {
            $('.full-screen').css({
                'display': 'block'
            });
            $('.my-alert').css({
                'background-color': sfondo,
                'color': testocl,
                'border-color': bordo,
                'top': '50%',
                'transition': '2s'
            });
            this.messaggioMyAlert(testo);
        },
        // chiudo my-alert
        closeMyAlert: function() {
            $('.full-screen').css({
                'display': 'none'
            });
            $('.my-alert').css({
                'position': 'fixed',
                'top': '-50%',
                'transition': '2s'
            });
        },
        loader: function() {
            const fullScreen = document.querySelector(".full-screen");
            const loader = document.querySelector(".loader");
            $(fullScreen)
                .fadeOut("slow")
                .css({
                    "display": "block"
                });
            $(loader)
                .fadeOut('slow')
                .css({
                    "display": "block"
                });
        },
        loaderHide: function() {
            const fullScreen = document.querySelector(".full-screen");
            const loader = document.querySelector(".loader");
            $(fullScreen)
                .fadeOut("slow")
                .css({
                    "display": "none"
                });
            $(loader)
                .fadeOut('slow')
                .css({
                    "display": "none"
                });
        }
    } // ./funzioni
    //################################################# CLASS ################################################.//
class Classi {
    // metodi
    // messagio di conferma
    messaggioDiConferma(msg) {
            // alert(`| ${msg} |`); // ` = alt(sx)+96(tastierino numerico)
        }
        //  db data
    data() {
            // dati da visualizzare sul pdf
            var data = [
                ["0001", "Ivanpier", "abc123", "ivanpier@gmail.com", "44"],
                ["0002", "Hulk", "abc123", "hulk@gmail.com", "22"],
                ["0003", "Ken", "abc456", "ken@gmail.com", "33"],
                ["0004", "Spiderman", "abc789", "spiderman@gmail.com", "44"],
                ["0005", "Batman", "abc012", "batman@gmail.com", "55"],
                ["0006", "Superman", "abc034", "superman@gmail.com", "25"],
                ["0007", "Uomo tigre", "qwe123", "uomotigre@gmail.com", "33"],
                ["0008", "Goldrake", "qwe456", "goldrake@gmail.com", "44"],
                ["0009", "Mazinga Z", "qwe789", "mazingaz@gmail.com", "55"],
                ["0010", "Gig robot", "qwe012", "gigrobot@gmail.com", "58"],
                ["0011", "Pluto", "qwe0456", "pluto@gmail.com", "68"],
                ["0012", "Topolino", "qwe0789", "topolino@gmail.com", "70"],
                ["0013", "Braccio di ferro", "zxc123", "bracciodiferro@gmail.com", "64"],
                ["0014", "Olivia", "zxc345", "olivia@gmail.com", "60"],
                ["0015", "Bluto", "zxc678", "bluto@gmail.com", "65"],
                ["0016", "Grande puffo", "zxc890", "grandepuffo@gmail.com", "80"],
                ["0017", "Puffetta", "zxc012", "puffetta@gmail.com", "75"],
                ["0018", "Paperino", "zxc034", "paperino@gmail.com", "48"],
                ["0019", "Paperina", "zxc056", "paperina@gmail.com", "42"],
                ["0020", "Tom", "zxc078", "top@gmail.com", "50"],
                ["0021", "Jerry", "zxc090", "jerry@gmail.com", "49"]
            ];
            return data;
        }
        // create element table
    createTable() {
            const divContent = document.querySelector('.content');

            var table = document.createElement('table');
            var caption = document.createElement('caption');
            var textCaption = document.createTextNode("dati caricati per creare file");
            table.classList.add('table-excel-dinamic');
            // table.classList.remove('table-excel');
            // or
            // table.setAttribute('class', 'table-excel');
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

            var ar = cls.data();

            for (var x = 0; x < ar.length; x++) {
                var tr = document.createElement('tr');
                for (var y = 0; y < 5; y++) {
                    var td = document.createElement('td');
                    var text = document.createTextNode(ar[x][y]);
                    td.appendChild(text);
                    tr.appendChild(td);
                }

                table.appendChild(tr);
            }

            // button csv
            var btn = document.createElement('button');
            btn.setAttribute('class', 'btn-scarica-file-csv');
            var btnStyle = btn.style;
            btnStyle.setProperty('cursor', 'pointer');
            btnStyle.setProperty('background-color', 'var(--transparent-blue)');
            btnStyle.setProperty('border', '1px solid var(--silver)');
            btnStyle.setProperty('border-radius', '8px');
            btnStyle.setProperty('color', 'var(--silver)');
            btnStyle.setProperty('height', '40px');
            btnStyle.setProperty('width', '125px');
            btnStyle.setProperty("background-image", "url('img/icon-csv.png')");
            btnStyle.setProperty('background-position', '5px center');
            btnStyle.setProperty('background-repeat', 'no-repeat');
            btnStyle.setProperty('background-size', '25px');
            btnStyle.setProperty('padding-left', '10px');
            var btnTitle = document.createTextNode("Scarica-csv");
            btn.appendChild(btnTitle);
            // ./button csv

            // button pdf
            var btnPdf = document.createElement('button');
            btnPdf.setAttribute('class', 'btn-scarica-file-pdf');
            var btnStylePdf = btnPdf.style;
            btnStylePdf.setProperty('cursor', 'pointer');
            btnStylePdf.setProperty('background-color', 'var(--transparent-blue)');
            btnStylePdf.setProperty('border', '1px solid var(--silver)');
            btnStylePdf.setProperty('border-radius', '8px');
            btnStylePdf.setProperty('color', 'var(--silver)');
            btnStylePdf.setProperty('height', '40px');
            btnStylePdf.setProperty('width', '125px');
            btnStylePdf.setProperty("background-image", "url('img/icon-pdf.png')");
            btnStylePdf.setProperty('background-position', '2px center');
            btnStylePdf.setProperty('background-repeat', 'no-repeat');
            btnStylePdf.setProperty('background-size', '35px');
            btnStylePdf.setProperty('padding-left', '17px');
            btnStylePdf.setProperty('margin-left', '5px');
            var btnTitlePdf = document.createTextNode("Scarica-pdf");
            btnPdf.appendChild(btnTitlePdf);
            // ./button pdf

            // button excel
            var btnExcel = document.createElement('button');
            btnExcel.setAttribute('class', 'btn-scarica-file-excel');
            var btnStyleExcel = btnExcel.style;
            btnStyleExcel.setProperty('cursor', 'pointer');
            btnStyleExcel.setProperty('background-color', 'var(--transparent-blue)');
            btnStyleExcel.setProperty('border', '1px solid var(--silver)');
            btnStyleExcel.setProperty('border-radius', '8px');
            btnStyleExcel.setProperty('color', 'var(--silver)');
            btnStyleExcel.setProperty('height', '40px');
            btnStyleExcel.setProperty('width', '125px');
            btnStyleExcel.setProperty("background-image", "url('img/icon-excel.png')");
            btnStyleExcel.setProperty('background-position', '3px center');
            btnStyleExcel.setProperty('background-repeat', 'no-repeat');
            btnStyleExcel.setProperty('background-size', '25px');
            btnStyleExcel.setProperty('padding-left', '18px');
            btnStyleExcel.setProperty('margin-left', '5px');
            var btnTitleExcel = document.createTextNode("Scarica-excel");
            btnExcel.appendChild(btnTitleExcel);
            // ./button excel

            divContent.appendChild(table);
            divContent.appendChild(btn);
            divContent.appendChild(btnPdf);
            divContent.appendChild(btnExcel);
        } // create table
        // scarica file csv
    downloadCSVFile(csv, filename) {
            var csv_file, download_link;

            csv_file = new Blob([csv], { type: "text/csv" });

            download_link = document.createElement("a");

            download_link.download = filename + ".csv";

            download_link.href = window.URL.createObjectURL(csv_file);

            download_link.style.display = "none";

            document.body.appendChild(download_link);

            download_link.click();
            setTimeout((e) => {
                Funzioni.loaderHide();
            }, 3000);
        } // ./ scarica file csv
        // crea file csv
    htmlToCSV(html, filename) {
            Funzioni.loader();
            var data = [];
            var rows = document.querySelectorAll("table tr");
            for (var i = 0; i < rows.length; i++) {
                var row = [],
                    cols = rows[i].querySelectorAll("td, th");

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
                Funzioni.loader();
                // creo l'inserimento dell'immagine
                var pathImg = "img/favicon-radius-8px-50.png";
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
                // title pdf
                doc.setFontSize('18'); // pt font
                doc.setTextColor(0, 0, 139); // darkblue
                doc.text(55, 10, "CREATE FILE CSV, PDF E EXCEL");

                // restore font and color
                doc.setFontSize('8'); // pt font
                doc.setTextColor(0, 0, 139); // darkblue
                // ./setting text head

                // add text
                var head_left = 21;
                var head_top = 24
                    // add cell to head id
                doc.setLineWidth(0.1);
                doc.setDrawColor(220, 53, 69);
                doc.rect(5, 20.5, 34.5, 5);

                // add cell to head usr
                doc.setLineWidth(0.1);
                doc.setDrawColor(220, 53, 69);
                doc.rect(40, 20.5, 34.5, 5);

                // add cell to head psw
                doc.setLineWidth(0.1);
                doc.setDrawColor(220, 53, 69);
                doc.rect(75, 20.5, 34.5, 5);

                // add cell to head email
                doc.setLineWidth(0.1);
                doc.setDrawColor(220, 53, 69);
                doc.rect(110, 20.5, 60, 5);

                // add cell to head age
                doc.setLineWidth(0.1);
                doc.setDrawColor(220, 53, 69);
                doc.rect(170.5, 20.5, 34.5, 5);


                // left, top, text
                doc.text(head_left, head_top, "ID");
                doc.text(head_left + 34, head_top, "USR");
                doc.text(head_left + 68.5, head_top, "PSW");
                doc.text(head_left + 115, head_top, "EMAIL");
                doc.text(head_left + 163, head_top, "AGE");
                // ./add text

                // add line
                doc.setLineWidth(0.2); // spessore
                doc.setDrawColor(139, 0, 0); // colore darkred
                doc.rect(5, 26, 200, 0.1); // left, top, width, height
                // ./add line

                var data = cls.data();
                // ./dati da visualizzare sul pdf

                // var position and num records for page
                var left = 10;
                var top = 28;
                var numRecords = 0;
                var cell_width = 0;
                // ./var position and num records for page

                // for populate the pdf head and body
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].length; j++) {
                        if (numRecords == 100) {
                            // add the page pdf
                            doc.addPage();
                            // add cell to head id
                            doc.setLineWidth(0.1);
                            doc.setDrawColor(220, 53, 69);
                            doc.rect(5, 20.5, 34.5, 5);

                            // add cell to head usr
                            doc.setLineWidth(0.1);
                            doc.setDrawColor(220, 53, 69);
                            doc.rect(40, 20.5, 34.5, 5);

                            // add cell to head psw
                            doc.setLineWidth(0.1);
                            doc.setDrawColor(220, 53, 69);
                            doc.rect(75, 20.5, 34.5, 5);

                            // add cell to head email
                            doc.setLineWidth(0.1);
                            doc.setDrawColor(220, 53, 69);
                            doc.rect(110, 20.5, 60, 5);

                            // add cell to head age
                            doc.setLineWidth(0.1);
                            doc.setDrawColor(220, 53, 69);
                            doc.rect(170.5, 20.5, 34.5, 5);
                            // set text color and font size
                            doc.setFontSize(8); // 8 pt
                            doc.setTextColor(0, 0, 139); // darkblue
                            // ./set text color and font size

                            doc.text(head_left, head_top, "ID");
                            doc.text(head_left + 34, head_top, "USR");
                            doc.text(head_left + 68.5, head_top, "PSW");
                            doc.text(head_left + 115, head_top, "EMAIL");
                            doc.text(head_left + 163, head_top, "AGE");
                            // ./add the page pdf

                            // line
                            doc.setLineWidth(0.2); // spessore
                            doc.setDrawColor(139, 0, 0); // colore darkred
                            doc.rect(5, 26, 200, 0.1); // left, top, width, height
                            // ./line


                            // restore the var
                            left = 10;
                            top = 28;
                            numRecords = 0;
                            // ./restore the var

                        } // ./numRecords
                        if (j == 3) {
                            cell_width = 60;
                        } else {
                            cell_width = 34.5;
                        }
                        // set cell border
                        doc.setLineWidth(0.2); // spessore
                        // doc.setDrawColor(0, 0, 192); // darkblue
                        doc.setDrawColor(253, 126, 20); // orange
                        doc.rect(left - 5, top, cell_width, 4); // left, top, width, height
                        // ./set cell border

                        // rows odd even
                        doc.setFillColor(52, 58, 64); // dark
                        if (i % 2 == 0) {
                            //doc.setFillColor(173, 216, 230); // background cell
                            doc.rect(left - 4.9, top + 0.1, cell_width - 0.2, 3.8, "F"); // left, top, width, height, Fill or "FD" Fill and Border
                        } else {
                            //doc.setFillColor(135, 206, 250); // background cell
                            doc.rect(left - 4.9, top + 0.1, cell_width - 0.2, 3.8, "F"); // left, top, width, height, Fill or "FD" Fill Border
                        }
                        // ./rows odd even

                        // set color text
                        // doc.setTextColor(139, 0, 0); // darkred
                        doc.setTextColor(255, 193, 7); // yellow
                        if (j == 0 || j == 2 || j == 4) {
                            doc.text(left + 9.5, top + 2.7, data[i][j]);
                        } else if (j == 1) {
                            doc.text(left + 1, top + 2.7, data[i][j]);
                        } else {
                            doc.text(left + 10, top + 2.7, data[i][j]);
                        }

                        // add text and increment var
                        left += cell_width + 0.5; //16.5;
                        numRecords += 1;
                    } // ./for j
                    // restore var
                    left = 10;
                    top += 5;
                    // ./restore var
                } // ./ for i
                // ./for populate the pdf head and body

                // save file
                // throw new Error("File creato con successo");
                doc.save(`${file_name}.pdf`);
                // .save file

                // hide loader
                setTimeout((e) => {
                    Funzioni.loaderHide();
                }, 3000);
                // ./hide loader
            } catch (Exception) {
                console.error(Exception.message);
            }
        }
        // ./ create pdf
        // STRTABLE
    strtable(tableID, nomefile) {
            var data = cls.data();
            var td = "";
            var table = '<table class="table-excel" border="2px">' +
                '<thead>' +
                '<caption>dati caricati per creare file</caption>' +
                '<tr>' +
                '<th>ID</th>' +
                '<th>USR</th>' +
                '<th>PSW</th>' +
                '<th>EMAIL</th>' +
                '<th>AGE</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>';
            for (var i = 0; i < data.length; i++) {
                if (i % 2 == 0) {
                    table += '<tr style="background-color: rgb(32, 178, 170); color: white; text-align: center; height: 20px;">';
                } else {
                    table += '<tr style="background-color: rgb(135, 206, 250); color: white; text-align: center; height: 20px;">';
                }
                for (var j = 0; j < data[i].length; j++) {
                    // if (tipo[i] == "NIL") { continue };
                    td += '<td>' + data[i][j] + '</td>';
                } // ./for j
                table += `${td}</tr>`;
                td = "";
            } // ./for i

            table += '</tbody>' +
                '</table>';
            document.querySelector('.table-excel').innerHTML = table;
            this.exportTableToExcel(tableID, nomefile);
            // fnExcelReport('table_fatture');
        } // strtable()
        // STRTABLE
        // EXPORT TABLE TO EXCEL
    exportTableToExcel(tableID, filename) {
            var downloadLink;
            var dataType = 'application/vnd.ms-excel';
            var tableSelect = document.querySelector("." + tableID);


            var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

            // Specify file name
            filename = filename ? filename + '.xls' : 'excel_data.xls';

            // Create download link element
            downloadLink = document.createElement("a");

            document.body.appendChild(downloadLink);

            if (navigator.msSaveOrOpenBlob) {
                var blob = new Blob(['\ufeff', tableHTML], {
                    type: dataType
                });
                navigator.msSaveOrOpenBlob(blob, filename);
            } else {
                // Create a link to the file
                downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

                // Setting the file name
                downloadLink.download = filename;

                //triggering the function
                downloadLink.click();

                setTimeout((e) => {
                    Funzioni.loaderHide();
                    /*
                    $(`.table-excel tr th`).css({
                        'border': '1px solid #dc3545'
                    });
                    $(`.table-excel tr td`).css({
                        'border': '1px solid #fd7e14'
                    });
                    */
                }, 3000);
            }
        }
        // EXPORT TABLE TO EXCEL
        // create excel
    createExcel(tableID, fileName) {
            'use strict'
            try {
                /*
                console.group('head');
                console.log("Excel");
                console.groupEnd("head");
                */
                // throw new Error("Nuovo messaggio di errore");
                Funzioni.loader();
                cls.strtable(tableID, fileName);
            } catch (Exception) {
                console.error(Exception.message);
            }
        }
        // ./create excel
} // ./classi

// call Classi
const cls = new Classi()
    // cls.messaggioDiConferma("Salvato con successo");
cls.createTable();
// func create file csv
var btnScaricaFileCsv = document.querySelector('.btn-scarica-file-csv');
btnScaricaFileCsv.addEventListener('click', function() {
    var question = prompt("Nome file ?", "Scrivere qui");
    if (question) {
        cls.htmlToCSV(null, question);
    } else if (question == "") {
        Funzioni.showMyAlert("non hai scritto nome file", "var(--warning)", "var(--dark)", "var(--dark)");
    }
});
// func create file csv

// call Funzioni
// Funzioni.messaggioDiBenvenuto();
// Funzioni.showMyAlert("primo messaggio di alert", "var(--success)", "var(--white)", "var(--yellow)");
// create pdf
// button create pdf
let btn_pdf = document.querySelector('.btn-scarica-file-pdf');
btn_pdf.addEventListener('click', (e) => {
    /*
    console.group("begin");
        console.log("Button-Pdf");
    console.groupEnd("begin");
    */
    var question = prompt("Nome file ?", "Scrivere qui");
    if (question) {
        cls.create_pdf(question);
    } else if (question == "") {
        Funzioni.showMyAlert("non hai scritto nome file", "var(--warning)", "var(--dark)", "var(--dark)");
    }
});
// button create pdf
// ./create pdf
// create excel
var btnExcel = document.querySelector('.btn-scarica-file-excel');
btnExcel.addEventListener('click', (e) => {
    var question = prompt("Nome file ?", "Scrivere qui");
    if (question) {
        cls.createExcel("table-excel", question);
    } else if (question == "") {
        Funzioni.showMyAlert("non hai scritto nome file", "var(--warning)", "var(--dark)", "var(--dark)");
    }
});
/*
btnExcel.addEventListener('mousedown', (e) => {
    btnExcel.style.setProperty('background-color', 'var(--primary');

});
btnExcel.addEventListener('mouseup', (e) => {
    btnExcel.style.setProperty('background-color', 'var(--transparent');
    cls.createExcel();
});
*/
// ./create excel