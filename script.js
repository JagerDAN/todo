var nodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < nodeList.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.parentNode.removeChild(div);
	}
	
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("inputList").value;
	var t = document.createTextNode(inputValue);
	var todoUl = document.getElementById('todoUL');
	li.appendChild(t);
	if (inputValue === '') {
		alert("Empty input!");
	} else {
		console.log(todoUl);
		console.log(t);
		todoUl.appendChild(li);
	}
	document.getElementById("inputList").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.parentNode.removeChild(div);
		}
	}
}
	
var hidden = document.getElementsByClassName("checked");

function showAll() {
	for(var i=0; i < nodeList.length; i++) {
		nodeList[i].style.display='block';
	}
}

function active() {
	for(var i=0; i < nodeList.length; i++) {
		nodeList[i].style.display='block';
	}

	for(var i=0; i < hidden.length; i++) {
		hidden[i].style.display='none';
	}
}

function checked() {
	for(var i=0; i < nodeList.length; i++) {
		nodeList[i].style.display='none';
	}

	for(var i=0; i < hidden.length; i++) {
		hidden[i].style.display='block';
	}
}

buttonCheck = document.getElementById("allCheck");
buttonCheck.addEventListener('click', function() {
	for(var i=0; i < nodeList.length; i++) {
		nodeList[i].classList.add('checked');
	}	
})

var check = document.getElementsByClassName("checked")

function deleteCheck() {
	for (var i = 0; i < check.length; i) {
		var parent = check[i].parentNode;
		parent.removeChild(check[i]);
	}
}





