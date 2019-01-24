import L from 'leaflet';
import * as SuperMap from '@supermap/iclient-leaflet';

L.supermap = SuperMap;

window.onload = function () {
    var url = "http://localhost:8090/iserver/services/map-world/rest/maps/World";
    var map = L.map('map', {
        crs: L.CRS.EPSG4326,
        center: [0, 0],
        maxZoom: 18,
        zoom: 1
    });

    console.log(SuperMap);
    L.supermap.tiledMapLayer(url).addTo(map);

}