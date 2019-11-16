//chart
$(document).ready(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E5%AE%A4%E5%A4%96%E6%B8%AF%E4%B9%9D%E6%96%B0%E7%95%8C?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.室外港九新界);
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
                x: {label: '室外遊樂場'},
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


//chart1
$(document).ready(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E5%AE%A4%E5%85%A7%E6%B8%AF%E4%B9%9D%E6%96%B0%E7%95%8C?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.港九新界);
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
                x: {label: '室內遊戲室'},
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