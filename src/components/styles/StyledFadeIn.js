import styled from 'styled-components'

export const StyledFadeIn = styled.div`
    .fade-in-section{
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
`