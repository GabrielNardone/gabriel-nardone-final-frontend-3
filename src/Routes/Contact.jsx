import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'


export const Contact = () => {

  const {theme} = useContext(ContextGlobal)

  return (
    <div className='contact'>

      <article style={{backgroundColor: theme.formBg, boxShadow: theme.cardShadow}}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </article>

    </div>
  )
}
