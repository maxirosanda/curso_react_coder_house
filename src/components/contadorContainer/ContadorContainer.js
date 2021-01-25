import React from 'react'
import Producto from "../Contador/Contador"
import { useState } from "react"

const ContadorContainer = ({ stock }) => {
  let inicial = 1
  const [cantidad, setCantidad] = useState(inicial);
  const [maximo] = useState(stock)
  const subirCantidad = () => {
    cantidad < maximo && setCantidad(cantidad + 1)
  }
  const bajarCantidad = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  if (stock > 0) {
    return (
      <React.Fragment>
        <Producto
          cantidad={cantidad}
          bajarCantidad={bajarCantidad}
          subirCantidad={subirCantidad}
        ></Producto>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h2>no hay stock lo sentimos mucho</h2>
      </React.Fragment>
    )
  }
}

export default ContadorContainer
