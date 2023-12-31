import React from 'react'
import styles from './Background.module.css'

function Background(props) {
    return (
        <div className={styles.background}>{props.children}</div>
    )
}

export default Background