import {StyledCard} from './styles/StyledCard'

export const Card = ({title, content}) => {
    return (
        <StyledCard>
            <h1>{title}</h1>
            <p>{content}</p>     
        </StyledCard>
    )
}