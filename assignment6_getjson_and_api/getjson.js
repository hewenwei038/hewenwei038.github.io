$(document).ready(function(){

        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E5%AE%A4%E5%86%85%E6%B8%B8%E4%B9%90%E5%AE%A4%E5%B1%95%E7%A4%BA%E7%89%88?api_key=keyMKBpzuSeqRV0SV";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.室内游戏室);
                       items.push(value.fields.行政区);
                       items.push(value.fields.地址);
                       items.push(value.fields.游戏主题);
                       items.push(value.fields.面积);
                       items.push(value.fields.可容纳人数);
                       items.push(value.fields.电话);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "室内游乐室",
                       defaultContent:""},
                     { title: "行政区",
                       defaultContent:"" },
                     { title: "地址",
                       defaultContent:""},
                     { title: "游戏主题",
                         defaultContent:""},
                     { title: "面积",
                       defaultContent:""},
                     { title: "可容纳人数",
                       defaultContent:""},
                     { title: "电话",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

