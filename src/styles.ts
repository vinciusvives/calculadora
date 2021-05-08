import styled from 'styled-components';

export const CaixaTexto = styled.div`
display: flex;
  width: 120px;
  border: 1px solid #000;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: #3a404d;
  height: 100px;
  min-height: 100px;
  max-width: 120px;
  overflow-x:hidden;
`;

export const AppHeader = styled.header`
background-color: #282c34;
text-align: justify;
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

export const ButtonContainer = styled.div`
width: 130px;
flex-wrap: wrap;
margin: 0 auto;
border: 1px solid #000;
align-items: center;
justify-content:space-evenly;
display:flex;
`;

export const CaixaApp = styled.div`
 
text-align:left ;
background-color: #282c34;
`;

export const AppTitle = styled.p`
display: inline-block;
color: white;
text-shadow: 2px 2px 5px #000000;
border-radius: 4px;
padding: 0.5rem 1rem;
margin: 0.5rem 1rem;
background: white;
border: 2px solid white;
//color: rgb(88, 228, 24);
font-size: 30px;
text-align: center;
margin-top: 4px;
`
