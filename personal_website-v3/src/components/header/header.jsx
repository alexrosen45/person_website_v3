import React from 'react'
import './header.css'
import Buttons from './header_buttons.jsx'
import ProfilePhoto from '../../assets/photo_of_me_transparent.png'
import HeaderContact from './header_contact.jsx'

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>
                    Hi, I'm
                </h5>
                <h1>
                    Alex!
                </h1>
                <h5 className="text-light">
                    Aspiring Software Engineer
                </h5>

                <Buttons />
                <HeaderContact />

                <div className="profile__photo">
                    <img src={ProfilePhoto} alt="profile-photo" />
                </div>

                <a href="#contact" className='scroll__down'>contact</a>

            </div>
        </header>
    )
}

export default header
