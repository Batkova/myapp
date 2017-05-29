function moven() {
	var count = amount;
    console.log('progress '+count);
    
    var elem = document.getElementById('myBar'+num);
    var width = 10;
    //if (width != count) {
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
                console.log(width);
            }
        } 
    //}else break;
}