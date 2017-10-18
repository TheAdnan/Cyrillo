function methodius(){
	var cyrillic = ['А','Б','В','Г','Д','Ђ','Е','Ж','З','И','Ј','К','Л','Љ','М','Н','Њ','О','П','Р','С','Т','Ћ','У','Ф','Х','Ц','Ч','Џ','Ш','а','б','в','г','д','ђ','е','ж','з','и','ј','к','л','љ','м','н','њ','о','п','р','с','т','ћ','у','ф','х','ц','ч','џ','ш'];
	var normal = ['A','B','V','G','D','Đ','E','Ž','Z','I','J','K','L','Lj','M','N','Nj','O','P','R','S','T','Ć','U','F','H','C','Č','Dž','Š','a','b','v','g','d','đ','e','ž','z','i','j','k','l','lj','m','n','nj','o','p','r','s','t','ć','u','f','h','c','č','dž','š'];

	$("body").find("p, li, ul, h1, h2, h3, h4, h5, span, a").each(function() {
			var str = $(this).text();
			str = str.replace('y', 'i');
			str = str.replace('Y', 'i');
			str = str.replace('x', 'ks');
			str = str.replace('X', 'ks');
			str = str.replace('q', 'k');
			str = str.replace('Q', 'k');
			str = str.replace('w', 'v');
			str = str.replace('W', 'V');
			for(var i=0; i<normal.length; i++){
				for(var j=0; j < str.length; j++)
					str = str.replace(normal[i], cyrillic[i]);
			}
			$(this).text(str);
	});
}

methodius();
