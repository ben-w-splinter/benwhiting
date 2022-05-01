import styled from "styled-components"

export const StyledHeader = styled.div`
    display: flex;
    text-align: center;
    margin: 2rem;

    img{
        width: 25%;
        height: auto;
        border-radius: 25px;
    }

    .description{
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        background-color: var(--colorPrimary);
        margin-left: 1rem;
        width: 100%;
    }

    .divider{
        border: 1px solid white;
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

        img{
            width: 25%;
        }

        .description{
            margin-left: 0;
            margin-top: 1rem;
        }

        @media screen and (max-width:800px){
            flex-direction: column;
            align-items:center;
    
            img{
                margin-left: 0;
                margin-top: 1rem;
                width: 100%;
            }
        }
        
    }
`