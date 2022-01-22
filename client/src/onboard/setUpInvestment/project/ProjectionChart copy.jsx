import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ProjectionChart = ({ date, calculate, calculates, less, more }) => {
  const [series] = useState([
    {
      name: 'Less Likely',
      // data: [...less],
      data: [
        50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000,
        140000, 150000,
      ],
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
      name: 'Deposits',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ]);

  const [options] = useState({
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      style: {
        background: ['#F37336', '#E93983', '#9C0290'],
        color: ['#00ff00', '#E93983', '#9C0290'],
      },
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    labels: series.name,
    xaxis: {
      categories: [...date],
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  });

  return (
    <ReactApexChart
      options={options}
      series={series}
      type='area'
      width={1100}
      height={300}
    />
  );
};
export default ProjectionChart;
