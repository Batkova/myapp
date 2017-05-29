var reload = document.getElementById('reload');
var timerdiv = document.getElementById('timer');
var iframe1 = document.getElementById('result1-frame');
var doc1 = iframe1.contentWindow.document;
var iframe2 = document.getElementById('result2-frame');
var doc2 = iframe2.contentWindow.document;
var reloadButton;
var player1 = document.getElementById('turn1');
var player2 = document.getElementById('turn2');
var result = doc1.body;
var turn = false;

var timer = new Timer({
    tick : 1,
    ontick : function (sec) {
		sec = Math.round((sec-1000)/1000);
        timerdiv.innerHTML = (sec);
    },
    onstart : function(sec) { 
		sec = (Math.round(sec)-1000)/1000;
        timerdiv.innerHTML = (sec);
    }
});

var num;
reload.addEventListener("click", function () {
    num = 1;
	console.log('num '+num);
    player1.style.border = '1px solid black';
    var ed1 = acecss1();
    var ed2 = acecss2();
    reloadButton = function () {
        timer.pause();
        timer.start(20);
		check(result);
		//console.log(turn);
        timer.on("end", function () {
			turn = true;
            if (num === 2){
				alert('Время вышло! Ход переходит сопернику!');
                num = 1;
                result = doc1.body; 
                player1.style.border = '1px solid black';
				ed1.setReadOnly(false);
                player2.style.border = 'none';
				ed2.setReadOnly(true);
            }else{
				alert('Ваше время вышло! Ход переходит сопернику!'); 
                num = 2;
                result = doc2.body;
                player2.style.border = '1px solid black';
				ed2.setReadOnly(false);
                player1.style.border = 'none';
				ed1.setReadOnly(true);
            }
            CSSTab(num);
            ResTab(num);
                
			reloadButton();
			turn = false;
        })
    };
    
    reloadButton();
});
