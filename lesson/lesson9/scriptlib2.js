

     $(document).ready(function(){
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Roll-up?api_key=keycj6dRwXwYLEjiv";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.Name);
                     items.push(value.fields.total_items_by_category);
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
