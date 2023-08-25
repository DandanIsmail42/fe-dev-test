import React from 'react'
import styles from './index.module.css'
import {GoHomeFill} from 'react-icons/go'
import {GiRoundKnob} from 'react-icons/gi'
import {RiNotification2Fill, RiLogoutBoxRFill} from 'react-icons/ri'
import {AiTwotoneSetting} from 'react-icons/ai'
import {PiIntersectSquareLight} from 'react-icons/pi'
import Navbar from '../elements/navbar/Navbar'
import Home from '../elements/home/Home'


const Layout = () => {
  return (
    <div>
        <main className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebar__logo}>
            <p> <PiIntersectSquareLight style={{fontSize: '30px', color: '#FF814A'}}/> Inter-act</p>
            </div>
            <div className={styles.sidebar__list}>
            <ul>
                <li><GoHomeFill style={{color : '#0BB885', marginRight: '3px', marginLeft: '-20px'}}/> Home</li>
                <li><GiRoundKnob style={{color : '#0BB885', marginRight: '3px', marginLeft: '-20px'}}/> Reports</li>
                <li><RiNotification2Fill style={{color : '#0BB885', marginRight: '3px', marginLeft: '-20px'}}/> Notifications</li>
                <li><AiTwotoneSetting style={{color : '#0BB885', marginRight: '3px', marginLeft: '-20px'}}/> Settings</li>
                <li><RiLogoutBoxRFill style={{color : '#0BB885', marginRight: '3px', marginLeft: '-20px'}}/> Logout</li>
            </ul>
            </div>
            
          </aside>
          <section className={styles.content}>
            <Navbar />
            <section className={styles.content__home}>
                 <Home />
            </section>
          </section>
        </main>
    </div>
  )
}

export default Layout