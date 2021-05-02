 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Population'],
          ['1920',  1.596],
          ['1925',  1.845],
          ['1930',  1.900],
           ['1935',  1.906],
          ['1940',  1.554],
          ['1950',  1.884],
           ['1960',  2.000],
           ['1970',  2.396],
          ['1990',  2.668],
          ['2015',  1.900],
          ['2020',  1.900],
            ['2021',  1.871]
        ]);

        var options = {
          title: '1920 - 2021 Population of Latvia',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }