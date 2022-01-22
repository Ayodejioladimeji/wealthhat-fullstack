import React, { useState } from 'react';
import Chart from 'react-apexcharts';
// import ReactApexChart from 'react-apexcharts';

const AllocateChart = () => {
  const [series] = useState([60, 25, 15]);

  const [options] = useState({
    chart: {
      type: 'donut',
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: ['Developed Market Equities', 'Emerging Market Equities', 'Cash'],

    Labels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return `${val}%`;
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
    colors: ['#2A8642', '#53BA6E', '#DFFFE7'],
    responsive: [
      {
        // breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
        },
      },
    ],
  });

  return (
    <Chart
      options={options}
      series={series}
      type='donut'
      width='100%'
      height='100%'
    />
  );
};
export default AllocateChart;
