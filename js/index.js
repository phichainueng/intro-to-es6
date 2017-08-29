function clickbutton(val)
{
var txt;
txt = document.getElementById('text').value + val;
document.getElementById('text').value = txt;
}

function del()
{
	var txt; 
	txt = document.getElementById('text').value;
	txt = txt.substr(0,(txt.length)-1);
	document.getElementById('text').value = txt;
}

function enter()
{
	var txt; 
	txt = document.getElementById('text').value;
	txt = txt + '\n';
	document.getElementById('text').value = txt;
}

function space()
{
	var txt; 
	txt = document.getElementById('text').value;
	txt = txt + ' ' ;
	document.getElementById('text').value = txt;
}