import React from 'react'
import { StyledNavBar } from './styles/StyledNavBar'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export const NavBar = () => {
  return (
    <StyledNavBar>
        <div className='element'>
            <FaGithub size={'1.5rem'}/>
            <a href='https://github.com/ben-w-splinter'>Github</a>
        </div>
        <div className='element'>
            <FaLinkedin size={'1.5rem'}/>
            <a href='https://www.linkedin.com/in/benjamin-whiting-lancs/'>LinkedIn</a>
        </div>
    </StyledNavBar>
  )
}
