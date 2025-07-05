import React from "react"
import Producto from './Producto'
import '../index.css'

const Productos = ({ productos, guarniciones, addToCart, carro, referencias, referenciasMenu }) => {
  return (
    <div className="menu">
      {productos.map(producto => (
        <Producto
          key={producto.id_plato}
          addToCart={addToCart}
          producto={producto}
          guarniciones={guarniciones}
          referencias={referencias}
          referenciasMenu={referenciasMenu}
          carro={carro.filter(el => el?.name === producto.name)}
          popup={producto.tipo_menu === 1}
        />
      ))}
    </div>
  )
}

export default Productos
