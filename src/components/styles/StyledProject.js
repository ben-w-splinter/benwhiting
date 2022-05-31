import styled from "styled-components"

export const StyledProject = styled.div`
    display: flex;
    margin: 2rem;

    img{
        width: 25%;
        height: auto;
        border-radius: 25px;
        margin-right: 1rem;
    }

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        background: white;
        height: 100%;
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

    a{
        padding: 1rem;
        border: 1px solid red;
        background: white;
        color: black;
        text-decoration: none;
    }

    a:hover{
        background: var(--colorPrimary);
        color: white;
    }

    @media screen and (max-width:500px){
        flex-direction: column;
        align-items:center;

        img{
            margin-right: 0;
            margin-bottom: 1rem;
            width: 100%;
        }

        .content{
            height: 50vh;
        }
        .content p{
            font-size: 1rem;
        }

    }
`