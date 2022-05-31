import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { NavBar } from './NavBar'
import { StyledHeader } from './styles/Header.styled'

export const Header = () => {
    const handleClick = () => {
        window.scrollBy({top: window.innerHeight, behavior: 'smooth'})
    }
    return (
        <StyledHeader>
            <div className='description'>
                    <img src='images/profile.jpg' alt='Profile'></img>
                    <h1>Ben Whiting</h1>
                    <div className='divider'/>
                    <h2>Software Developer</h2>
                    <div className='divider'/>
                    <NavBar/>
                    <FaAngleDown className='downArrow' size={'1.5rem'} onClick={handleClick}/>
            </div>
        </StyledHeader>
    ) 
}
