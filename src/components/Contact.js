import React from 'react'
import { StyledContact } from './styles/StyledContact'

export const Contact = () => {
  const onsubmit = (e) => {
      e.preventDefault()
      document.getElementById('contact-form').reset()
  }
  return (
      <StyledContact id='contact-form'>
            <label>Name:</label>
            <input type='text' placeholder='John Doe'/>
            <label>Email:</label>
            <input type='email' placeholder='johndoe@comapny.com'/>
            <label>Message:</label>
            <textarea name="textarea" className='message' placeholder='Your message here'></textarea>
            <button onClick={onsubmit}>Submit</button>
      </StyledContact>
  )
}
