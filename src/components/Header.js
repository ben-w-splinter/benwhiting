import React from 'react'
import { StyledHeader } from './styles/Header.styled'

export const Header = () => {
    return (
        <StyledHeader>
            <img src='images/profile.jpg' alt='Profile'></img>
            <div className='description'>
                <div className='description-wrapper'>
                    <h1>Ben Whiting</h1>
                    <div/>
                    <h2>Software Developer</h2>
                </div>
            </div>
        </StyledHeader>
    ) 
}
