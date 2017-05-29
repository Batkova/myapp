var ed1 = acecss1();
var ed2 = acecss2();

document.getElementById('change-turn').addEventListener('click', function(event) {
	turn = true;
	if (num == undefined) {
		num = 1;
	}
	console.log('num turn '+num);
	
    timer.pause();
	timer.start(20);
	check(result);
	
	if (num === 2){
		num = 1;
		result = doc1.body; 
		player1.style.border = '1px solid black';
		ed1.setReadOnly(false);
		player2.style.border = 'none';
		ed2.setReadOnly(true);
	}else{
		num = 2;
		result = doc2.body;
		player2.style.border = '1px solid black';
		ed2.setReadOnly(false);
		player1.style.border = 'none';
		ed1.setReadOnly(true);
	}
	CSSTab(num);
	ResTab(num);

	turn = false;

});