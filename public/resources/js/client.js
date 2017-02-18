window.onload = function(){
	
	
	/*var demo_input = document.getElementById('demo_input');
	
	var type_this = "<!DOCTYPE HTML><html>Hello, this is kinda the text sup?";
	var index = 0;
	
	window.next_letter = function() {
		if (index <= type_this.length) {
			demo_input.value = type_this.substr(0, index++);
			setTimeout("next_letter()", 20);
		}
	}
	
	next_letter();*/

 editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "text/html",
        lineNumbers: true
      });
	
	
}