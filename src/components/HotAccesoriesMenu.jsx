import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/HotAccesoriesMenu.css"

const HotAccesoriesMenu = () => {
  return (
    <div className='HotAccesoriesMenu'>
    <NavLink className="HotAccesoriesLink" to="/music">Music Store</NavLink>
    <NavLink className="HotAccesoriesLink" to="/smartDevice">Smart Devices</NavLink>
    <NavLink className="HotAccesoriesLink" to="/home">Home</NavLink>
    <NavLink className="HotAccesoriesLink" to="/lifestyle">Lifestyle</NavLink>
    <NavLink className="HotAccesoriesLink" to="/mobileAccessories">Mobile Accesories</NavLink>

    </div>
  )
}

export default HotAccesoriesMenu