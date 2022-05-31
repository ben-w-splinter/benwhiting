import styled from "styled-components"

export const StyledHeader = styled.section`
    display: flex;
    text-align: center;
    height: 100vh;

    img{
        width: 15%;
        height: auto;
        border-radius: 25px;
    }

    .description{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        width: 100%;
    }

    .description h1{
        padding: 0;
    }

    .divider{
        border: 1px solid white;
        margin: 1rem;
        width: 20%;
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

    .downArrow{
        margin-top: 2rem;
        color: white;
        cursor: pointer;
    }

    @media screen and (max-width:1000px){

        img{
            width: 25%;
        }

        .description{
            margin-left: 0;
            margin-top: 1rem;
        }
        
    }
`