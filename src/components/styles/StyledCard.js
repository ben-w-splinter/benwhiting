import styled from "styled-components"

export const StyledCard = styled.div`
    display: flex;
    margin: 2rem;

    img{
        width: 20vw;
        height: auto;
        border-radius: 25px;
    }

    .card{
        width: 100%;
    }

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2rem;
        border-radius: 25px;
        background: white;
        height: 100%;
        width: calc(80vw - 6rem);
    }

    div{
        text-align: center;
    }

    .content p, h1{
        text-align: center;
    }

    .content p{
        padding: 2rem;
        font-size: 1.5rem;
    }

    .content h1{
        width: 100%;
    }

    @media screen and (max-width:1000px){
        flex-direction: column;

        img{
            width: 100%;
        }
    }
`