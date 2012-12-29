// Init

$(document).ready(function(){
    var doc = $(document);      // Default document element
    var body = $(document.body);// Default client body element
    var drawing = false;
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
                .attr("id", "senselab")
                .addClass("default_ui")
                .attr("width", self.xMax - 40)
                .attr("height", self.yMax - 90);

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
        senselab = client.Canvas();
    
    
    /* 
        Canvas Manipulation
    */
    senselab.bind("mousedown", function(e){
        var pixelCount = 0;
        var red = 0;
        var green = 0;
        var blue = 0;
        
        $(this).setPixels({
            x: e.offsetX-9, y: e.offsetY-9,
            width: 1, height: 1,
            // loop through each pixel
            each: function(px) {
                
                red   += px.r;
                green += px.g;
                blue  += px.b;
                pixelCount += 1;
                
                px.r = 255 - px.r;
                px.g = 255 - px.g;
                px.b = 255 - px.b;
                
            }
        });
        
        red = Math.ceil(red/pixelCount);
        green = Math.ceil(green/pixelCount);
        blue = Math.ceil(blue/pixelCount);
        
        var rgbString = "rgb(" + red + "," + blue + "," + green + ")";
        $(document.body).css("backgroundColor", rgbString);
        console.log([red, blue, green]);
    });
    
    senselab.drawImage({
        source: "images/nasa/greatdivide.png",
        x: 600, y: 310,
        height: 600, width: 1117
    });
});