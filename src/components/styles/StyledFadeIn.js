import styled from 'styled-components'

export const StyledFadeIn = styled.div`
    .fade-in-section{
        ${props => props.theme.display}
        margin: 2rem;
        opacity: 0;
        transform: translateY(20vh);
        visibility: hidden;
        transition: opacity 0.6s ease-out, transform 1.2s ease-out;
        will-change: opacity, visibility;
    }

    .fade-in-section.visible {
        opacity: 1;
        transform: none;
        visibility: visible;
    }

    @media screen and (max-width:1000px){
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`