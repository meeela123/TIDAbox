function rubyCopy(){
	var str = document.body.className;
	if( str.match(/\s*rubyon/) ){ return }
	var rubyOnHTML=new Array();
	var rubyOnText=new Array();
	var ruby = document.getElementsByTagName('ruby');
	
	for(var i=0; i<ruby.length; i++) {
		rubyOnHTML[i] = ruby[i].innerHTML;
		rubyOnText[i] = ruby[i].innerText;
	}
	
	for(var i=0; i<ruby.length; i++) {
		ruby[i].innerText = rubyOnHTML[i].replace(/<r[a-z]*>|<\/r[a-z]*>/g, "");
	}

	setTimeout(function(){ 
	document.body.className = str;
	for(var i = 0; i < ruby.length; i++) {
		ruby[i].innerText = rubyOnText[i];
		ruby[i].innerHTML = rubyOnHTML[i];
	}
}, 1 );
}