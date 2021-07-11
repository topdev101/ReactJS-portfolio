import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/denis-kirilov/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/superdev555" target="_blank" rel="noreferrer" ><FaGithub /></a>
      {/* <a href="https://angel.co/u/Denis-gogichashvili" target="_blank" rel="noreferrer" ><FaAngellist /></a> */}
    </div>
  )
}

export default HeaderSocials