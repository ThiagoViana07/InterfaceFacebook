import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

import './styles.css'

const Header = () => {
  return (
    <>
      <div className="container-div">
        <div className='container-itens'>
          <h2>facebook</h2>

          <h5>Meu perfil
            <FaUserCircle size={18} />
          </h5>

        </div>
      </div>
    </>
  )
}

export default Header