 
      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Population (Milion)'],
          ['Estonia', 1.5],
          ['Latvia', 1.9],
          ['Lithuania', 2.7],
          ['RU', 144.4],
          ['United States',328.2 ],
          ['China', 1398]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions'));

        chart.draw(data, options);
      }
    