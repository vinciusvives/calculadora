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