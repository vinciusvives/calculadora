import React, { useEffect, useState } from 'react';
import { CaixaVisor } from './styles';


interface IProps{
  valor:string;
  setValor:(e:string)=>void;
}

export const Visor:React.FC < IProps > = ({valor,setValor})=> {
  
  
  //regras para o Visor
  useEffect(()=>{
    //ajusta separador de milhar
    const temPonto = valor.indexOf ('.');
  
    const partesDotexto = valor.split(',');
    const parteInteira = partesDotexto [0];
    const parteFracional = partesDotexto [1];
    if (parteInteira.length>3 && temPonto == -1){

      const textoEsquerda = parteInteira.substring(0,parteInteira.length-3);
      const textoDireita = parteInteira.substring(parteInteira.length-3);
      const textoFinal = textoEsquerda + '.' + textoDireita + 
      (parteFracional != undefined ? (',' + parteFracional) : (''));//operador ternário, If else
      setValor (textoFinal)
    
    }

  
    //ajusta o zero quando for so zero
    const primeiroDigito = valor.substring (0,1)
    const textoZero = primeiroDigito == '0';
    if (textoZero == true && valor.length > 1 && parteFracional == undefined){
      const textoSemzero = valor.substring (1)
      setValor (textoSemzero)
    } 
  

  
  }, [valor]);

  //Criando Scrool do Visor
  useEffect(()=>{
    const visor = document.getElementById('Visor');
    visor?.scroll({
      left: visor.scrollWidth, behavior:'smooth'
    })

  }, [valor]);

  //Exibe o Visor
  return(
    <CaixaVisor id='Visor'>
           {valor}
    </CaixaVisor>
  );

    
  }