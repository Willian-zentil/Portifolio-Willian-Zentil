import React from 'react'
import styles from './ContainerLarge.module.css'

function ContainerLarge(props) {
  return (
    <section className={styles.containerLarge}>{props.children}</section>
  )
}

export default ContainerLarge