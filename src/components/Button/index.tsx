import React from 'react';
import { CaixaBotao } from './styles';




interface IProps {
  Title: string;
  onClick:any;
  className? : string ; 
  tipo:'igual'| 'C' | 'operacao' | 'virgula' | 'numeros'
}
export const Button: React.FC<IProps>=({
  Title, onClick, className , tipo}) => {
  return (
    <CaixaBotao tipo={tipo} onClick={onClick} >
    
      {Title}{onClick}
    </CaixaBotao>
   
  )
  
}




