// Init

$(document).ready(function(){
    var doc = $(document);      // Default document element
    var body = $(document.body);// Default client body element
    var M = Modernizr;          // Redefine Modernizr Library
    var client = new Client();  // client is resolved from the Client constructor
    
	function Client(){
        var self = this;
            self.ui = {};
        
        self.xMax       = doc.width();  // Set the maximum x value
        self.yMax       = doc.height(); // Set the maximum y value
        self.mobile     = M.touch;      // Detect touch, if the client is touch friendly, it is assumed mobile
        self.canvas     = M.canvas;     // Detect HTML5 canvas
        self.geolocation= M.geolocation;// Detect geolocation
        
        self.Status = function(){
            
            /* The image source in the status-bar is based on device and client attributes */
            var deviceTypeImgSrc = self.mobile ?
                    "images/icons/default/black/mobile.png" : 
                    "images/icons/default/black/computer.png",
                canvasTypeSrc = self.canvas ? 
                    "images/icons/default/black/flower.png" : 
                    "images/icons/default/red/flower.png",
                geolocTypeSrc = self.geolocation ? 
                    "images/icons/default/black/globe.png" : 
                    "images/icons/default/red/globe.png";
            
            /* Create the image elements and set their sources */
            var deviceType = $('<img />')
                    .attr('src', deviceTypeImgSrc),
                canvasType = $('<img />')
                    .attr('src', canvasTypeSrc),
                geolocType = $('<img />')
                    .attr('src', geolocTypeSrc);
            
            /* Create the status bar, set it's default class, and append the image elements */
            self.ui.status = $('<div />')
                .css("display", "none")
                .addClass("default_ui")
                .append(deviceType)
                .append(canvasType)
                .append(geolocType);
            
            body.append(self.ui.status);
                self.ui.status.fadeIn(1500);    
                
            return self.ui.status;
        };
        
        self.Canvas = function(){
            self.ui.canvas = $('<canvas />')
                .css("display", "none")
                .attr("id", "sample")
                .addClass("default_ui")
                .attr("width", self.xMax - 40)
                .attr("height", self.yMax - 140);
            
            body.append(self.ui.canvas);
                self.ui.canvas.fadeIn(1500);
                
            return self.ui.canvas;
        };
        
        self.OpenLayersMap = function(){
            // Check for dependant resources
            // Add dependant resources
            // continue
        };
        
        if(self.mobile){
            // Disable overscrolling on mobile devices (iPad/Android for now)
            doc.bind("touchstart", function(e){ 
                e.preventDefault(); 
            });
        }
	}

    var statusBar = client.Status(), // Create user interface elements and controls
        sample = client.Canvas();
    
    // Debugging
    console.log(client, statusBar, sample);
});