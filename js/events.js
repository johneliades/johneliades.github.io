var spinner_buttons = document.querySelectorAll(".spinner");

var i;
for (i=0; i<spinner_buttons.length; i++) {
	spinner_buttons[i].addEventListener("click", color_change);
}

function color_change() {
	var i;

	var element_headers = document.querySelectorAll("h2");
	if(element_headers)
		for (i=0; i<element_headers.length; i++)
			element_headers[i].classList.toggle("color");
	
	var element_text = document.querySelectorAll("p.custom_font");
	if(element_text)
		for (i=0; i<element_text.length; i++)
			element_text[i].classList.toggle("custom_font_color");
	
	var element_buttons = document.querySelectorAll("a.button");
	if(element_buttons)
		for (i=0; i<element_buttons.length; i++)
			element_buttons[i].classList.toggle("button_color");

	var background_body = document.getElementsByTagName("body")[0];
	if(background_body)
		background_body.classList.toggle("color");

	var background_html = document.getElementsByTagName("html")[0];
	if(background_html)
		background_html.classList.toggle("color");
	
	var border = document.getElementsByClassName("column");
	if(border)
		for (i=0; i<element_buttons.length; i++)
			border[i].classList.toggle("border");

}