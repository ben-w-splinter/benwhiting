import {useState, useRef, useEffect} from 'react'
import { StyledFadeIn } from './styles/StyledFadeIn'

export const FadeIn = (props) => {
    const [visible, setVisible] = useState(true)
    const domRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
        }, []);
    return (
        <StyledFadeIn>
            <div className = {`fade-in-section ${visible ? 'visible' : ''}`} ref = {domRef}>
                {props.children}
            </div>
        </StyledFadeIn>
    )
}
