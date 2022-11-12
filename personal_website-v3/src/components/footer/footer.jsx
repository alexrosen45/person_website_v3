import React from 'react'
import './footer.css'
import { AiOutlineMail } from 'react-icons/ai'

const footer = () => {
    return (
        <section id='footer'>
            <footer>
                <div id='contact' className='email'>
                    <a href="#contact"><AiOutlineMail /></a>
                    <h3>alexanderrosen45@gmail.com</h3>
                </div>
            </footer>
        </section>
    )
}

export default footer
