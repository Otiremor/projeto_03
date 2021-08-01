window.onload = function() {
  var map;

  function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(-22.963462698388888, -43.194450418022974),
      scrollWheel: false,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("mapa"), mapProp);
  }

  function addMarker(lat, long, icon, content, click) {
    var latLng = {
      "lat": lat,
      "lng": long
    };

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: icon
    });

    var infoWindow = new google.maps.InfoWindow({
      content: content,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0, 20)
    });

    if (click == true) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.open(map, marker);
      });
    } else {
      infoWindow.open(map, marker);
    }
  }

  initialize();

  var conteudo = "<p style='color:#000000;font-size:13px;padding:10px 0;border-bottom:1px solid #000000;'>Meu endereço</p>";

  addMarker(-22.963462698388888, -43.194450418022974, "", conteudo, true);
}
