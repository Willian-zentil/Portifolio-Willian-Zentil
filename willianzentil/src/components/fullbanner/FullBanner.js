import React from 'react'
import fullbanner from '../../images/Home.png'
import styles from './FullBanner.module.css'

function FullBanner() {
  return (
    <section className={styles.ContainerfullBanner}>
        <img className={styles.fullBanner} src={fullbanner} alt='Banner Home Willian Zentil' />
    </section>
  )
}

export default FullBanner