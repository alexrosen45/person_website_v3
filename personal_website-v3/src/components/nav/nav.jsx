import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePersonPin } from 'react-icons/md'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineBarChart } from 'react-icons/ai'
import { AiOutlineContacts } from 'react-icons/ai'

const nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome size={20} /></a>
            <a href="#about"><MdOutlinePersonPin size={20} /></a>
            <a href="#experience"><MdWorkOutline size={20} /></a>
            <a href="#portfolio"><AiOutlineBarChart size={20} /></a>
            <a href="#contact"><AiOutlineContacts size={20} /></a>
        </nav>
    )
}

export default nav