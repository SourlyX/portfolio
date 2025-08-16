import React, { useState } from "react"
import Productos from "./Productos"

const Menu = ({ addToCart, productos, postres, bebidas, guarniciones, carro, referencias, referenciasMenu, tiposPlato, terminosCarne }) => {
  const [menu, setMenu] = useState(tiposPlato[0])

  const handleChange = ({ target }) => {
    setMenu(target.value)
  }

  const productosFiltrados =
    menu === tiposPlato[1]
      ? guarniciones
      : menu === tiposPlato[2]
        ? bebidas
        : menu === tiposPlato[3]
          ? postres
          : productos

  return (
    <div>
      <div className="line">
        {tiposPlato.map(tipo => (
          <input
            onClick={handleChange}
            key={tipo}
            className="fullwidth"
            name="menu"
            type="submit"
            value={tipo}
          />
        ))}
      </div>
      <Productos
        addToCart={addToCart}
        productos={productosFiltrados}
        guarniciones={guarniciones}
        terminosCarne={terminosCarne}
        carro={carro}
        referencias={referencias}
        referenciasMenu={referenciasMenu}
      />
    </div>
  )
}

export default Menu
