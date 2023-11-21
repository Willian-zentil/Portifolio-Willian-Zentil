import React from 'react'
import styles from './Header.module.css'
import ContainerSmall from '../containerSmall/ContainerSmall'
import ContainerLarge from '../containerLarge/ContainerLarge'
import logo from '../../images/W-Z-logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <ContainerLarge>
        <a href='/'><img src={logo} className={styles.logo} alt='Logo Willian Zentil' /></a>
        <ContainerSmall>
          <div>
            <h1>Willian Zentil</h1>
            <p>Engenheiro de software - Programador no mercado a 5 anos, focado nas principais plaataformas de e-commerce e apaixonado pela área de analise de dados, confira alguns dos projetos que participei! :)</p>
          </div>
        </ContainerSmall>
      </ContainerLarge>
    </header>
  )
}

export default Header