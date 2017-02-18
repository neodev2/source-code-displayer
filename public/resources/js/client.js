window.onload = function(){
	
	
	
	 editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "text/html",
        lineNumbers: true
      });
	
	
	
	
	var demo_input = document.getElementById('code');
	
	var type_this = demo_input.value;
	var index = 0;
	
	window.next_letter = function() {
		if (index <= type_this.length) {
			demo_input.value = type_this.substr(0, index++);
			
			// from http://stackoverflow.com/questions/18946546/how-do-you-append-text-in-codemirror
			//editor.replaceRange(type_this.substr(0, index++), CodeMirror.Pos(editor.lastLine()));
			editor.setValue(demo_input.value);
			
			setTimeout("next_letter()", 20);
		}
	}
	
	next_letter();








	
	
}