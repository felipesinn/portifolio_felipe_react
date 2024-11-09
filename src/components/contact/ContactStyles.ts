import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
    padding: 20px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column; 
  background-color: #3c4753; 
  border: 2px solid white;
  padding: 20px; 
  border-radius: 8px; 
  width: 100%; 
  max-width: 500px; 

  h3 {
    margin-bottom: 20px; 
    color: white; 
    text-align: center; 
  }
`;

export const FormField = styled.div`
  margin-bottom: 15px; 

  label {
    margin-bottom: 5px; 
    color: white; 
    display: block; 
  }

  input,
  textarea {
    width: 100%; 
    padding: 10px;
    border-radius: 4px; 
    border: none; 
    box-shadow: inset 0 0 5px rgba(0,0,0,0.5); 

    &:focus {
      outline: none; 
      box-shadow: inset 0 0 5px rgba(255,255,255,0.7); 
    }

    &::placeholder {
      color: #ccc; 
    }
  }

  textarea {
    resize: vertical; 
    min-height: 100px; 
  }
`;

export const SubmitButton = styled.button`
   background-color: #008e6f; 
   color: white; 
   padding: 10px; 
   border-radius: 4px;
   border: none; 
   cursor: pointer; 

   &:hover {
     background-color: #2c3e50; 
     transition: background-color .3s ease; 
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