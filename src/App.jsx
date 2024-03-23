import { useState } from 'react'
import logo from './assets/logo.png'
import apptelmarelo from './assets/apptelmarelo.png'
import apptelmec from './assets/apptelmec.png'
import bigmac from "./assets/bigmac.png";
import sorvete from "./assets/sorvete.png";
import batata from "./assets/batata.png";
import './App.css'
import sofa from "./assets/sofa.png";
import loja from "./assets/loja.png";
import juntos from "./assets/juntos.png";
import Card from "./card";
import epou from "./assets/epou.png";
import plei from "./assets/plei.png";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        
<section id='lg'>
<img src={logo} alt="" />
</section>

<section id='cxs'>
  <div>
  <img src={apptelmarelo} alt="" />
  <h3>Baixe o App</h3>
  </div>

<div id='cx2'>
<h3>Peça seu Méqui</h3>
  <img src={apptelmec} alt="" />
  
</div>
  </section>
      </header>
      
      <main>

        <section id='main1'>
        <div id='dm1'>
          <img src={bigmac} alt="" />
          <h1>BATEU AQUELA #FOME DE MÉQUI?</h1>
        </div>
        

        <figure id='fgs'>
          <img src={bigmac} alt="" />
          <img src={batata} alt="" />
          <img src={sorvete} alt="" />
        </figure>
        
        </section>


      <section id='main2'>

      <h2>Promoção</h2>
        <div id='dcards'>
          
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card imagem={loja} texto={"Venha conhecer nossa nova loja!"} />
          <Card imagem={juntos} texto={"Confira as medidas que o Méqui adotou!"}/>
        </div>

      </section>
      </main>
      <footer>
<div>
  <img src={logo} alt="" />
  <h2>© McDonald’s 2024</h2>
</div>
<figure>
  <img src={plei} alt="" />
  <img src={epou} alt="" />
</figure>


      </footer>

    </>
  )
}

export default App
