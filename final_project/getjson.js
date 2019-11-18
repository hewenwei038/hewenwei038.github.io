//星級推薦評分室外
$("#rec1").click(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E5%AE%A4%E5%A4%96%E8%A9%95%E5%88%86%E8%A1%A8?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.室外遊樂場);
                   items.push(value.fields.行政區);
                   items.push(value.fields.亮點數);
                   items.push(value.fields.設施種類數);
                   items.push(value.fields.可到達交通種類數);
                   items.push(value.fields.網絡評價);
                   items.push(value.fields.推薦度);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         $('#table1').DataTable( {
             data: dataSet,
             retrieve: true,
             columns: [
                 { title: "室外遊樂場",
                   defaultContent:""},
                 { title: "行政區",
                   defaultContent:""},
                 { title: "亮點數",
                   defaultContent:"" },
                 { title: "設施種類數",
                   defaultContent:""},
                 { title: "可到達交通種類數",
                     defaultContent:""},
                 { title: "網絡評價",
                   defaultContent:""},
                 { title: "推薦度",
                   defaultContent:""},
             ]
         } );
    }); // end .getJSON
 }); // end button


 //星級推薦評分室內

 $("#rec2").click(function(){
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appzaLFMIfIdCLiyb/%E5%AE%A4%E5%85%A7%E8%A9%95%E5%88%86%E8%A1%A8?api_key=keyMKBpzuSeqRV0SV";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.室內遊戲室);
                   items.push(value.fields.行政區);
                   items.push(value.fields.面積);
                   items.push(value.fields.可容納人數);
                   items.push(value.fields.開放時長);
                   items.push(value.fields.評分);
                   items.push(value.fields.推薦度);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         $('#table1').DataTable( {
             data: dataSet,
             retrieve: true,
             columns: [
                 { title: "室內遊戲室",
                   defaultContent:""},
                 { title: "行政區",
                   defaultContent:"" },
                 { title: "面積m^2",
                   defaultContent:""},
                 { title: "可容納人數",
                     defaultContent:""},
                 { title: "開放時長（小時）",
                   defaultContent:""},
                 { title: "評分",
                   defaultContent:""},
                 { title: "推薦度",
                   defaultContent:""},
             ]
         } );
    }); // end .getJSON
 }); // end button