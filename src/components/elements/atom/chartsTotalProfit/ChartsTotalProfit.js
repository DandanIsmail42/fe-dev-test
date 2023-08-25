import React from 'react'
import ReactApexChart from 'react-apexcharts';
import styles from './index.module.css'
const ChartsTotalProfit = () => {
    const options = {
        series: [{
        name: 'Earnings',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      }, {
        name: 'Expense',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      }],
        chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
            enabled: false, 
          },
          columnWidth: '20%', 
          
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'top',
            horizontalAlign: 'right',  
            offsetY: 10,
          },
        }
      }],
      xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
          '2012 Q3', '2012 Q4'
        ],
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
      },
      grid: {
        show: false,
      },
      colors: ['#FF814A', '#0BB885']
      };
  return (
    <div className={styles.wrapper__charts__total}>
         <ReactApexChart options={options} 
            series={options.series} 
            type="bar" 
            height={250}
            width={410}
             />
    </div>
  )
}

export default ChartsTotalProfit