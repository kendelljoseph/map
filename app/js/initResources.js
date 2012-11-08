// Init Resources
(function(){
	var srcs = [
		"http://www.google.com/jsapi",									// Google Loader - (Google Maps and other Google plugins)
		"http://www.kendelljoseph.com/scripts/global/jcanvas.min.js",	// jCanvas - (HTML5 canvas manipulation)
		"http://www.kendelljoseph.com/scripts/global/modernizr.js"		// Modernizr - (mobile support and other feature detection)
		];
	$.map(srcs,function(src){
		$.getScript(src)
	});
})();

