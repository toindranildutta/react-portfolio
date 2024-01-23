import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/toindranildutta" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/toindranildutta" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials