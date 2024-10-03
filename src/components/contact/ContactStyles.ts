// components/contact/ContactStyles.ts
import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column; /* Alinha os campos em coluna */
  background-color: #333; /* Cor de fundo do formulário */
  border: 2px solid white;
  padding: 20px; /* Espaçamento interno */
  border-radius: 8px; /* Bordas arredondadas */
  width: 100%; /* Largura total */
  max-width: 500px; /* Largura máxima */
`;

export const FormField = styled.div`
  margin-bottom: 15px; /* Espaçamento entre os campos */

  label {
    margin-bottom: 5px; /* Espaçamento abaixo do rótulo */
    color: white; /* Cor do texto do rótulo */
    display: block; /* Faz o rótulo ocupar toda a largura */
  }

  input,
  textarea {
    width: 100%; /* Largura total do campo */
    padding: 10px; /* Espaçamento interno */
    border-radius: 4px; /* Bordas arredondadas */
    border: none; /* Remove a borda padrão */
    box-shadow: inset 0 0 5px rgba(0,0,0,0.5); /* Sombra interna */
    
    &:focus {
      outline: none; /* Remove o contorno padrão ao focar */
      box-shadow: inset 0 0 5px rgba(255,255,255,0.7); /* Sombra interna ao focar */
    }

    &::placeholder {
      color: #ccc; /* Cor do texto placeholder */
    }
  }

  textarea {
    resize: vertical; /* Permite redimensionar verticalmente apenas */
    min-height: 100px; /* Altura mínima do textarea */
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff; /* Cor de fundo do botão */
  color: white; /* Cor do texto do botão */
  padding: 10px; /* Espaçamento interno */
  border-radius: 4px; /* Bordas arredondadas */
  border: none; /* Remove a borda padrão */

   cursor: pointer; /* Muda o cursor para mãozinha ao passar sobre o botão */

   &:hover {
     background-color: #0056b3; /* Cor ao passar o mouse sobre o botão */
     transition: background-color 0.3s ease; /* Transição suave da cor de fundo */
   }
`;

export const SuccessMessage = styled.p`
   color: #28a745; 
   margin-top: 20px;
   font-size: 1.2rem;
`;

// ... outros estilos ...

export const ContactInfo = styled.div`
  margin-top: 20px;
  color: white; /* Cor do texto */
  
  h3 {
    margin-bottom: 10px; /* Espaçamento abaixo do título */
  }

  p {
    margin: 5px 0; /* Espaçamento entre os parágrafos */
  }
`;