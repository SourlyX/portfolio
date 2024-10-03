import React, { useState } from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  background-color: #1E1E1E;
  margin-top: 50px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  color: #55F5ED;
  margin-bottom: 30px;
`

const Form = styled.form`
  background-color: #2A2A2A;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #464A6D;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f9f9f9;
  
  &:focus {
    border-color: #55F5ED;
    outline: none;
  }
`

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #464A6D;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  background-color: #f9f9f9;
  
  &:focus {
    border-color: #55F5ED;
    outline: none;
  }
`

const SubmitButton = styled.button`
  background-color: #55F5ED;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #E61C4D;
  }
`

const ContactInfo = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #fff;
`

const ContactDetail = styled.p`
  margin: 5px 0;
`


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert('Mensaje enviado!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <ContactContainer>
      <Title>Contact</Title>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="name" 
          placeholder="Your name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Your e-mail" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <Textarea 
          name="message" 
          rows="5" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
      <ContactInfo>
        <ContactDetail>Email: luisferuatrabajos@gmail.com.com</ContactDetail>
        <ContactDetail>Teléfono: +(506) 6005 7935</ContactDetail>
      </ContactInfo>
    </ContactContainer>
  )
}

export default Contact
