window.onload = function(){
	
	
	
	 editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "text/html",
        lineNumbers: true
      });
	
	
	
	
	var demo_input = document.getElementById('demo_input');
	
	var type_this = "<!DOCTYPE HTML><html>Hello, this is kinda the text sup?";
	var index = 0;
	
	window.next_letter = function() {
		if (index <= type_this.length) {
			demo_input.value = type_this.substr(0, index++);
			//editor.replaceRange(type_this.substr(0, index++), CodeMirror.Pos(editor.lastLine()))
			editor.setValue(demo_input.value)
			setTimeout("next_letter()", 20);
		}
	}
	
	next_letter();








	
	
}