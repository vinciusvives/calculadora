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
    const semPonto = valor.replace ('.','');
    const partesDotexto = semPonto.split(',');
    const parteInteira = partesDotexto [0];
    const parteFracional = partesDotexto [1];
    if (parteInteira.length>3){

      const textoEsquerda = parteInteira.substring(0,parteInteira.length -3);
      const textoDireita = parteInteira.substring(parteInteira.length -3);
      const textoFinal = textoEsquerda + '.' + textoDireita + 
      (parteFracional != undefined ? (',' + parteFracional) : (''));//operador ternário, If else
      setValor (textoFinal)
    
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    //let sValor = '0';
    let ehNovoNumero = true;

    const atualizaVisor = ()=>{
      let [parteInteira, parteDecimal] = valor.split(',');
      let v = '';
      let c = 0;
      for (let i = parteInteira.length - 1; i>=0; i--){
        if (++c>3){
          v = '.'+v;
          c = 1;
        }
        v=parteInteira[i] + v;
      }
      v = v+ (parteDecimal? ',' + parteDecimal : '');
     //document.querySelector('#Visor').innerText = v;
      setValor  (v)
    }
    //atualizaVisor ();






////////////////////////////////////////////////////////////////////////////////////
  
    //ajusta o zero quando for so zero
   // const primeiroDigito = valor.substring (0,1)
   // const textoZero = primeiroDigito == '0';
    ///if (textoZero == true && valor.length > 1 && parteFracional== undefined){
    //  const textoSemzero = valor.substring (1)
   //   setValor (textoSemzero)
   // } 
  

  
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