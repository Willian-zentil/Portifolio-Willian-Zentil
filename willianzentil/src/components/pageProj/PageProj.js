import React from 'react'
import ContainerSmall from '../containerSmall/ContainerSmall'
import Header from '../header/Header'
import Background from '../atoms/backGround/Background'
import styles from './PageProj.module.css'

import seralle from '../../images/seralle.png'
import hangloose from '../../images/hangloose.png'
import acostamento from '../../images/acostamento.jpg'
import labella from '../../images/labella.png'
import tata from '../../images/tata.webp'
import santander from '../../images/santander.png'

const PROJETOS = [
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

function PageProj(props) {
    return (
        <Background>
            <Header />
            <div className={styles.container}>
                {PROJETOS.map(item => 
                props.key == item.key &&
                    <>
                        <h1 className={styles.containerImageList}>{item.title}</h1>
                        <div className={styles.containerProj}>
                            <img className={styles.ImageUnique} src={item.src} alt={item.alt} />
                            <div>
                                <p>
                                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere vel arcu cursus ornare. Morbi faucibus arcu vel nibh eleifend, eget tempus velit finibus. Vivamus       molestie eros eget dolor gravida, et vestibulum nisl condimentum. Nullam nec neque non ante semper varius. Vivamus velit sem, pharetra vitae orci a, elementum porta odio. Morbi a ipsum consectetur, porta dui at, tincidunt lorem. Vestibulum vitae turpis sollicitudin, lacinia libero quis, varius lectus. Sed ultrices erat eu risus venenatis tristique.

                                In quis diam eu tortor accumsan hendrerit. Praesent lacus dui, sollicitudin sed mi eget, dictum ornare massa. Praesent ante ex, vehicula non leo a, accumsan convallis ipsum. Nulla lorem turpis, consectetur in mollis nec, iaculis gravida lacus. Donec facilisis justo enim, vel vulputate ex tincidunt quis. Maecenas egestas ut justo non euismod. Donec vel pulvinar lectus, ac efficitur lacus. Proin porta sem tempus ipsum commodo, non feugiat nulla bibendum. Nulla facilisi. Curabitur finibus ornare erat eu laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nec augue ut nisi venenatis suscipit. Ut accumsan a lectus eget iaculis. Nullam mattis ullamcorper eros at fringilla. Mauris ac fermentum mi, eget sagittis augue. */}
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </Background>
    )
}

export default PageProj