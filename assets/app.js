google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var w42layer = new google.maps.KmlLayer({
    url: 'https://w42-julienbrunuk.c9.io/assets/while42.kml'
  });

                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 3,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    disableDefaultUI: true,
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#999999"},{"lightness":0}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('mapbg');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
                  w42layer.setMap(map);
                  
            }
            
            
// flickr https://api.flickr.com/services/feeds/photos_public.gne?ids=90990936@N04

    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&ids=90990936@N04", function(data){
    $.each(data.items, function(i,item){
      if(i<3){  
    $("<img/>").attr("src", item.media.m).attr('style', 'transform: rotateZ('+ Math.floor(Math.floor(Math.random()*14)-7) + 'deg)').appendTo("#galleria")
    .wrap("<a href='" + item.link + "'></a>");
      }
    });
        
    
    });