//chart1
$(document).ready(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E8%A1%8C%E6%94%BF%E5%8C%BA?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.行政区);
                   items.push(value.fields.数量);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

       
         var chart = c3.generate({
              data: {
                  columns: dataSet,
                  type : 'bar'
              },
              axis: {
                x: {label: 'Product'},
                y: {label: '# of Items'}
              },
              bar: {
                  title: "# of Items by Product Category:",
              }
          });

    }); // end .getJSON

 }); // end button
// document ready

//map

var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,});

var map = L.map('map')
      .addLayer(mapboxTiles)
      .setView([22.287111, 114.191667], 13);


var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E5%AE%A4%E5%86%85%E6%B8%B8%E6%88%8F%E5%AE%A4%E7%BB%8F%E7%BA%AC%E5%BA%A6?api_key=keyMKBpzuSeqRV0SV";

var data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items = {};
               items["name"] = value.fields.室内游戏室;
               items["image_url"] = value.fields.img_url;
               items["latitud"] = value.fields.lat;
               items["longitud"] = value.fields.ling;
               data.push(items);
               console.log(items);
        }); // end .each
}); // end getJSON

function show_districts(){

  for (var i in data) {
      var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
      L.marker( latlng )
          .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .addTo(map);
  }

}

