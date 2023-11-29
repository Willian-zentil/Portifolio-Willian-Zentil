import React from 'react'
import Header from '../header/Header'
import Background from '../atoms/backGround/Background'
import styles from './PageProj.module.css'

import seralle from '../../images/seralleSite.png'
import hangloose from '../../images/hanglooseSite.png'
import acostamento from '../../images/acostamentoSite.png'
import labella from '../../images/labellaSite.png'
import tata from '../../images/tata-site.png'
import santander from '../../images/santanderSite.png'

import seralleMob from '../../images/seralleMob.png'
import hanglooseMob from '../../images/hangMob.png'
import acostamentoMob from '../../images/acostamentoMob.png'
import labellaMob from '../../images/labellaMob.png'
import tataMob from '../../images/tataMob.png'
import santanderMob from '../../images/santanderMob.png'


const PROJETOS = [
    {
        key: 5,
        image: acostamento,
        imageMob: acostamentoMob,
        alt: "logo loja acostamento",
        title: "LOJA ACOSTAMENTO",
        text: "Acostamento foi outras loja de peso que atendi durante grande tempo que passei em uma empresa, fornecendo apoio técnico para as maiorias páginas da loja como checkout (área de pagamento), carrinho de compra, promoções, disposição de produtos, crianção de novas páginas como black friday.",
        link: 'https://www.acostamento.com.br/'
    },
    {
        key: 3,
        image: labella,
        imageMob: labellaMob,
        alt: "logo loja labella",
        title: "LOJA LABELLA LAMAFIA",
        text: "Durante uma das empresas que passei fiquei encarregado da crianção da página da parceria entre a loja Labella Mafia com a PlayBoy. A plataforma utilizada vtex io para codificação, html css e javascript.\n Álem da página fui responsavel pela estilização de inúmeros componentes dentro do site Labella",
        link: 'https://www.labellamafia.com.br/produtos-playboy'
    },
    {
        key: 6,
        image: santander,
        imageMob: santanderMob,
        alt: "logo santander",
        title: "SANTANDER FINANCIAMENTO",
        text: "Santander Financiamento foi um dos maiores projetos que participei, e também um dos que tenho maior orgulho, nele participei do time de front-end codificando a parte visual do site, ajustando erros e melhorando a usabilidades na navegação do cliente",
        link: 'https://www.santander.com.br/hotsite/santanderfinanciamentos/'
    },
    {
        key: 4,
        image: tata,
        imageMob: tataMob,
        alt: "logo tatazentilbeauty",
        title: "TATAZENTILBEAUTY",
        text: "Tenho muito orgulho deste projeto por ter participado e feito do zero, Ele foi criado para a lash designer Thais Zentil aumentar sua relevancia na web e divulgar seu trabalho, aumentando assim o número de leads para seu negócio. O projeto foi feito utilizando a linguagem de prorgamação React, tirando vantadem do seu sistema de componentização, no modelo one page podemos visualizar todo conteudo facilmente com o sistema de arcoragem, sendo levado aos conteúdos através do menu ou footer ",
        link: 'https://tatazentilbeauty.com.br/'
    },
    {
        key: 1,
        image: seralle,
        imageMob: seralleMob,
        alt: "logo loja seralle",
        title: "LOJA SERALLE",
        text: "Ecommerce na área de calçados com inumeras lojas pelo Brasil, fiquei responsavel pela loja e durante esse tempo fiquei atuei na melhoria de de componentes como carrinho de compras, página de produto, homepage da loja entre outros. \n A experiência de trabalhar com uma plataforma nova na epoca foi bem desafiador, mas com a ajuda de colegas e estudando no tempo livre consegui entregar um bom resultado final.",
        link: 'https://www.seralle.com.br/'
    },
    {
        key: 2,
        image: hangloose,
        imageMob: hanglooseMob,
        alt: "logo loja hangloose",
        title: "LOJA HANGLOOSE",
        text: "Hangloose é uma loja do setor de moda, sendo bem diferenciada pelo seu ramo de praia e surf. \n Atuei na manutenção e criação de novos componentes, sendo o único responsavel técnico durante o periodo, passando por epocas críticas de grande volume de acessos como black friday e natal, tudo isso superando os desafios e mantendo o cliente feliz com os resultados entregues.",
        link: 'https://hangloose.com.br/'
    },
]

function PageProj() {
    return (
        <Background>
            <Header />
            <div className={styles.container}>
                {PROJETOS.map(item => 
                localStorage.getItem("mykey") == item.key &&
                    <>
                        <a href='/' className={styles.voltar}>{'voltar'}</a>
                        <h1 className={styles.containerImageList}>{item.title}</h1>
                        <div className={styles.containerProj}>
                            <a href={item.link} target='_blank'>
                                {window.innerWidth >= 760 && <img className={styles.ImageUnique} src={item.image} alt={item.alt} />}
                                {window.innerWidth <= 760 && <img className={styles.ImageUnique} src={item.imageMob} alt={item.alt} />}
                            </a>
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