import React, { useState } from 'react'
import styles from './ImagensProj.module.css'

import grow from '../../images/logo-grow.png'
import seralle from '../../images/seralle.png'
import hangloose from '../../images/hangloose.png'
import acostamento from '../../images/acostamento.jpg'
import labella from '../../images/labella.png'
import tata from '../../images/tata.webp'
import santander from '../../images/santander.png'

import Projeto from '../pageProj/PageProj'


const listImages = [
    {
        key: 5,
        image: acostamento,
        alt: "logo loja acostamento",
        title: "LOJA ACOSTAMENTO",
        text: "Desenvolvimento de páginas de catálogo, página de produto entre outras para o e-commerce da seralle "
    },
    {
        key: 3,
        image: labella,
        alt: "logo loja labella",
        title: "LOJA LABELLA LAMAFIA",
        text: "Criação da página PlayBoy, melhorias na usabilidade da loja, programação"
    },
    {
        key: 6,
        image: santander,
        alt: "logo santander",
        title: "SANTANDER FINANCIAMENTO",
        text: "Parto do time de desenvolvimento da aplicação web santander financiamento, programei no front-end da aplicação."
    },
    {
        key: 4,
        image: tata,
        alt: "logo tatazentilbeauty",
        title: "TATAZENTILbEAUTY",
        text: "Criação do site institucional para divulgação de serviçõs no setor de beleza"
    },
    {
        key: 1,
        image: seralle,
        alt: "logo loja seralle",
        title: "LOJA SERALLE",
        text: "Prestação de serviço para melhorias da loja, Programação"
    },
    {
        key: 2,
        image: hangloose,
        alt: "logo loja hangloose",
        title: "LOJA HANGLOOSE",
        text: "Repaginação do site atual, desenvolvimento pensando na usabilidade do usuário, criação e melhorias de componentes."
    },
]

function ImagensProj() {

    const [imgkey, setIOmgKey] = useState(0)

    const handlerKey = (param) => {
        localStorage.setItem("mykey",param);
        window.location = '/Projeto'
    }




    return (
        <div className={styles.containerImageList}>
            <h3>Confira Alguns dos projetos que participei!</h3>
            <div>
                {listImages.map(item =>
                    <a className={styles.blockImage}
                        onClick={() => handlerKey(item.key)}
                        onMouseOver={() => setIOmgKey(item.key)}
                        onMouseOut={() => setIOmgKey(0)} key={item.key}>
                        <img className={styles.imageList} src={item.image} alt={item.alt} />
                        {/* {imgkey == item.key && <div className={styles.imageListText} key={item.key}>
                            <em>{item.title}</em>
                            <p>{item.text}</p>
                        </div>
                        } */}
                    </a>
                )}
            </div>
        </div>
    )
}

export default ImagensProj