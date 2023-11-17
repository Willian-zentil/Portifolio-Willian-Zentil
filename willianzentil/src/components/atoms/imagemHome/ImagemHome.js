import React from 'react'
import styles from './ImagemHome.module.css'


function ImagemHome(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} className={styles.imagemHome} />
        </div>
    )
}

export default ImagemHome