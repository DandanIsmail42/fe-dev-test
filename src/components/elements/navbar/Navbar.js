import React from 'react'
import styles from './index.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar__content}>
           <div className={styles.navbar__content__wrapper}>
           <img className={styles.navbar__content__image} src='/images/jb.jpg' alt='profile' />
            <div className={styles.navbar__content__icon}></div>
           </div>
           <div>
            <h4 style={{color: 'white', fontWeight: '200'}}>Hello, Justin</h4>
           </div>
        </div>
    </nav>
  )
}

export default Navbar