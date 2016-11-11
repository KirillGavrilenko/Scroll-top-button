//Scroll up slow
$(document).ready(function() {			
			// Animate
			$('.goUpButton').click(function(event) {
				event.preventDefault();				
				$("html, body").animate({ scrollTop: 0 }, "slow");
			})
		});


//MultiText
var text = "";
var i;
for (i = 0; i < 30; i++) {
    text += "Scroll Down"+"<br>";
}
document.getElementById("multiText").innerHTML = text;

