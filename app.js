

	var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {
          	lat: -34.397, 
          	lng: 150.644
          	},
          zoom: 8
        });
      };


    
	var cors = 'https://cors-anywhere.herokuapp.com/'; //soy el cors inmortal
	var url = 'https://api.darksky.net/forecast/';
	var key = '9e7aa9d7caff4b048f8eb545e8665927/';
	var coords = { //latitud, longitud
		cbotado: '-32.8, -70.55920689999999',
		patagallina: '-38.0587923, -73.22877819999997',
		xwlk: '-31.7477036,-71.51308610000001',
		pen:'-34.78554, -71.043072'
	}

	