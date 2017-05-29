var sample_frame = document.getElementById('sample-frame');
var sample_doc = sample_frame.contentDocument || sample_frame.contentWindow.document;
sample_doc.open();
sample_doc.write('<!DOCTYPE html>\n<html>\n\t<head>\n\t' +
        '</head>\n\t<body>\n\t\t<div class="background">' +
        '\n\t\t\t<div class="transbox">\n\t\t\t\t<p>Это текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в ' +
        'полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке. ' +
        '\n\t\t\t\tЭто текст в полупрозрачном блоке.' +
        '\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n<style>\n.background{\n\twidth: 400px;\n\theight: 185px;\n\tbackground: url("http://savepic.ru/13604514.jpg");' +
        '\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 300px;' +
        '\n\theight: 185px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
        '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;\n\tcolor: #000000;\n}\n   </html>');
sample_doc.close();
