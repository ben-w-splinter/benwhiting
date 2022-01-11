import React from 'react'
import { StyledHeader } from './styles/Header.styled'
import profile from '../images/profile.jpg'

export const Header = () => {
    return (
        <StyledHeader>
            <img src={profile} alt='Profile Image'></img>
            <div>
                <h1>Ben Whiting</h1>
                <h2>Software Developer</h2>
            </div>
        </StyledHeader>
    ) 
}
