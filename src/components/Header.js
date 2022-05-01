import React from 'react'
import { NavBar } from './NavBar'
import { StyledHeader } from './styles/Header.styled'

export const Header = () => {
    return (
        <StyledHeader>
            <img src='images/profile.jpg' alt='Profile'></img>
            <div className='description'>
                <div className='description-wrapper'>
                    <h1>Ben Whiting</h1>
                    <div className='divider'/>
                    <h2>Software Developer</h2>
                    <div className='divider'/>
                    <NavBar/>
                </div>
            </div>
        </StyledHeader>
    ) 
}
