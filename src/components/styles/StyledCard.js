import styled from "styled-components"

export const StyledCard = styled.div`
    border-radius: 25px;
    background: white;
    transition: all 500ms ease;

    p, h1{
        padding: 1rem;
        text-align: center;
    }
    
    p{
        font-size: 1.5rem;
    }

    @media screen and (max-width:500px){

        p{
            font-size: 1.2rem;
        }

    }
`