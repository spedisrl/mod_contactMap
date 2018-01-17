/**
 * @version    1.0.x
 * @package    Contact map
 * @author     SPEDI srl http://www.spedi.it
 * @copyright  Copyright (c) Spedi srl.
 * @license    GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

function initMap() {

    /* Style of the map */
    var styles =
    [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#eaeaea"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "stylers": [
      {
        "color": "#dbdbdb"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    /* Lat. and Lon. of the center of the map */
    var myCenter = new google.maps.LatLng(40.696287, -73.944063);

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 14,           //zoom level
        center: myCenter,       //center position
        scrollwheel: false,     //zoom when scroll disable
        zoomControl: false,      //show control zoom

      	// panControl: false,
      	// mapTypeControl: false,
      	streetViewControl: false,
      	// scrollwheel: false,


        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }

    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var image = 'modules/mod_contactmap/image/map-pointer.png';
    var myLatlng = new google.maps.LatLng(40.696287, -73.944063);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        // title: 'Ristorante Locanda Villa Cavalleri',
        icon: image
    });

    //add custom buttons for the zoom-in/zoom-out on the map
  	function CustomZoomControl(controlDiv, map) {
  		//grap the zoom elements from the DOM and insert them in the map
  	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
  	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
  	  	controlDiv.appendChild(controlUIzoomIn);
  	  	controlDiv.appendChild(controlUIzoomOut);

  		// Setup the click event listeners and zoom-in or out according to the clicked element
  		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
  		    map.setZoom(map.getZoom()+1)
  		});
  		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
  		    map.setZoom(map.getZoom()-1)
  		});
  	}

  	var zoomControlDiv = document.createElement('div');
   	var zoomControl = new CustomZoomControl(zoomControlDiv, map);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

}

//google.maps.event.addDomListener(window, 'load', initialize);
