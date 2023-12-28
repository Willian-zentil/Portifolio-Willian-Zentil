import React from 'react'
import fullbanner from '../../images/Home.png'
import fullbannerMob from '../../images/Entusiasta pela área de visualização de dados e pelo mundo do ecommerce.png'
import styles from './FullBanner.module.css'

function FullBanner() {
  return (
    <section className={styles.ContainerfullBanner}>
      <div className={styles.desktop}>
        <img className={styles.fullBanner} src={fullbanner} alt='Banner Home Willian Zentil' />
      </div>
      <div className={styles.mobile}>
        <img className={styles.fullBanner} src={fullbannerMob} alt='Banner Home Willian Zentil Mobile' />
      </div>
    </section>
  )
}

export default FullBanner