import React, { useState } from "react"
import Popup from "./Popup"
import '../index.css'

const Producto = ({ producto, guarniciones, addToCart, referencias, referenciasMenu, popup }) => {
  const [dishVisible, setDishVisible] = useState(producto.isDishVisible)

  const rerenderParent = () => {
    producto.isDishVisible = false
    setDishVisible(false)
  }

  const handleClick = () => {
    if (popup) {
      producto.isDishVisible = true
      setDishVisible(true)
    } else {
      addToCart(producto, [])
    }
  }

  return (
    <div className="producto">
      {producto.estado ? (
        <>
          <div className="contenedor">
            <input
              type="image"
              className="img"
              alt={producto.descripcion}
              src={producto.img}
              onClick={handleClick}
            />
            <span className="titulo">{producto.name}</span>
          </div>
          <label className="apagado">Agotado</label>
        </>
      ) : (
        <div className="posicion">
          <img
            className="img grayout"
            alt={producto.name}
            src={producto.img}
          />
          <label className="texto-centrado">Agotado</label>
        </div>
      )}

      {producto.isDishVisible && popup && (
        <Popup
          producto={producto}
          guarniciones={guarniciones}
          addToCart={addToCart}
          rerenderParent={rerenderParent}
          referencia={referenciasMenu.find(ref => ref.id_plato === producto.id_plato)}
          referencias={referencias}
        />
      )}
    </div>
  )
}

export default Producto
