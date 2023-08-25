import React from 'react'
import styles from './index.module.css'
import {AiOutlineArrowUp} from 'react-icons/ai'


const Stepper = () => {
  return (
    <div className={styles.wrapper__stepper}>
        <h3>Activity Overview</h3>
        <small><AiOutlineArrowUp className={styles.icon}/> 16% This Month</small>
        <div className={styles.timeline}>
            <div className={styles.container}>
            <div className={styles.rounded}></div>
                <div className={styles.text__box}>
                    <h4>Nick mark <span>Mentioned </span>Sara Smith <span>in new post</span></h4>
                    <small>11 Jul 8:10 PM</small>
                </div>
            </div>
            <div className={styles.container}>
            <div className={styles.rounded}></div>
                <div className={styles.text__box}>
                    <h4>Nick mark <span>Mentioned </span>Sara Smith <span>in new post</span></h4>
                    <small>11 Jul 8:10 PM</small>
                </div>
            </div>
            <div className={styles.container}>
            <div className={styles.rounded}></div>
                <div className={styles.text__box}>
                    <h4>Nick mark <span>Mentioned </span>Sara Smith <span>in new post</span></h4>
                    <small>11 Jul 8:10 PM</small>
                </div>
            </div>
            <div className={styles.container}>
            <div className={styles.rounded}></div>
                <div className={styles.text__box}>
                    <h4>Nick mark <span>Mentioned </span>Sara Smith <span>in new post</span></h4>
                    <small>11 Jul 8:10 PM</small>
                </div>
            </div>
            <div className={styles.container}>
            <div className={styles.rounded}></div>
                <div className={styles.text__box}>
                    <h4>Nick mark <span>Mentioned </span>Sara Smith <span>in new post</span></h4>
                    <small>11 Jul 8:10 PM</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stepper