var ResTab = function(num){

		document.getElementById('res'+num+'-tab').className = 'active-tab';
		document.getElementById('result-'+num).style.display = 'block';
		document.getElementById('res'+num+'-tab').style.background = '#eee';
		

		switch (num) {
			case 1:
				document.getElementById('res2-tab').className = 'tab';
				document.getElementById('result-2').style.display = 'none';
				document.getElementById('res2-tab').style.background = '#fff';
				break
			case 2:
				document.getElementById('res1-tab').className = 'tab';
				document.getElementById('result-1').style.display = 'none';
				document.getElementById('res1-tab').style.background = '#fff';
				break
		};

	};


var CSSTab = function(num){

		document.getElementById('css'+num+'-tab').className = 'active-tab';
		document.getElementById('css-'+num).style.display = 'block';
		document.getElementById('css'+num+'-tab').style.background = '#eee';

		switch (num) {
			case 1:
				document.getElementById('css2-tab').className = 'tab';
				document.getElementById('css-2').style.display = 'none';
				document.getElementById('css2-tab').style.background = '#fff';
				break;
			case 2:
				document.getElementById('css1-tab').className = 'tab';
				document.getElementById('css-1').style.display = 'none';
				document.getElementById('css1-tab').style.background = '#fff';
				break;
		};

	};

	document.getElementById('res1-tab').addEventListener('click', function(event) {
		event.preventDefault();
		ResTab(1)
	});
	document.getElementById('res2-tab').addEventListener('click', function(event) {
		event.preventDefault();
		ResTab(2)
	});

	document.getElementById('css1-tab').addEventListener('click', function(event) {
		event.preventDefault();
		CSSTab(1)
	});
	document.getElementById('css2-tab').addEventListener('click', function(event) {
		event.preventDefault();
		CSSTab(2)
	});
