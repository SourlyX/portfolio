import React, { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import '../index.css'

const Popup = ({ producto, referencia, referencias, addToCart, rerenderParent }) => {
  const [termino, setTermino] = useState("MEDIO")
  const [guarnicion, setGuarnicion] = useState(
    new Array(referencia.guarniciones.length).fill(false)
  )
  const [nota, setNota] = useState("")

  const validGuarniciones = () => {
    return guarnicion.filter(g => g).length
  }

  const handleChange = ({ target }) => {
    if (target.name === "termino") setTermino(target.value)
    if (target.name === "nota") setNota(target.value)
  }

  const handleCheckbox = (position) => {
    const updated = guarnicion.map((item, index) =>
      index === position ? !item : item
    )
    setGuarnicion(updated)
  }

  const handleSubmit = (e) => {
    if (validGuarniciones() === producto.no_guarniciones) {
      e.preventDefault()
      const data = Array.from(new FormData(e.target))
      addToCart(producto, data)
      rerenderParent()
    }
  }

  return (
    <div className="popup">
      <div className="contenedor">
        <img
          type="image"
          className="img"
          alt={producto.name}
          src={producto.img}
        />
        <h2>{producto.name}</h2>
        <form className="form" onSubmit={handleSubmit}>
          {referencia.terminosCarne.length !== 0 &&
            <div className="contenedor">
              <h3>Termino de la carne</h3>
              <div className="row">
                {referencia.terminosCarne.map(terminoId => {
                  const valor = referencias.find(ref => ref.id_referencia === terminoId)?.valor
                  return (
                    <Input
                      key={terminoId}
                      onChange={handleChange}
                      type="radio"
                      name="termino"
                      text={valor}
                      checked={termino === valor}
                      className="hover"
                    />
                  )
                })}
              </div>
            </div>
          }

          {producto.no_guarniciones !== 0 &&
            <div className="contenedor">
              <h3>Guarnicion(es): {producto.no_guarniciones}</h3>
              <div className="row">
                {referencia.guarniciones.map((guarnicionId, index) => {
                  const valor = referencias.find(ref => ref.id_referencia === guarnicionId)?.valor
                  return (
                    <Input
                      key={guarnicionId}
                      onChange={() => handleCheckbox(index)}
                      type="checkbox"
                      name="guarnicion"
                      text={valor}
                      checked={guarnicion[index]}
                      className="hover"
                    />
                  )
                })}
              </div>
            </div>
          }

          {validGuarniciones() > producto.no_guarniciones
            ? <div><span>Por favor no elija más de {producto.no_guarniciones} guarnicion(es)</span><br /><br /></div>
            : <div><br /><br /></div>}

          <span>Notas:</span>
          <Input
            key="nota"
            onChange={handleChange}
            type="text"
            name="nota"
            value={nota}
          />
          <br />

          <div className="final">
            <Button type="button" onClick={rerenderParent} className="secondary">Cancelar</Button>
            {validGuarniciones() === producto.no_guarniciones
              ? <Button type="submit" value="enviar" className="primary">Enviar</Button>
              : <label> Seleccione todas las guarniciones </label>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Popup
