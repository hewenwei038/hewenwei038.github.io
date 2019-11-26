//map
var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,});

var map = L.map('mapid')
      .addLayer(mapboxTiles)
      .setView([22.287111, 114.191667], 13);

layerGroup = L.layerGroup().addTo(map);

      // create custom icon
var xgdi = L.icon({
iconUrl: 'pic/icon.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

var jli = L.icon({
iconUrl: 'pic/icon1.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

var xji = L.icon({
iconUrl: 'pic/icon2.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

var fivepi = L.icon({
iconUrl: 'pic/icon5.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

var fourpi = L.icon({
iconUrl: 'pic/icon4.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

var threepi = L.icon({
iconUrl: 'pic/icon3.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

//香港岛
var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appGyicFYWqWwNvwL/%E9%A6%99%E6%B8%AF%E5%B3%B6?api_key=keyMKBpzuSeqRV0SV";

var data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items = {};
               items["name"] = value.fields.香港島;
               items["image_url"] = value.fields.img_url;
               items["latitud"] = value.fields.lat;
               items["longitud"] = value.fields.ling;
               items["inout"] = value.fields.室內外;
               data.push(items);
               console.log(items);
        }); // end .each
}); // end getJSON

function show_districts1(){
  for (var i in data) {
      var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
      L.marker( latlng, {icon: xgdi})
          .bindPopup('<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name)
          .addTo(layerGroup);
  }
}

//九龙
var map2_jl = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appGyicFYWqWwNvwL/%E4%B9%9D%E9%BE%8D?api_key=keyMKBpzuSeqRV0SV";

var datajl = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
        map2_jl = {};
        map2_jl["name"] = value.fields.Name;
        map2_jl["image_url"] = value.fields.img_url;
        map2_jl["latitud"] = value.fields.lat;
        map2_jl["longitud"] = value.fields.ling;
        map2_jl["inout"] = value.fields.室內外;
        datajl.push(map2_jl);
               console.log(map2_jl);
        }); // end .each
}); // end getJSON

function show_districts2(){
  for (var i in datajl) {
      var latlng = L.latLng({ lat: datajl[i].latitud, lng: datajl[i].longitud });
      L.marker( latlng, {icon: jli})
          .bindPopup('<img src="' + datajl[i].image_url+'" width = "80px"><br>'+datajl[i].name)
          .addTo(layerGroup);
  }
}

//新界
var map_xj = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appGyicFYWqWwNvwL/%E6%96%B0%E7%95%8C?api_key=keyMKBpzuSeqRV0SV";

var dataxj = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           map_xj = {};
           map_xj["name"] = value.fields.新界;
           map_xj["image_url"] = value.fields.img_url;
           map_xj["latitud"] = value.fields.lat;
           map_xj["longitud"] = value.fields.ling;
           map_xj["inout"] = value.fields.室內外;
               dataxj.push(map_xj);
               console.log(map_xj);
        }); // end .each
}); // end getJSON

function show_districts3(){
  for (var i in dataxj) {
      var latlng = L.latLng({ lat: dataxj[i].latitud, lng: dataxj[i].longitud });
      L.marker( latlng, {icon: xji})
          .bindPopup('<img src="' + dataxj[i].image_url+'" width = "80px"><br>'+dataxj[i].name)
          .addTo(layerGroup);
  }
}

//五分
var map_5 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appGyicFYWqWwNvwL/%E4%BA%94%E5%88%86?api_key=keyMKBpzuSeqRV0SV";

var datawf = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
        map_5 = {};
        map_5["name"] = value.fields.五分;
        map_5["latitud"] = value.fields.lat;
        map_5["longitud"] = value.fields.ling;
        map_5["inout"] = value.fields.室內外;
               datawf.push(map_5);
               console.log(map_5);
        }); // end .each
}); // end getJSON

function show_districts4(){
  for (var i in datawf) {
      var latlng = L.latLng({ lat: datawf[i].latitud, lng: datawf[i].longitud });
      L.marker( latlng, {icon: fivepi})
          .bindPopup( '<a href="' + datawf[i].url + '" target="_blank">'+ datawf[i].name + datawf[i].inout +'</a>' )
          .addTo(layerGroup);
  }
}

//四分
var map_4 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appGyicFYWqWwNvwL/%E5%9B%9B%E5%88%86?api_key=keyMKBpzuSeqRV0SV";

var datasf = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
        map_4 = {};
        map_4["name"] = value.fields.四分;
        map_4["latitud"] = value.fields.lat;
        map_4["longitud"] = value.fields.ling;
        map_4["inout"] = value.fields.室內外;
               datasf.push(map_4);
               console.log(map_4);
        }); // end .each
}); // end getJSON

function show_districts5(){
  for (var i in datasf) {
      var latlng = L.latLng({ lat: datasf[i].latitud, lng: datasf[i].longitud });
      L.marker( latlng, {icon: fourpi})
          .bindPopup( '<a href="' + datasf[i].url + '" target="_blank">' +datasf[i].name + datasf[i].inout +'</a>' )
          .addTo(layerGroup);
  }
}

//三分
var map_3 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appGyicFYWqWwNvwL/%E4%B8%89%E5%88%86?api_key=keyMKBpzuSeqRV0SV";

var datacf = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
        map_3 = {};
        map_3["name"] = value.fields.三分;
        map_3["latitud"] = value.fields.lat;
        map_3["longitud"] = value.fields.ling;
        map_3["inout"] = value.fields.室內外;
               datacf.push(map_3);
               console.log(map_3);
        }); // end .each
}); // end getJSON

function show_districts6(){
  for (var i in datacf) {
      var latlng = L.latLng({ lat: datacf[i].latitud, lng: datacf[i].longitud });
      L.marker( latlng, {icon: threepi})
          .bindPopup( '<a href="' + datacf[i].url + '" target="_blank">' +datacf[i].name + datacf[i].inout + '</a>' )
          .addTo(layerGroup);
  }
}

