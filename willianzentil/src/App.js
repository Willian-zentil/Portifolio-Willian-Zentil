import React, { useState } from 'react';
import './App.css';
import Background from './components/atoms/backGround/Background'
import ContainerLarge from './components/containerLarge/ContainerLarge'
import Header from './components/header/Header'
import ImagensProj from './components/imagensProj/ImagensProj';
import FullBanner from './components/fullbanner/FullBanner';
import Perfil from './components/perfil/Perfil';
import PerfileU from './components/perfil/PerfilMeu';

function App() {

  const [key, setKey] = useState()

  const saveKeyHandler = (enteredKey) => {
    setKey(enteredKey)
  }

  console.log('key: ', key)


  return (
    <Background>
      <Perfil />
      <PerfileU />
      {/* <Header />
      <FullBanner />
      <ContainerLarge>
        <ImagensProj onSaveKey={saveKeyHandler} />
      </ContainerLarge> */}
    </Background>
  );
}

export default App;
