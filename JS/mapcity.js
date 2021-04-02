google.charts.load('current', {
       'packages': ['geochart'],
       // Note: you will need to get a mapsApiKey for your project.
       // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['City',   'Population', 'Area KM2'],
          ['Riga',      742.572,    304],
         ['Daugavpils ',    111.564,    72.48],
        ['Liepaja ',  85.132,    60.37],
     ['Jelgava  ',    61.791,    60.32],
        ['Jurmala ', 54.088 ,     100],
         ['Ventspils ',    42.644,     55.4],
  ['Rezekne ',  38.340,     17.48],
      ['Jekabpils',  27.078,     23 ],
         ['Valmiera ',  26.963,      19.35],
     ['Ogre',    26.760 ,      13.58],
          ['Tukums',  18.348,      13.35 ]
      ]);

      var options = {
        region: 'LV',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('mapCity'));
      chart.draw(data, options);
    };
//<div id="mapCity" style="width: 900px; height: 500px;">
    ///<script type='text/javascript' src='https://www.gstatic.com/charts/loader.js'></script> 
//<script type="text/javascript" src="JS/mapcity.js"></script>
   // </div>