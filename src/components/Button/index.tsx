import React from 'react';
import { CaixaBotao } from './styles';




interface IProps {
  Title: string;
  onClick:any;
  className? : string ; 
  tipo:'igual'| 'C' | 'operacao' | 'virgula' | 'numeros'| 'somar'| 'dividir'|'multiplicar'|'subtrair'| 'porcentagem'|'numero'|'grupooperacao'
}
export const Button: React.FC<IProps>=({
  Title, onClick, className , tipo}) => {
  return (
    <CaixaBotao tipo={tipo} onClick={onClick} >
    
      {Title}{onClick}
    </CaixaBotao>
   
  )
  
}




