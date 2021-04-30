import React, { useEffect, useState } from 'react';
import './historico.css'

interface IProps{
    valor:string;
    setvalor:(e:string)=>void;
  }

  export const Historico:React.FC < IProps > = ({valor,setvalor})=>{
  //regras para o Historico
  useEffect (()=>{
    //ajusta separador de milhar
    const temPontohistorico = valor.indexOf ('.');
    const partesDotexto = valor.split(',');
    const parteInteira = partesDotexto [0];
    const parteFracional = partesDotexto [1];
    if (parteInteira.length>3 && temPontohistorico == -1){

      const textoEsquerda = parteInteira.substring(0,parteInteira.length-3);
      const textoDireita = parteInteira.substring(parteInteira.length-3);
      const textoFinal = textoEsquerda + '.' + textoDireita +
      (parteFracional != undefined ? (',' + parteFracional) : (''));//operador ternário, If else
      setvalor (textoFinal)
      
    }
    //ajusta o zero quando for so zero
    const primeiroDigitohistorico = valor.substring (0,1)
    const textoZerohistorico = primeiroDigitohistorico =='0';
    if (textoZerohistorico == true && valor.length > 1 && parteFracional == undefined){
      const textoSemzerohistorico = valor.substring (1)
      setvalor (textoSemzerohistorico)
    }
    
}, [valor]);

//Criando Scroll do Historico
useEffect(()=>{
  const historico = document.getElementById('Historico');
  historico?.scroll({
    left: historico.scrollWidth, behavior:'smooth'
  })

}, [valor]);

//Exibe o Historico
return(
      <p className='App-historico' id='Historico'>

        {valor}
      </p>
);

}

  