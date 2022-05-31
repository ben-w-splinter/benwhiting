import styled from "styled-components"

export const StyledAboutMe = styled.div`
    display: grid; 
    grid-template-columns: repeat(3,1fr); 
    column-gap: 2rem;
    margin: 2rem;

    @media screen and (max-width:800px){
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`