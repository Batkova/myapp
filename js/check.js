var amount;

function check(res) { 
	console.log('check started');
	var timerId = setInterval(function() {
		
		var load_count; 
		var sample_image, result_image; 
		
		html2canvas(sample_doc.body, { 
			onrendered: function (s_canvas) { 
				sample_canvas = s_canvas; 
				html2canvas(result, { 
					onrendered: function (r_canvas) { 
					
						result_canvas = r_canvas; 
						var sample_string = sample_canvas.toDataURL("image/jpeg", 1.0); 
						var result_string = result_canvas.toDataURL("image/jpeg", 1.0); 
						
						resemble(sample_string).compareTo(result_string).onComplete(function (data) { 
							amount = Math.floor(100 - data.rawMisMatchPercentage); 
                            //console.log('check ' + amount);
							move();
						});  
					} 
				}); 
			} 
		});
		
	}, 5000);
	if (turn === true){
		console.log("check finished")
		clearInterval(timerId);
	};
		
		
}
	
	
var width = 10;
function move() {
	var count = amount;
    //console.log('progress '+count);
    var elem = document.getElementById('myBar'+num);
    if (width != count) {
        var id = setInterval(frame, 10);
        function frame() {
            if (width === count) {
                clearInterval(id);
            } else {
                if (width < count) {
                    width++; }
                else width--;
                elem.style.width = width + '%'; 
                elem.innerHTML = width * 1 + '%';
            }
        } 
		console.log(num, ' ', width);
    }else return;
}




