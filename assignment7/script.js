//chart1
$(document).ready(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E8%A1%8C%E6%94%BF%E5%8C%BA?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
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

//chart2
$(document).ready(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E8%A1%8C%E6%94%BF%E5%8C%BA?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.数量);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

       
         var chart= c3.generate({
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

 });