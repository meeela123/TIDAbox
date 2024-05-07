$(function(){
	var dflt = {
		'名称1': 'HO1',
		'名称2': 'HO2',
		'名称3': 'HO3',
	};
	var $set  = $('#changeSet');
	var $clr  = $('#changeClr');
	var $area = $('body');
	var storage = sessionStorage;
	var path    = 'textchanger';
	var data = JSON.parse( storage.getItem(path) );
	if( $.type(data)!='object' ) data={};
	$.each(dflt,function(k,v){
		var txt   = data[k]||v;
		var $tgt  = $area.wrapText(RegExp('#'+k+'#','g')).text(txt);
		var $inpt = $('input[data-text="'+k+'"]').val(txt);
		if( !$inpt.length ) return true;
		$set.on('click',function(){
			data[k] = $inpt.val();
			$tgt.text(data[k]);
		});
		$clr.on('click',function(){
			delete data[k];
			$tgt.text(v);
			$inpt.val(v);
		});
	});
	$set.on('click',function(){
		storage.setItem(path, JSON.stringify(data) );
	});
	$clr.on('click',function(){
		var s = JSON.stringify(data);
		if(s.length<3)	storage.removeItem(path);
		else		storage.setItem(path,s);
	});
});
(function( $ ){
$.fn.replaceText = function(pattern,replacement,nofollow) {
	var $not = this.find(nofollow||'script,style').find('*').addBack();
	this.find('*').addBack().not($not).contents().each(function(){
		if( this.nodeType != 3 ) return true;
		var str = htmlEsc( $(this).text() );
		if( !str.match(pattern) ) return true;
		$(this).replaceWith( str.replace(pattern,replacement) );
	});
	return this;
	function htmlEsc(str){
		return str.replace(/[&<>'"`]/g, function(s){ return '&#'+s.charCodeAt(0)+';'; });
	}
};
$.fn.wrapText = function(pattern,tagname,nofollow) {
	var pattern = pattern || /&#\d+;|\S/g;
	var tagname = tagname || 'span';
	var $adv = this.find(tagname);
	return this.replaceText(pattern,'<'+tagname+'>$&</'+tagname+'>',nofollow).find(tagname).not($adv);
};
})( jQuery );