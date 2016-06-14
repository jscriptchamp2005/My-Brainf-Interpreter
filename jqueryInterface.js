this.jQueryInterface = new Object();
this.jQueryInterface.input = function() { return window.prompt("Please enter one charcter").charCodeAt(0); };
this.jQueryInterface.output = function(charCode) { $('p#output').append(String.fromCharCode(charCode)); };
