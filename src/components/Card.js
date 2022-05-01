import React, {useState} from 'react'
import {StyledCard} from './styles/StyledCard'
import ReactCardFlip from 'react-card-flip'

export const Card = ({title, content, imageURL}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <StyledCard>
            <ReactCardFlip containerStyle={{width: '100%'}} isFlipped = {isFlipped} flipDirection = 'vertical'>
                <div className='content' onClick={handleClick}>
                    <div>
                    <h1>{title}</h1>
                    <div><i>Click to flip</i></div>
                    </div>
                </div>
                <div className='content' onClick={handleClick}>
                    <p>{content}</p>
                </div>
            </ReactCardFlip>
            <img src={imageURL} alt = ''/>
        </StyledCard>
    )
}