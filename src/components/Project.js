import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import { StyledProject } from './styles/StyledProject';

export const Project = ({title, content, imageURL, projectURL}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <StyledProject>
            <img src={imageURL} alt = ''/>
            <ReactCardFlip className = 'card' isFlipped = {isFlipped} flipDirection = 'vertical'>
                <div className='content' onClick={handleClick}>
                    <div>
                    <h1>{title}</h1>
                    <div><i>Click to flip</i></div>
                    </div>
                </div>
                <div className='content' onClick={handleClick}>
                    <div>
                        <p>{content}</p>
                        <a href={projectURL}>View Project</a>
                    </div>
                </div>
            </ReactCardFlip>
        </StyledProject>
    )
}