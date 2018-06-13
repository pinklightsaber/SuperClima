	function initMap() {
		var hola = new google.maps.LatLng(-34.397,150.644);
		var cbotado = new google.maps.LatLng(-32.8,-70.55920689999999);
		var patagallina = new google.maps.LatLng(-38.0587923, -73.22877819999997);
		var xwlk = new google.maps.LatLng(-31.7477036,-71.51308610000001);
		var pen = new google.maps.LatLng(-34.78554,-71.043072);

		var map;
	        map = new google.maps.Map(document.getElementById('map'), {
	          center: hola,
	          zoom: 8
	        });
	     


    
	var cors = 'https://cors-anywhere.herokuapp.com/'; //soy el cors inmortal
	var url = 'https://api.darksky.net/forecast/';
	var key = '9e7aa9d7caff4b048f8eb545e8665927/';
	

	

	$('#select_lugares').on('change', function(){
		if ($(this).val()=="cbotado"){
			map.setCenter(cbotado);
		} 
		if ($(this).val()=="pen") { 
			map.setCenter(pen);
		}
		if ($(this).val()=="patagallina") { 
			map.setCenter(patagallina);
		}
		if ($(this).val()=="xwlk") { 
			map.setCenter(xwlk);
		}
	});
	 };		
