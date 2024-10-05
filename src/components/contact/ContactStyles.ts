// components/contact/ContactStyles.ts
import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Alinha os itens nas extremidades */
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas menores */
    align-items: center; /* Centraliza os itens */
    padding: 20px; /* Reduz o padding em telas menores */
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column; /* Alinha os campos em coluna */
  background-color: #3c4753; /* Cor de fundo do formulário */
  border: 2px solid white;
  padding: 20px; /* Espaçamento interno */
  border-radius: 8px; /* Bordas arredondadas */
  width: 100%; /* Largura total */
  max-width: 500px; /* Largura máxima */

  h3 {
    margin-bottom: 20px; /* Espaçamento abaixo do título */
    color: white; /* Cor do texto do título */
    text-align: center; /* Centraliza o título */
  }
`;

export const FormField = styled.div`
  margin-bottom: 15px; /* Aumenta o espaçamento entre os campos */

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
     transition: background-color .3s ease; /* Transição suave da cor de fundo */
   }
`;

export const SuccessMessage = styled.p`
   color: #28a745;
   margin-top: 20px;
   font-size: 1.2rem;
   text-align:center;
`;

export const ContactInfo = styled.div`
   margin-top:38%;
   margin-left:auto;
   margin-right:auto;
   color:white; /* Cor do texto */

   h3 {
     margin-bottom:18px; /* Espaçamento abaixo do título */
     text-align:center;
   }

   p {
     margin:.5rem auto; /* Espaçamento entre os parágrafos e centraliza o texto */
     font-size: 1rem;
     display:flex;
     align-items:center;

     svg {
       margin-right:.8rem; /* Espaçamento entre ícone e texto */
       color:#00bd95;
     }
   }
`;