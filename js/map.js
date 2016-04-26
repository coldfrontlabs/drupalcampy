function initialize() {
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(45.4215411,-75.6837832),
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT,
      mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.TERRAIN
      ]
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.MEDIUM
    }, 
    styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }]

  };

  var map = new google.maps.Map(document.getElementById('custom-map'),
      mapOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map, 
    icon: '/sites/all/themes/drupalcampy/images/dc-logo.svg'
  });

  // Info Window

    var contentString = 
      '<div id="map-content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading">DrupalCamp Ottawa</h3>'+
      '<div id="bodyContent">'+
      '<p><em>Friday July 22, 2016</em></p>'+
      '<p>Faculty of Social Sciences Building,<br>University of Ottawa<br>120 University Private<br>Ottawa, ON K1N 6N5</p>'+
      '<p class="directions"><a href="https://www.google.ca/maps/dir//Faculty+of+Social+Sciences+University+of+Ottawa,+120+University+Private,+Ottawa,+ON+K1N+6N5,+Canada/@45.421452,-75.683478,17z/data=!4m12!1m3!3m2!1s0x4cce0507e0c7bc07:0xb3254cb45b718161!2sFaculty+of+Social+Sciences+University+of+Ottawa!4m7!1m0!1m5!1m1!1s0x4cce0507e0c7bc07:0xb3254cb45b718161!2m2!1d-75.683478!2d45.421452">'+
      'Directions to DrupalCamp →</a></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
   infowindow.open(map,marker);
  });

  infowindow.open(map,marker);

  map.panBy(0, -110); 


}

google.maps.event.addDomListener(window, 'load', initialize);
