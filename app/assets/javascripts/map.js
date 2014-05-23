$(document).ready(function() {

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(0, 0),
      zoom: 3
    };
    // var div = document.getElementById("map-canvas")
    // var map= new google.maps.Map(div, mapOptions)
    // or 
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    $.get( "pins", function( data ) { 
      data.forEach(function(element, index, array){
        addPin(element['lat'], element['lng'])
      })
    });

    google.maps.event.addListener(map, 'click', function(event) {
      //YOUR AJAX POST GOES IN HERE
      $.ajax({
        type: "POST",
        url: "pins",
        success: function(data){
          console.log(data)
        },
        dataType: "json"
      });
      alert('thankyouforhelpingme');
    });

    var addPin = function(lat, lng){
      var loc = new google.maps.LatLng(lat, lng);
			var newMarker = new google.maps.Marker({
  			position: loc,
  			map: map //second map here is taco variable
				});
			};
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});

