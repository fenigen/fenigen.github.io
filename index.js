

$(document).ready(function() {

/* При клике в меню */
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}
	});

	$('#nav li a').click(function(){
		var toLoad = $(this).attr('href');
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		/*
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		*/
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
	});


/* При клике в области подменю */
	/* Сертификаты */
		var href = $('#cert lo a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}
	});

		$('#cert lo a').click(function(){
		var toLoad = $(this).attr('href');
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		/*
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		*/
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
	});

	
	/* Сертификаты Soft*/
		var href = $('#soft lo a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}
	});

		$('#soft lo a').click(function(){					  
		var toLoad = $(this).attr('href');
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		/*
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		*/
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
	});
});


/* Обработчик второго уровня меню */

var variable;
function chpok(id){
	old = document.getElementById(variable);
	elem = document.getElementById(id);
	if (variable != null){
		if (old.style.display =='') old.style.display='none';
	}
	if (elem.style.display =='') elem.style.display='none';
	else elem.style.display='';
variable = id;
}

