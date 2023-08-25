import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import styles from './index.module.css'
import {IoIosArrowDown} from 'react-icons/io'


const ChartsEarnings = () => {
    const [state, setState] = useState({
        series: [80, 55],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          
          plotOptions: {
            radialBar: {
              
              dataLabels: {
                name: {
                  fontSize: '15px',
                },
                value: {
                  fontSize: '15px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    return 249
                  }
                }
              }
            }
          },
          legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            markers: {
              size: 10,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: ['#0BB885', '#FF814A'],
            },
          },
          labels: ['Total Sales', 'Total Orders'],
          colors: ['#0BB885', '#FF814A']
        }
      })
  return (
    <div className={styles.wrapper__earnings}>
      <div className={styles.wrapper__text__dropdown}>
        <h5>Earnings</h5>
      <div className={styles.dropdown}>
      <a className={styles.dropdown__button}>This Week <IoIosArrowDown /></a>
      <div className={styles.dropdown__content}>
        <a href="#">Last week</a>
        <a href="#">2 weeks ago</a>
        <a href="#">Last Month</a>
      </div>
    </div>
      </div>
         <ReactApexChart options={state.options} 
        series={state.series} 
        type="radialBar" 
        height={200}
        width={200}
         />
    </div>
  )
}

export default ChartsEarnings