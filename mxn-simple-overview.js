var	mapstraction;

function initialize() {
	mapstraction = new mxn.Mapstraction('map','ovi');

    // create a lat/lon object
	var myPoint = new mxn.LatLonPoint(37.404196,-122.008194);

    // display the map centered on a latitude and longitude (Google zoom levels)
    mapstraction.setCenterAndZoom(myPoint, 9);

    mapstraction.addControls({
    	pan: true, 
		zoom: 'small',
		map_type: true 
	});

	// create a marker positioned at a lat/lon 
	my_marker = new mxn.Marker(myPoint);

	my_marker.setIcon('http://mapstraction.com/icon.gif');

	mapstraction.addMarker( new mxn.Marker( new mxn.LatLonPoint(37.75,-122.44)));

	// add a label to the marker
	my_marker.setLabel("<blink>Hello!</blink>");
	var text = "<b>Be Happy!</b>";

	// add info bubble to the marker
	my_marker.setInfoBubble(text);

	// display marker 
	mapstraction.addMarker(my_marker);
	var foo = function() { mapstraction.removeMarker(my_marker); };		
}
