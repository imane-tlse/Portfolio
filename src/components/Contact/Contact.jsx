import React from 'react'
import './contact.css';
import mail from '../../images/courrier.png';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
        <div className="contact-wrapper">
            <img src={mail} alt="" />   
            <form>
                <label>
                    Your email: 
                    <input type='mail' name='mail' />
                </label>
                <label>
                    Your message: <br/>
                    <textarea placeholder='Feel free to ask me anything ...'></textarea>
                </label>
            </form>
            <input type='submit' value='submit' style={{color: 'white', backgroundColor: 'black', borderRadius: '20px', width: '150px', height:'40px', marginLeft: '120px', marginTop: '20px' }}></input>
        </div>
    </div>
  )
}

export default Contact
