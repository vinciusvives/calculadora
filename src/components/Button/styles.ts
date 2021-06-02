import styled, {css} from 'styled-components';

interface IProps{
  tipo:'igual'| 'C' | 'operacao' | 'virgula' | 'numeros'| 'somar'|'dividir'| 'multiplicar'|'subtrair'|'porcentagem'|'numero'|'grupooperacao'
}
const cores = {
  igual : css`
    color: #fff;
    background-color: rgb(25, 0, 255);
    border: 1px solid rgb(41, 169, 219);
    width: 30px;
    height: 30px;
    border-radius: 5px;
    //box-shadow: 0 9px #999;
    &:hover{
      background-color: rgb(180, 178, 182);
      transition-duration: 0.5s;
    }
    &:active{
      background-color: #fff;
      //box-shadow: 0 5px #666;
      transform: translatex(4px)
    }
  `,
  C:css`
    color: #fff;
    background-color: rgb(253, 2, 2);
    border: 1px solid rgb(41, 169, 219);
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size:13px;
    font-family:Verdana;
    font-weight:bold;
    &:hover{
      background-color: rgb(180, 178, 182);
      transition-duration: 0.5s;
    }
  `,
  operacao:css`
  background-color: rgb(250, 182, 94);
  border: 1px solid rgb(41, 169, 219);
  border-radius: 5px;
  width: 30px;
  height: 30px;
  
  &:hover{
    background-color: rgb(180, 178, 182);
  transition-duration: 0.5s;
  
  }
  `,
  grupooperacao:css`
  flex: 50px;
  //width: 50%;
  float: right;
  in-width: 130px;
  //display: inline-block;
 // vertical-align: top
  border:1px solid #25692A;
  border-radius:10px;
 // display:inline-block;
  
  font-family:Verdana;
  font-weight:bold;
  font-size:14px;
  //padding:3px 6px;
  //text-decoration:none;
  background: #333;
  //border-radius: 15px;
  color: #ccc;
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  width: 130px;
  //width: 60px;
  //border: 2px;
  
  transition-duration: 0.9s;
  overflow: hidden;
   
  &:hover{
  background: #338033;
 
  color: #fff;
  &:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }}
  `,
  virgula:css`
  border: 1px solid rgb(41, 169, 219);
  border-radius: 5px;
  width: 30px;
  height: 30px;
  &:hover{
    background-color: rgb(129, 128, 129);
    transition-duration: 0.5s;
  }
  `,
  numeros:css`
  border: 1px solid rgb(41, 169, 219);
  border-radius: 5px;
  width: 30px;
  height: 30px;
  &:hover{
    background-color: rgb(129, 128, 129);
    transition-duration: 0.5s;
  }`,
  somar:css`
  background-color: rgb(250, 182, 94);
  border: 1px solid rgb(41, 169, 219);
  border-radius: 15px;
  width: 30px;
  height: 30px;
  transition: .6s;
  font-family:Verdana;
  font-weight:bold;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  &:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color:rgb(129, 128, 129);
  }
  &:active{
    background-color: #fff;
    //box-shadow: 0 5px #666;
    transform: translateY(4px)
  }`,
  dividir:css`
  background-color: rgb(41, 169, 219);
  border: 1px solid rgb(250, 182, 94);
  width: 30px;
  height: 30px;
  border-radius: 15px;
  font-family:Verdana;
  font-weight:bold;
  //box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  //&:hover{
    //box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    //background-color:rgb(129, 128, 129);
  //}
  &:active{
    background-color: #fff;
    box-shadow: 0 5px #666;
    transform: translateY(4px)
  }
  
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  
  &:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
  
  `,
  multiplicar:css`
  color: black;
  height: 30px;
  font-weight:bold;
  border: 1px solid rgb(41, 169, 219);
  border-radius: 5px;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  font-family:Verdana;
  font-weight:bold;
  &:hover {
  transition: 1s ease-in-out;
  background-color: rgb(250, 182, 94);
  //background: #4F95DA;
  }
  &:svg{
  position: absolute;
  left: 0;
  top: 0; 
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
  }
  &:active{
    background-color: #fff;
    //box-shadow: 0 5px #666;
    transform: translateY(4px)
  }
  `,
  subtrair:css`
  background: #333;
  font-family:Verdana;
  font-weight:bold;
  color: #ccc;
  width: 30px;
  height: 30px;
  border: 2px;
  border-radius: 4px;
  //transition: .6s;
  overflow: hidden;
  transition-duration: 1s;
  
  &:hover{
  //background: #338033;
  
  color: #fff;
  background: rgb(0,36,4);
  background: linear-gradient(90deg, rgba(0,36,4,1) 0%, rgba(24,121,9,1) 35%, rgba(10,255,0,1) 100%);
  transition-duration: 1s;
  }
  &:active{
    background-color: #fff;
    transform: translateY(-4px) translatex(-6px);
    
  }
  `,
  porcentagem:css`
  
  border:1px solid #25692A;
  border-radius:4px;
  //display:inline-block;
  width: 30px;
  height: 30px;
  font-family:Verdana;
  font-weight:bold;
  font-size:13px;
  padding:3px 6px;
  text-decoration:none;
  background: #333;
  //border-radius: 15px;
  //color: #ccc;
 
  //border: 2px;
  //border-radius: 4px;
  transition-duration: 0.6s;
  overflow: hidden;
  
  &:hover{
  background: #338033;
  
  color: #fff;
  
  }
  &:active{
    background-color: #fff;
    transform: translateY(10px) translatex(-10px);
    
  }`,

  numero:css`
  flex: 0;
  
  Width: 120px;
  height: 90px;
  float: left ;
  border:1px solid #25692A;
  border-radius:4px;
  font-family:Verdana;
  font-weight:bold;
  font-size:16px;
  padding:3px 6px;
  text-decoration:none;
  background: #333;
  color: #ccc;
  box-shadow: 0 0 5px 0 #3498db inset, 0 0 10px 4px #3498db;
  transition-duration: 0.9s;
  overflow: hidden;
  &:hover{
  background: #338033;
  color: #fff;
  &:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }}
  
  `,


}

export const CaixaBotao = styled.button<IProps>`

margin: 4px;
flex:auto;
cursor: pointer;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.20);
${props=>cores[props.tipo]}
`;




