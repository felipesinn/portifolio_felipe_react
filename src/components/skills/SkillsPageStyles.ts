import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background-color: #21272f; 
  border-radius: 8px; 
  padding: 20px; 
  margin: 100px 0; 

  @media (max-width: 768px) {
    margin: 50px 0; 
    padding: 15px; 
  }

  h2 {
    color: #fff; 
    text-align: center; 
    margin-bottom: 20px; 
    font-size: 2rem; 
    text-transform: uppercase; 
    letter-spacing: 1px; 
  }
`;

export const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0; 
  
  display: flex; 
  flex-wrap: wrap;
  
  gap: 28px; 

  @media (max-width: 768px) {
    gap: 15px; 
    justify-content: center; 
    width: 100%; 
    margin-bottom: 20px; 
   }
`;

export const SkillItem = styled.li`
   flex-basis: calc(25% - .5rem); 

   @media (max-width:768px) {
     flex-basis: calc(50% - .5rem); 
   }
`;

export const Card = styled.div`
   background-color: #3c4753; 
   color: white; 
   padding: 15px; 
   border-radius: 8px; 
   text-align: center; 

   &:hover {
     background-color: #008e6f; 
     transition: background-color .3s ease, transform .2s ease; 
     transform: scale(1.05); 
   }
`;


