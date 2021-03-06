import moment from 'moment';

export const rowsSeriesWithHoles = {
  rows: [
    {
      'label': '',
      'xAxisLabel': '@timestamp per 30 sec',
      'ordered': {
        'date': true,
        'min': 1411761457636,
        'max': 1411762357636,
        'interval': 30000
      },
      'yAxisLabel': 'Count of documents',
      'series': [
        {
          'label': 'Count',
          'values': [
            {
              'x': 1411761450000,
              'y': 41
            },
            {
              'x': 1411761510000,
              'y': 22
            },
            {
              'x': 1411761540000,
              'y': 17
            },
            {
              'x': 1411761840000,
              'y': 20
            },
            {
              'x': 1411761870000,
              'y': 20
            },
            {
              'x': 1411761900000,
              'y': 21
            },
            {
              'x': 1411761930000,
              'y': 17
            },
            {
              'x': 1411761960000,
              'y': 20
            },
            {
              'x': 1411761990000,
              'y': 13
            },
            {
              'x': 1411762020000,
              'y': 14
            },
            {
              'x': 1411762050000,
              'y': 25
            },
            {
              'x': 1411762080000,
              'y': 17
            },
            {
              'x': 1411762110000,
              'y': 14
            },
            {
              'x': 1411762140000,
              'y': 22
            },
            {
              'x': 1411762170000,
              'y': 14
            },
            {
              'x': 1411762200000,
              'y': 19
            },
            {
              'x': 1411762320000,
              'y': 15
            },
            {
              'x': 1411762350000,
              'y': 4
            }
          ]
        }
      ],
      'hits': 533,
      'xAxisFormatter': function (thing) {
        return moment(thing);
      },
      'tooltipFormatter': function (d) {
        return d;
      }
    }
  ]
};
