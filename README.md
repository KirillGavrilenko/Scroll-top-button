# scrollTop-button
Add button to bottom-right corner with slow scroll (using: html, css, javascript, jquery)

Hi everyone 
This is my first upload to github and i just want to add something simple and helpful.

### HTML
```html
<p id="multiText"></p>
<a href="#" class="goUpButton" ></a> 
```
### CSS
```css
.goUpButton{
    background-image: url("upIcon.png");
    height:36px;
    width:36px;
    position: fixed;
    bottom: 10%;
    right:5px;
}

.goUpButton:hover {
    box-shadow: 0 0 2px 1px black;
}

p{
    font-size:xx-large;
    color: gray;
}
```
### JavaScript And jQuery
```javascript
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
```

        

