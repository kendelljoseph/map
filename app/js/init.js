// Init

$(function(){
	var client = new Client();
	
	function Client(){
		// Detect things the app needs to know about the client (device type, gps, dimentions etc)
		// Detect and save device width and height (x,y)
		// Detect and save device gps capabilities
		// Detect and save client canvas support
		// bind client side events and attributes to "this" object
	}
	
	function execGreeting(){
		var hideTime = arguments[0];
		// Show a greeting based on device type
		// Remove all greeting elements ( to reduce clutter )
	}
	
	function execUI(){
		// Create UI elements based on client dimentions
		// Place UI elements at a position based on client dimentions
	}
	
	function execUIEvents(){
		// Create events based on client type
		// Bind elements to corrisponding UI elements
	}
	
	/* 
	// BACK BURNERS
	
	function execGoogleMap(){
		var opts = arguments[0];
		// Check for dependant resources
		// Add dependant resources
		// continue
	}
	
	function execOpenLayersMap(){
		var opts = arguments[0];
		// Check for dependant resources
		// Add dependant resources
		// continue
	}
	*/


	execGreeting(2000);		// Create and show a greeting, accepts an argument to change the the time before fading out in miliseconds.
	execUI(); 				// Create user interface elements and controls
	execUIEvents(); 		// Bind interface elements to their function
});