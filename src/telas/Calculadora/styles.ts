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

//display: inline-block;
background-color: #282c34;
flex-wrap: wrap;
text-align: justify;
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
font-size: calc(10px + 2vmin);
color: white;


`;

export const ButtonContainer = styled.div`
width: 130px;
flex-wrap: wrap;
margin: 0 auto;
border: 0px solid #000;
align-items: center;
justify-content:space-evenly;
display:flex;
cursor:pointer;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

`;

export const ButtonContaineroperador = styled.div`
width: 130px;
flex-wrap: wrap;
margin: 0 auto;
border: 0px solid #000;
align-items: center;
justify-content:space-evenly;
display:flex;
flex-direction: row;
`;

export const ButtonContainerigual = styled.div`
width: 130px;
flex-wrap: wrap;
margin: 0 auto;
border: 0px solid #000;
align-items: center;
//justify-content:space-evenly;
display:flex;
`;

export const CaixaApp = styled.div`
width: 100%;
text-align:left ;

//background-color: #282c34;
`;

export const AppTitle = styled.p`
//float: right;
//display: inline-block;
color: white;
text-shadow: 2px 2px 5px #000000;
border-radius: 4px;
padding: 0.5rem 1rem;
margin: 0.5rem 1rem;
background: white;
border: 2px solid white;
//color: rgb(88, 228, 24);
font-size: 30px;
//text-align: center;
margin-top: 4px;
`;

interface IPropsControladorAltura {
  altura:number;
}

export const ControladorAltura  = styled.div < IPropsControladorAltura>`
transition-duration: 0.5s;
overflow: hidden;
width: ${props => `${props.altura}px`}
`;


export const CaixaVisivel = styled.div <IPropsControladorAltura>`
transition-duration: 0.5s;
position: relative;
right: ${props => `-${props.altura}px`}
`;

interface IPropsControladorComprimento {
  comprimento:number;
}
{/*export const ControladorComprimento  = styled.div < IPropsControladorComprimento>`
transition-duration: 0.5s;
overflow: hidden;
width: ${props => `${props.comprimento}px`}
`;
*/}
export const ControladorComprimento  = styled.div < IPropsControladorComprimento>`
transition-duration: 0.5s;
overflow: hidden;
right: ${props => `${props.comprimento}px`}
`;