import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: rows;
    text-align: center;
    margin: 3rem;

    img{
        width: 25%;
        height: auto;
        margin: 1rem;
        border-radius: 25px;
    }

    .description{
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        background-color: var(--colorPrimary);
        padding: 1rem;
        margin: 1rem;
        width: 100%;
    }

    .description-wrapper div{
        border: 1px solid white;
        margin: 1rem;
    }

    h1{
        font-size: 5rem;
        color: white;
    }
    h2{
        font-size: 3rem;
        font-style:italic;
        color: white;
    }

    @media screen and (max-width:1000px){
        flex-direction: column;

        img{
            width: 100%;
        }
    }
`