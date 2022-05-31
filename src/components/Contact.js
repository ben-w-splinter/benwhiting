import {useState} from 'react'
import { StyledContact } from './styles/StyledContact'

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const onsubmit = (e) => {
      e.preventDefault()
      setSubmitted(true)
      setTimeout(() => {setSubmitted(false)}, 2000);
      setName("")
      setEmail("")
      setMessage("")
  }
  return (
      <StyledContact id='contact-form'>
            {submitted ? <span className="alert">Thank you for your request {name}. I will be in touch soon</span> : null}
            <label>Name:</label>
            <input type='text' placeholder='John Doe' value={name} onChange = {(e) => {setName(e.target.value)}}/>
            <label>Email:</label>
            <input type='email' placeholder='johndoe@company.com' value={email} onChange = {(e) => {setEmail(e.target.value)}}/>
            <label>Message:</label>
            <textarea name="textarea" className='message' placeholder='Your message here' value={message} onChange = {(e) => {setMessage(e.target.value)}}></textarea>
            <button onClick={onsubmit}>Submit</button>
      </StyledContact>
  )
}
