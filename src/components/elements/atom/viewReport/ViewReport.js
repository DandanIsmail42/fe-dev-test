import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import styles from './index.module.css'
import {IoIosArrowDown} from 'react-icons/io'



const ViewReport = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: 'basic-line',
            toolbar: {
              show: false, 
            },
          },
          xaxis: {
            axisTicks: {
              show: false, 
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false, 
            },
          },
          colors: ['#0BB885'],
          grid: {
            show: true,
            borderColor: '#0A1826',
            strokeDashArray: 7, 
          },
            line: {
              dataLabels: {
                enabled: false,
              },
            },
        },
        series: [
          {
            name: 'Series 1',
            data: [30, 40, 25, 50, 49, 21, 70, 51, 42, 60, 90, 95]
          }
        ]
      })
  return (
    <div className={styles.wrapper__view}>
        <button className={styles.btn__year}>2023 <IoIosArrowDown /></button>
        <h3>8,24k</h3>

    <div className={styles.wrapper__view__charts}>
        <ReactApexChart options={state.options} 
        series={state.series} 
        type="line" 
        height={120} 
        width={170}/>
    </div>
     <button className={styles.btn__view}>View Report</button>
</div>
  )
}

export default ViewReport