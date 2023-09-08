import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ContextGlobal)


  return (
    <nav style={{ backgroundColor: theme.navBackground, color: theme.font, boxShadow: theme.borderShadow }}>


      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <img src="/DH.ico" alt="icon" style={{ boxShadow: theme.imgShadow }} />
        
        <NavLink to={"/"} style={{ color: theme.font }} className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to={"/contact"} style={{ color: theme.font }} className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>

        <NavLink to={"/favs"} style={{ color: theme.font }} className={({ isActive }) => isActive ? "active" : ""}>
          Favorites
        </NavLink>
      </div>


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button
        onClick={() => handleChangeTheme()}
        style={{ boxShadow: theme.borderShadow }}
      >
        Dark/Light
      </button>


    </nav>
  )
}

export default Navbar