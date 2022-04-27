import styled from 'styled-components'

export const StyledContact = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color: white;

    input[type='text'], input[type='email'], textarea{
        padding: 1rem;
        width: 25%;
        border: 1px solid var(--colorPrimary);
    }

    label{
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    button{
        margin: 2rem;
        padding: 1rem;
        width: 10%;
        background-color: white;
        border: 1px solid var(--colorPrimary);
        border-radius: 25px;
    }

    button:hover{
        background-color: var(--colorPrimary);
        color: white;
    }
`