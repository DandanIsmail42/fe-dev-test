import React from 'react'
import ReactApexChart from 'react-apexcharts';
import styles from './index.module.css'
const ChartsOrders = () => {
  
const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false, 
      },
    },
    plotOptions: {
      bar: {
        endingShape: 'flat',
        columnWidth: '70%', 
        distributed: true, 
      },
    },
    xaxis: {
   
      labels: {
        show: false, 
      },
    },
    yaxis: {
      show: false, 
    },
    colors: ['#FF814A'], 
    series: [
      {
        name: 'Series 1',
        data: [40, 90, 20, 50], 
      },
    ],
  };
    
  return (
    <div className={styles.wrapper__orders}>
        <div>
            <h4>Orders</h4>
            <h3>183k</h3>
        </div>
        <div className={styles.wrapper__orders__charts}>
          <ReactApexChart options={options}
         series={options.series}
         type="bar" height={140} 
         width={160} />
        </div>
    </div>
  )
}

export default ChartsOrders