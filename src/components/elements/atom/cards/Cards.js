import React from 'react'
import styles from './index.module.css'
import {SiMoneygram} from 'react-icons/si'
import {AiFillTrophy, AiFillCalendar} from 'react-icons/ai'
import {GiRoundKnob} from 'react-icons/gi'
import {MdPayment} from 'react-icons/md'


const Cards = () => {
  return (
    <section className={styles.wrapper__card}>
    <div className={styles.wrapper__card__cost}>
        <SiMoneygram style={{fontSize: '60px'}}/>
        <div style={{marginLeft: '10px'}}>
            <h4 style={{marginBottom: '-10px'}}>Total Cost</h4>
            <p>$ 31.836</p>
        </div>
    </div>
    <div className={styles.wrapper__card__sales}>
    <AiFillTrophy style={{fontSize: '40px'}}/>
        <div style={{marginLeft: '10px'}}>
            <h4 style={{marginBottom: '-10px', color: 'white'}}>Total Sales</h4>
            <p style={{color: 'grey'}}>$ 66,053</p>
        </div>
    </div>
    <div className={styles.wrapper__card__week}>
    <AiFillCalendar style={{fontSize: '40px'}}/>
        <div style={{marginLeft: '10px'}}>
            <h4 style={{marginBottom: '-10px', color: 'white'}}>This Week</h4>
            <p style={{color: 'grey'}}>$ 65,000,00</p>
        </div>
    </div>
    <div className={styles.wrapper__card__revenue}>
    <GiRoundKnob style={{fontSize: '40px'}}/>
        <div style={{marginLeft: '10px'}}>
            <h4 style={{marginBottom: '-10px', color: 'white'}}>Revenue</h4>
            <p style={{color: 'grey'}}>$ 63,000k</p>
        </div>
    </div>
    <div className={styles.wrapper__card__payment}>
    <MdPayment style={{fontSize: '40px'}}/>
        <div style={{marginLeft: '10px'}}>
            <h4 style={{marginBottom: '-10px', color: 'white'}}>$ 1250</h4>
            <p style={{color: 'grey'}}>Last Payment</p>
        </div>
    </div>
</section>
  )
}

export default Cards