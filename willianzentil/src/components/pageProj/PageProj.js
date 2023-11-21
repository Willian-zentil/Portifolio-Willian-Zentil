import React from 'react'
import Header from '../header/Header'
import Background from '../atoms/backGround/Background'
import styles from './PageProj.module.css'

import seralle from '../../images/seralleSite.png'
import hangloose from '../../images/hangloose.png'
import acostamento from '../../images/acostamento.jpg'
import labella from '../../images/labellaSite.png'
import tata from '../../images/tata-site.png'
import santander from '../../images/santanderSite.png'

const PROJETOS = [
    {
        key: 5,
        image: acostamento,
        alt: "logo loja acostamento",
        title: "LOJA ACOSTAMENTO",
        text: "Desenvolvimento de páginas de catálogo, página de produto entre outras para o e-commerce da seralle, ",
        link: 'https://www.santander.com.br/hotsite/santanderfinanciamentos/'
    },
    {
        key: 3,
        image: labella,
        alt: "logo loja labella",
        title: "LOJA LABELLA LAMAFIA",
        text: "Durante uma das empresas que passei fiquei encarregado da crianção da página da parceria entre a loja Labella Mafia com a PlayBoy. A plataforma utilizada vtex io para codificação, html css e javascript.\n Álem da página fui responsavel pela estilização de unimeros componentes dentro do site Labella",
        link: 'https://www.santander.com.br/hotsite/santanderfinanciamentos/'
    },
    {
        key: 6,
        image: santander,
        alt: "logo santander",
        title: "SANTANDER FINANCIAMENTO",
        text: "Santander Financiamento foi um dos maiores projetos que participei, e também um dos que tenho maior orgulho, nele participei do time de front-end codificando a parte visual do site, ajustando erros e melhorando a usabilidades na navegação do cliente",
        link: 'https://www.santander.com.br/hotsite/santanderfinanciamentos/'
    },
    {
        key: 4,
        image: tata,
        alt: "logo tatazentilbeauty",
        title: "TATAZENTILBEAUTY",
        text: "Tenho muito orgulho deste projeto por ter participado e feito do zero, Ele foi criado para a lash designer Thais Zentil aumentar sua relevancia na web e divulgar seu trabalho, aumentando assim o número de leads para seu negócio. O projeto foi feito utilizando a linguagem de prorgamação React, tirando vantadem do seu sistema de componentização, no modelo one page podemos visualizar todo conteudo facilmente com o sistema de arcoragem, sendo levado aos conteúdos através do menu ou footer ",
        link: 'https://tatazentilbeauty.com.br/'
    },
    {
        key: 1,
        image: seralle,
        alt: "logo loja seralle",
        title: "LOJA SERALLE",
        text: "Prestação de serviço para melhorias da loja, Programação",
        link: 'https://www.seralle.com.br/'
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
                1 === item.key &&
                    <>
                        <h1 className={styles.containerImageList}>{item.title}</h1>
                        <div className={styles.containerProj}>
                            <a href={item.link} target='_blank'><img className={styles.ImageUnique} src={item.image} alt={item.alt} /></a>
                            <div>
                                <p>{item.text}</p>
                                <a href={item.link} target='_blank'>Confira o Projeto</a>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </Background>
    )
}

export default PageProj