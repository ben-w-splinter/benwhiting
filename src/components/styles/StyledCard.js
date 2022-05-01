import styled from "styled-components"

export const StyledCard = styled.div`
    display: flex;
    margin: 2rem;

    img{
        width: 25%;
        margin-left: 1rem;
        height: auto;
        border-radius: 25px;
    }

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        height: 100%;
        background: white;
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

    @media screen and (max-width:500px){
        flex-direction: column;
        align-items:center;

        img{
            margin-left: 0;
            margin-top: 1rem;
            width: 50%;
        }

        .content{
            height: 50vh;
        }

        .content p{
            font-size: 1.2rem;
        }

    }
`