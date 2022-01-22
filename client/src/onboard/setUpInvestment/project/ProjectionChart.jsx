import React, { useState } from 'react';

// PACKAGES
// import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';

const ProjectionChart = ({ date }) => {
  const [series] = useState([
    {
      name: 'Less Likely',
      // data: [...less],
      data: [
        60000, 160000, 170000, 180000, 190000, 200000, 210000, 220000, 230000,
        240000, 250000,
      ],
      // data: [
      //   1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
      // ],
    },
    {
      name: 'More Likely',
      // data: [...more],
      data: [
        60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000,
        150000, 160000,
      ],
    },
    {
      name: 'Less Likely',
      // data: [...less],
      data: [
        20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000,
        120000,
      ],
    },
    {
      name: 'Deposits',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ]);

  // console.log(date);

  const [options] = useState({
    chart: {
      type: 'area',
      height: 1350,
      // stacked: true,
      zoom: {
        enabled: false,
      },
       toolbar: {
            show: false
          }
    },
    colors: ['#D2E8FB', '#005590', '#D2E8FB', '#2A8642'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    fill:{
        colors:undefined,
        type:'solid'
    },
    // labels: series.name,
    xaxis: {
      // tickPlacement: 'on',
      categories: [...date],
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (val) => {
          return `${val}K`;
        },
      },
    },
    legend: {
      horizontalAlign: 'left',
    },
  });

  return (
    <Chart
      options={options}
      series={series}
      type='area'
      width='100%'
      height={300}
    />
  );
};
export default ProjectionChart;
