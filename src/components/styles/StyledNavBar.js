import styled from 'styled-components'

export const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;

    a{
        margin-left: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        color: white;
        cursor: pointer;
    }

    .element{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`