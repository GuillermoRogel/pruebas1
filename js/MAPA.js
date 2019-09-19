(  function inicializar_mapa() {
    var divMapa = document.getElementById('mapa_div');
    // obtener ubicaion actual
    //navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
    //function fn_mal(){alert("No se pudo obtener la direccion actual")}
    //function fn_ok(rta ){
        var lat = -0.316;//rta.coords.latitude;
        var lon = -78.453;//rta.coords.longitude;

        var gLatLon = new  google.maps.LatLng (lat, lon);
///// p1
         var objConfig = {
             zoom   :17,
             center: gLatLon
         }
         var gMapa = new google.maps.Map( divMapa , objConfig );


var contenido1 = '<div style="width:100px height:100"><p><img src="img/poste1.jpg" alt="Resultado de imagen para FOTO DE POSTE" width="222" height="165" /></p><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 50%;">CODIGO</td><td style="width: 50%;">as45-456-ffa</td></tr><tr><td style="width: 50%;">Ubicacion</td><td style="width: 50%;">Pichincha</td></tr><tr><td style="width: 50%;">Detalle</td><td style="width: 50%;"><p>2 Tuercas</p><p>3 Aislantes</p><p>4 Pernos</p></td></tr><tr><td style="width: 50%;">Da&ntilde;o</td><td style="width: 50%;"><p>Aislante roto</p><p>Turca oxidada</p></td></tr></tbody></table></div>';
var contenido2 ='<div style="width:400px height:400"><p><img src="img/poste3.jpg" alt="Resultado de imagen para FOTO DE POSTE" width="222" height="165" /></p><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 50%;">CODIGO</td><td style="width: 50%;">as45-456-ffa</td></tr><tr><td style="width: 50%;">Ubicacion</td><td style="width: 50%;">Pichincha</td></tr><tr><td style="width: 50%;">Detalle</td><td style="width: 50%;"><p>2 Tuercas</p><p>3 Aislantes</p><p>4 Pernos</p></td></tr><tr><td style="width: 50%;">Da&ntilde;o</td><td style="width: 50%;"><p>Aislante roto</p><p>Turca oxidada</p></td></tr></tbody></table></div>';
var contenido3 ='<div style="width:400px height:400"><p><img src="img/poste2.jpg" alt="Resultado de imagen para FOTO DE POSTE" width="222" height="165" /></p><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 50%;">CODIGO</td><td style="width: 50%;">4s45-456-55a</td></tr><tr><td style="width: 50%;">Ubicacion</td><td style="width: 50%;">Pichincha</td></tr><tr><td style="width: 50%;">Detalle</td><td style="width: 50%;"><p>2 Tuercas</p><p>3 Aislantes</p><p>4 Pernos</p></td></tr><tr><td style="width: 50%;">Da&ntilde;o</td><td style="width: 50%;"><p></p><p></p></td></tr></tbody></table></div>';
var contenido4 ='<div style="width:400px height:400"><p><img src="img/poste1.jpg" alt="Resultado de imagen para FOTO DE POSTE" width="222" height="165" /></p><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 50%;">CODIGO</td><td style="width: 50%;">as45-456-ffa</td></tr><tr><td style="width: 50%;">Ubicacion</td><td style="width: 50%;">Pichincha</td></tr><tr><td style="width: 50%;">Detalle</td><td style="width: 50%;"><p>2 Tuercas</p><p>3 Aislantes</p><p>4 Pernos</p></td></tr><tr><td style="width: 50%;">Da&ntilde;o</td><td style="width: 50%;"><p>Aislante roto</p><p>Turca oxidada</p></td></tr></tbody></table></div>'     ;
ponerPuntosMapa(gMapa , "p8", -0.316 , -78.451, contenido1 , 'img/88332.png');
ponerPuntosMapa(gMapa , "p8", -0.3164 , -78.452, contenido2 , 'img/88331.png');
ponerPuntosMapa(gMapa , "p8", -0.317 , -78.453, contenido3 , 'img/88332.png');
ponerPuntosMapa(gMapa , "p8", -0.318 , -78.454, contenido4 , 'img/88331.png')

            
function ponerPuntosMapa( vMapa , vTitle , vLat, vLon , vContent , vIcon  ){
  var gLatLon3 = new  google.maps.LatLng (vLat, vLon);

var objConfigMaker3 = {
  position:gLatLon3,
  map: vMapa,
  title: vTitle
}

var gMarker3 = new google.maps.Marker(objConfigMaker3);

gMarker3.setIcon(vIcon)

var objHTML = {
     content: vContent
                }
var gIW3 = new google.maps.InfoWindow(objHTML);
google.maps.event.addListener (gMarker3, 'click', function(){gIW3.open(vMapa,gMarker3)})


              }

})(jQuery); // End of use strict
