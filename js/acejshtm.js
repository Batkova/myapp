function acejshtml() {
    var editor = ace.edit("editorH");
    editor.getSession().setMode("ace/mode/html");
    editor.setReadOnly(true);
    
    //var iframe = document.getElementById('sample-frame')
   /* var doc = iframe.contentWindow.document;
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.body.innerHTML = editor.getValue();
    });
    var cssDefaultStyles = doc.createElement('style');
    cssDefaultStyles.innerHTML = '.background{\n\twidth: 400px;\n\theight: 185px;\n\tbackground: url("http://savepic.ru/13604514.jpg");' +
        '\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 300px;' +
        '\n\theight: 185px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
        '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;\n\tcolor: #000000;\n}';
    doc.head.appendChild(cssDefaultStyles);*/
    
    editor.setValue('<!DOCTYPE html>\n<html>\n\t<head>\n\t' +
        '</head>\n\t<body>\n\t\t<div class="background">\n\t\t' +
        '\n\t\t\t<div class="transbox">\n\t\t\t\t<p>Это текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в ' +
        'полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке. ' +
        '\n\t\t\t\tЭто текст в полупрозрачном блоке.' +
        '\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n\n');
    
}

acejshtml();

