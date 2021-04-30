import React from 'react';
import './button.css'



interface IProps {
  Title: string;
  onClick:any;
  className? : string ;  
}
export const Button: React.FC<IProps>=({
  Title, onClick, className }) => {
  return (
    <button className= {'app-button '+className} onClick={onClick} >
    
      {Title}{onClick}
    </button>
   
  )
  
}




