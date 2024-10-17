//write your JS code here:
/* let blankWindow = window.open('', '', 'width=200, height=100');
debugger;

let msgWindow1 = window.open('', 'MsgWindow', ``);
msgWindow1.document.write('some text');
debugger;

let msgWindow2 = window.open('', 'MsgWindow', ``);
msgWindow2.document.write('some other text');
debugger;

window.location.replace('https://www.example.com');
debugger; */
/* 
let temporaryWindow = window.open('', '', '');
temporaryWindow.close(); */

/* let openerWindow = window.open('', '', '');
openerWindow.opener.document.write('some window text');
debugger; */


/* let createIframe = document.createElement("iframe");
createIframe.src = 'iframe.html';
document.body.appendChild(createIframe);
createIframe.onload = function() {
    let iframeDoc = createIframe.contentDocument || createIframe.contentWindow.document;
    iframeDoc.write('some text');
};
debugger; */

let iframe2 = document.createElement('iframe');
iframe2.src = 'iframe.html'; // Asegúrate de que existe
document.body.appendChild(iframe2); // se añade el iframe al cuerpo del documento
iframe.onload = function() { //cargamos el iframe
    let iframeDoc = iframe2.contentDocument || iframe2.contentWindow.document;
    console.log(iframeDoc.body.innerHTML);
};

