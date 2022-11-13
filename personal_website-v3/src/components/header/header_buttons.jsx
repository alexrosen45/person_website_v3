import React from 'react'
import CV from '../../assets/Resume.pdf'

const header_buttons = () => {
    return (
        <div className='header__buttons'>
            <a href={CV} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    )
}

export default header_buttons
