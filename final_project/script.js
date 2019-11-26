//室外chart
$(document).ready(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appvI1Mn4FYilUN9C/%E5%AE%A4%E5%A4%96%E8%A9%95%E5%88%86%E8%A1%A8%E5%8C%AF%E7%B8%BD?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.推薦度);
                   items.push(value.fields.數量);
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
                x: {label: '推薦度'},
                y: {label: '數量'}
              },
              bar: {
                  title: "# of Items by Product Category:",
              },
              bindto:'#chart'
          });

    }); // end .getJSON

 }); // end button
// document ready


//室內chart1
$(document).ready(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appvI1Mn4FYilUN9C/%E5%AE%A4%E5%85%A7%E8%A9%95%E5%88%86%E8%A1%A8%E5%8C%AF%E7%B8%BD?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.推薦度);
                   items.push(value.fields.數量);
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
                x: {label: '推薦度'},
                y: {label: '數量'}
              },
              bar: {
                  title: "# of Items by Product Category:",
              
              },
              bindto:'#chart1'
          });

    }); // end .getJSON

 }); // end button
// document ready


