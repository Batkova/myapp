function acecss2() {
    var editor = ace.edit("editor2");
    editor.getSession().setMode("ace/mode/css");
    var iframe = document.getElementById('result2-frame');
    var doc = iframe.contentWindow.document;
    var stylecss = doc.createElement('style');
    doc.head.appendChild(stylecss);
    doc.body.innerHTML = '<!DOCTYPE html>\n<html>\n\t<head>\n\t' +
        '</head>\n\t<body>\n\t\t<div class="background">' +
        '\n\t\t\t<div class="transbox">\n\t\t\t\t<p>Это текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в ' +
        'полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке. ' +
        '\n\t\t\t\tЭто текст в полупрозрачном блоке.' +
        '\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>';
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
		//funcTimer();
		doc.head.lastChild.innerHTML = editor.getValue();
			//check(doc);
    });
	
    editor.setValue('.background{\n\twidth: 400px;\n\theight: 185px;' +
        '\n\t/*background: url("http://savepic.ru/13604514.jpg");*/\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 300px;' +
        '\n\theight: 185px;\n');
		
		
		
		
		
		
	/* function funcTimer() {
		var seconds = 0; 
			
		function secOut() {
			 if (seconds == 3) { 
				clearInterval(timerId); 
			} else { 
				seconds++; 
			} 
		} 
			
		timerId = setInterval(secOut, 1000);
		} */

return editor;
}



acecss2();
