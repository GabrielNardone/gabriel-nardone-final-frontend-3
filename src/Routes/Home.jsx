import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import { Loader } from '../Components/loader/Loader'


export const Home = () => {

  const { state } = useContext(ContextGlobal)
  const { data, loading } = state

  return (
    <main className="home" >
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          loading
            ? <Loader />
            : data.map(elem => <Card key={elem.id} props={elem}/>)
        }
      </div>
    </main>
  )
}

export default Home;