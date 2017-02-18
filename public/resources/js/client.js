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

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true
  });
  var input = document.getElementById("select");
  function selectTheme() {
    var theme = input.options[input.selectedIndex].textContent;
    editor.setOption("theme", theme);
    location.hash = "#" + theme;
  }
  var choice = (location.hash && location.hash.slice(1)) ||
               (document.location.search &&
                decodeURIComponent(document.location.search.slice(1)));
  if (choice) {
    input.value = choice;
    editor.setOption("theme", choice);
  }
  CodeMirror.on(window, "hashchange", function() {
    var theme = location.hash.slice(1);
    if (theme) { input.value = theme; selectTheme(); }
  });
	
	
}