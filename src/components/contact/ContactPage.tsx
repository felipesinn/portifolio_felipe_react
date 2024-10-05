// components/contact/ContactPage.tsx
import React, { useState } from 'react';
import PageContainer from '../common/PageContainer'; // Importando o PageContainer
import { ContactForm, FormField, SubmitButton, SuccessMessage, ContactInfo, ContactContainer } from './ContactStyles'; // Importando os estilos
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

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

    // Simulando envio bem-sucedido
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log('Dados do formulário:', formData);
      setSuccess(true);
      setError('');
      
      // Limpa o formulário após o envio
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Limpa a mensagem após 5 segundos
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  return (
    <PageContainer title="Contato">
      <ContactContainer>
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
            <SubmitButton type="submit">Enviar</SubmitButton>
            {success && (
              <SuccessMessage>Obrigado! Sua mensagem foi enviada com sucesso.</SuccessMessage>
            )}
            {error && (
              <SuccessMessage style={{ color: 'red' }}>{error}</SuccessMessage>
            )}
          </ContactForm>
        </div>

        {/* Informações de Contato Adicionais */}
        <ContactInfo>
          <h3>Informações de Contato</h3>
          <p><EmailOutlinedIcon /> E-mail: felipesinn01@gmail.com</p>
          <p><CallOutlinedIcon /> Telefone: (55) 9 9686-8393</p>
        </ContactInfo>
      </ContactContainer>
    </PageContainer>
  );
};