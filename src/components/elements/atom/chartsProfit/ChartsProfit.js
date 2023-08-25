import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import styles from './index.module.css'


const ChartsProfit = () => {
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
              show: false, // Menyembunyikan tanda sumbu x
            },
            axisBorder: {
              show: false, // Menyembunyikan garis sumbu x
            },
            labels: {
              show: false, // Menyembunyikan label sumbu x
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
    <div className={styles.wrapper__profit}>
        <div>
            <h4>Profit</h4>
            <h3>8,24k</h3>
        </div>
        <div className={styles.wrapper__profit__charts}>
            <ReactApexChart options={state.options} 
            series={state.series} 
            type="line" 
            height={170} 
            width={170}/>
        </div>
         
    </div>
  )
}

export default ChartsProfit