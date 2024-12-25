import React from 'react'
import './header.css';
import pic from '../../images/imane2-bg.png'

const Header = () => {
  return (
    <div id="test" className='header-container'>
      <div className="header-wrapper">
        <div className="header-text">
            <h1>Welcome to my website</h1>
            <h3>I'm Imane EL BADRI</h3>
            <p>
                I'm currently an engineering student <br/>Specialized in Telecommunication Systems and Networks<br/>
                I enjoy expanding my knowledge and embracing challenges that foster my personal growth<br/>
            </p>
            {/* <button onClick={()=> {
                          downloadFileAtUrl(file.fichier)
                      }}>Download CV</button> */}
        </div>
        <div className="header-picture">
            <img src={pic} alt="Imane EL BADRI"/>
        </div>
      </div>
    </div>
  )
}



export default Header
