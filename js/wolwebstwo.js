//word switching
	$(document).ready(function() {
		// initial width of words container and counter
		var count = 0,
			initialWidth = $(".words").find("span").outerWidth();
		
		// setting width on document ready because words are absolute
		$(".words").css("width", initialWidth + "px");
		
		// set interval for changing words
		setInterval(function() {
			// checking if counter is equal with word length
			if (count >= $(".words").find("span").length - 1) {
				count = 0;
			} else {
				count++;
			}
			
			// call animate function
			animate(count);
		}, 1000);
	});
	
	function animate(count) {
		var wordsCont = $(".words"),
			words = wordsCont.find("span"),
			wordsL = words.length,
			wordW = words.eq(count).outerWidth();
		
		// setting width of the words container according to word width
		wordsCont.css("width", wordW + "px");
		
		// adding removing class according which word is active
		words.eq(count).addClass("active").siblings().removeClass("active");
		words.eq(count).prev().addClass("gone").siblings().removeClass("gone");
		
		// checking if active word is first and setting up gone class to the last one
		if (count == 0) {
			words.removeClass("gone");
			words.last().addClass("gone");
		}
	}