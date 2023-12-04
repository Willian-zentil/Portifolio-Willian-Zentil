import React from 'react'
import styles from './Header.module.css'
import ContainerSmall from '../containerSmall/ContainerSmall'
import ContainerLarge from '../containerLarge/ContainerLarge'
import logo from '../../images/W-Z-logo.svg'
import Llinkedin from '../../images/linkedin.png'
import github from '../../images/github.png'

function Header() {
  return (
    <header className={styles.header}>
      <ContainerLarge>
        <a href='/'><img src={logo} className={styles.logo} alt='Logo Willian Zentil' /></a>
        <ContainerSmall>
          <div>
            <h1>Willian Zentil</h1>
            <p>Engenheiro de software - Programador no mercado a 5 anos, focado nas principais plataformas de e-commerce e apaixonado pela área de analise de dados, confira alguns dos projetos que participei! :)</p>
            <a className={styles.linkWhats} target='_blank' href='https://wa.me/55014997728374?text=Olá!%20gostaria%20de%20conversar%20sobre%20meu%20projeto"'>Me conte sobre sua ideia de projeto por aqui</a>
          </div>
        </ContainerSmall>

        <div className={styles.containerSocial}>
          <p>Redes sociais</p>
          <div className={styles.socialIcons}>
            <a target='_blank' href={'https://www.linkedin.com/in/willian-zentil/'}>
              <img src={Llinkedin} className={styles.logo} alt='Logo Willian Zentil' />
            </a>
            <a target='_blank' href={'https://github.com/Willian-zentil'}>
              <img src={github} className={styles.logo} alt='Logo Willian Zentil' />
            </a>
          </div>
        </div>

      </ContainerLarge>
    </header >
  )
}

export default Header