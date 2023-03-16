import React from 'react'
import styles from "../styles/Breakfast_Page.css"

const Main = () => {
  return (

<main>

<div id="texto">
    <p id="grey">Inicio/ Nuestra carta / Desayunos y Meriendas</p>
    <h2>Desayunos y Meriendas</h2>
    <div>
    <p>Todos vienen con té en sobre Inti Zen o Café en jarrito.</p>
    <p id="black">De 8 a 11 hs y de 16 a 18 hs.</p>
</div>
</div>

<div class="cart-container">

<div>
    <img src="https://healthyrecipesblogs.com/wp-content/uploads/2014/01/avocado-egg-bake-featured.jpg" alt=""/>
    <p id="gris">Desayunos y meriendas</p>
    <p id="negro">AVOCADO & EGG</p>
    <p id="price">$1290</p>
    <button id="añadir">Añadir al carrito</button>
</div>

<div>
    <img src="https://moorlandseater.com/wp-content/uploads/2018/07/freshly-baked-cheese-scones-on-a-plate-moorlands-eater-DSC08001.jpg" alt=""/>
    <p id="gris">Desayunos y meriendas</p>
    <p id="negro">CHEESE SCONES</p>
    <p id="price">$1020</p>
    <button id="añadir">Añadir al carrito</button>
</div>

<div>
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-tofu-buddha-bowl-royalty-free-image-1606213917.?resize=480:*" alt=""/>
    <p id="gris">Desayunos y meriendas</p>
    <p id="negro">FITNESS BOWL</p>
    <p id="price">$1390</p>
    <button id="añadir">Añadir al carrito</button>
</div>

<div>
    <img src="https://storybrookeweb.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-08-24-at-13.20.48.jpeg" alt=""/>
    <p id="gris">Desayunos y meriendas</p>
    <p id="negro">FRENCH TOAST STORYBROOKE</p>
    <p id="price">$1250</p>
    <button id="añadir">Añadir al carrito</button>
</div>

</div>

</main>
  )
}

export default Main