// Credit goes to Dagg's post: http://codereview.stackexchange.com/questions/58125/brainfuck-interpreter-in-javascript-take-2?lq=1
function loopFinder(sourceCode) {
	var start, checkpointAs = {}, checkpointBs = {}, stack = [];
	
	for(var i = 0; i < sourceCode.length; i++) {
		switch(sourceCode[i]) {
			case '[':
				stack.push(i);
				break;
			case ']':
				start = stack.pop();
				checkpointAs[i] = start;
				checkpointBs[start] = i;
				break;
		}
	}
	
	return { start: checkPointAs, finish: checkPointBs };
}
