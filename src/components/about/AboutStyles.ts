import styled from 'styled-components';

export const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  
  border-radius: 12px; 
  box-shadow: 0 8px 20px rgba(0,0,0,0.2); 
  transition: transform 0.3s ease; 

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const ProfileImage = styled.div`
  flex: 1; 
  .profile-image {
    width: 260px; 
    height: 260px; 
    border-radius: 50%;
    margin-bottom: 20px;
    border: 2px solid #008e6f;
    box-shadow: 0 4px 15px rgba(0,0,0,0.8); 
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1); 
    }
  }
`;


export const TextContent = styled.div`
  flex: 2; 
  padding-left: 20px; 
  
  background-color: rgba(255,255,255,0.9); 
  border-radius: 12px; 
  padding: 20px;
  
  box-shadow: 0 4px 15px rgba(0,0,0,0.2); 
  h2 {
    text-align: center;
    color: #21272f;
    margin-bottom: 20px;
    font-size: 2rem; 
    font-weight: bold; 
    text-transform: uppercase; 
    letter-spacing: 1px; 
    transition: color 0.3s ease;

    &:hover {
      color: #00bd95; 
    }
  }

  p {
    color: #333; 
    line-height: 1.6; 
    margin-bottom: 15px; 
    font-size: 1.1rem; 

    @media (max-width:768px) {
      font-size:1rem; 
    }
    
    &:first-of-type {
      font-weight:bold; 
      color:#00bd95; 
    }
}
`;

export const MissionVisionValues = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   margin-top:40px;
   color:white;

   @media (max-width:768px) {
     flex-direction: column;
     align-items:center;
     text-align:center;
   }
`;

export const ValueItem = styled.div`
   background-color: rgba(255,255,255,0.2); 
   border-radius: 8px;
   padding:15px;
   margin-right:.5rem;
   flex-basis: calc(30% - .5rem); 
   transition: transform .3s ease, box-shadow .3s ease;

   &:hover {
     transform: scale(1.05); 
     box-shadow: 0px 4px 20px rgba(0,189,149,0.8); 
   }

   h3 {
     margin-bottom:.5rem;
     text-align:center;
     color:#008e6f;
   }

   p {
     line-height:.9rem;
     font-size:.9rem;
     margin-bottom:.5rem;
     color:#fff; 
   }

   ul {
     list-style-type:none;
     padding-left:.5rem;

     li {
       color:#ccc;
       font-size:.9rem;
     }
   }

   @media (max-width:768px) {
     flex-basis: auto; 
     margin-right:0; 
     margin-bottom:.5rem; 
   }
`;