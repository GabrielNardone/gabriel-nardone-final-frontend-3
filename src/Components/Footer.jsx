import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  const {theme} = useContext(ContextGlobal)

  return (
    <footer style={{backgroundColor: theme.footerBg}}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
