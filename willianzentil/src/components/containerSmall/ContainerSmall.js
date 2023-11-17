import React from 'react'
import styles from './ContainerSmall.module.css'

function ContainerSmall(props) {
  return (
    <section className={styles.containerSmall}>{props.children}</section>
  )
}

export default ContainerSmall