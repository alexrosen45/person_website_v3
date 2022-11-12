import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePersonPin } from 'react-icons/md'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineBarChart } from 'react-icons/ai'
import { AiOutlineContacts } from 'react-icons/ai'

// jquery
import $ from 'jquery';

const nav = () => {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#nav").addClass('fill-bg');
        } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            $("#nav").addClass('slide-navbar');
        } else {
            $("#nav").removeClass('fill-bg');
            $("#nav").removeClass('slide-navbar');
        }
    });
    return (
        <nav id="nav">
            <a href="#"><AiOutlineHome size={20} /></a>
            <a href="#about"><MdOutlinePersonPin size={20} /></a>
            <a href="#experience"><MdWorkOutline size={20} /></a>
            <a href="#portfolio"><AiOutlineBarChart size={20} /></a>
            <a href="#contact"><AiOutlineContacts size={20} /></a>
        </nav>
    )
}

export default nav