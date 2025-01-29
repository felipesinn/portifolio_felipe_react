import React, { useState } from 'react';
import PageContainer from '../common/PageContainer'; 
import { ContactForm, FormField, SubmitButton, SuccessMessage, ContactInfo, ContactContainer } from './ContactStyles'; 
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const API_URL = 'http://localhost:3000/api';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError('Por favor, preencha todos os campos.');
            return;
        }
  
        const response = await fetch(`${API_URL}/submit`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.subject,  
                message: formData.message
            })
        });
  
        const data = await response.json();
  
        if (!response.ok) {
            throw new Error(data.error || 'Erro ao enviar formulário');
        }
  
        setSuccess(true);
        setError('');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
  
        setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        setError(error instanceof Error ? error.message : 'Erro ao enviar formulário');
    }
  };

  return (
    <PageContainer title="Contato">
      <ContactContainer id="contato">
        <div>
          <p style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
            Preencha o formulário abaixo para entrar em contato comigo. Responderei assim que possível!
          </p>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Entre em Contato</h3>
            <FormField>
              <label htmlFor="name">Nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            <FormField>
              <label htmlFor="email">E-mail:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            <FormField>
              <label htmlFor="subject">Assunto:</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            <FormField>
              <label htmlFor="message">Mensagem:</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            <SubmitButton type="submit" color="#e74c3c">Enviar</SubmitButton>
            {success && (
              <SuccessMessage>Obrigado! Sua mensagem foi enviada com sucesso.</SuccessMessage>
            )}
            {error && (
              <SuccessMessage style={{ color: 'red' }}>{error}</SuccessMessage>
            )}
          </ContactForm>
        </div>

        <ContactInfo>
          <h3>Informações de Contato</h3>
          <p><EmailOutlinedIcon /> E-mail: felipesinn01@gmail.com</p>
          <p><CallOutlinedIcon /> Telefone: (55) 9 9686-8393</p>
        </ContactInfo>
      </ContactContainer>
    </PageContainer>
  );
};