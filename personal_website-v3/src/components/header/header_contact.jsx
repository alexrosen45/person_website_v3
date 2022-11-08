import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

const header_contact = () => {
    return (
        <div className='header__contact'>
            <a href="https://www.linkedin.com/in/alex-rosen-7152281b7/"><AiFillLinkedin size={25} /></a>
            <a href="https://github.com/alexrosen45"><AiFillGithub size={25} /></a>
            <a href="https://twitter.com/AlexRos27300998"><AiFillTwitterCircle size={25} /></a>
        </div>
    )
}

export default header_contact
