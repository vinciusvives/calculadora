//Importando as Bibliotecas
import React, { useState} from 'react';
import './App.css';
import { Button } from './components/Button';
import { Visor } from './components/Visor';
import { Historico } from './components/Historico';



//cria componente como o nome "App"
const App: React.FC = ()=> {

 //Variavel do Visor 
const [visorValor, setvisorValor] = useState<string>('0');

//lista de Numeros para gerar os botões de nuemros
const numeros=['1','2', '3', '4', '5', '6', '7', '8', '9', '0'];

//Variavel do primento numento digitrado para primiera conta
const [PrimeiroNumero, setPrimeiroNumero]=useState<string>('0');

//Variavel da operação que sera realizada
const [Operacao, setOperacao]=useState<'+'|'-'|'*'|'/'|''>('');

//variavel do historico
const [HistoricoValor, setHistoricoValor] = useState < string > ('0');

//const [Porcentagem, setPorcentagem] = useState <'%'>('0');

//Função que insere os numeros na tela
function inserirNumeros (numeroNovo:string){

  //insere o valor no visor
  setvisorValor(visorValor + numeroNovo);

  //insere o valor no historico 
  setHistoricoValor (HistoricoValor + numeroNovo);
}

//Reaziza ajustes necessarios para realziar as contas
function ajustarNumero (numeroErrado:string){

  //se não tiver digitado nada tratar como 0
  if (numeroErrado == ''){

    //retorna o valor 0
    return 0
  }

  //retira o divisor de milhar '.' 
  const numeroSemponto = numeroErrado.replaceAll('.','');

  //troca as virgulas pelo ponto visto que em EUA se 
  //usa o ('.') no lugar da (',')
  const numeroSemvirgula = numeroSemponto.replaceAll(',','.');

  //transforma a variavel string para tipo numero
  const numeroCorrigido = parseFloat(numeroSemvirgula)

  //retorna o valor final
  return numeroCorrigido
}

//realzia o calculo desejado
function calcular() {



  //Ajustar o primeiro numero da conta
  const numeroInicial = ajustarNumero (PrimeiroNumero);

  //Ajusta o segundo numero da conta
  const numeroSecundario = ajustarNumero (visorValor);

  //Inicar a variavel que guarda o resultado do calculo
  let resultado = 0;

  //realiza a oparação de Adição
  if(Operacao=='+'){

    //grava o resukltado da Adição
    resultado=numeroInicial+numeroSecundario
  }

  //realiza a oparação de Subtração
  if(Operacao=='-'){

    //grava o resukltado da Subtração
    resultado=numeroInicial-numeroSecundario
    console.log('primeiro numero', numeroInicial);
    console.log('segundo numero', numeroSecundario);
  }

  //realiza a oparação de Porcentagem
  //if(Operacao=='%'){

    //grava o resultado da porcentagem
  //  resultado=  numeroInicial + numeroSecundario/100

  //  console.log('primeiro numero', numeroInicial);
  //  console.log('segundo numero', numeroSecundario);
    
   
  //}

  //realiza a oparação de Multiplicação
  if(Operacao=='*'){

    //grava o resukltado da Multiplicação
    resultado=numeroInicial*numeroSecundario
  }

  //realiza a oparação de Divisão
  if(Operacao=='/'){

    //grava o resukltado da Divisão
    resultado=numeroInicial/numeroSecundario
  
  }
  //tratamento de erro caso não tenha nenhuma oparação selecionada
  if (Operacao == ''){

    //traz o resultado como 0
    resultado = 0

    //Mostra para o usuario um erro em POP-up 
    window.alert ('Nenhuma operação selecioada!')

    //Sai da função para não realizar o resto do codigo
    return
  }

  //Ajusta o resultado do calculo adicionado a viirgula no lugar 
  //do ponto
  const resultadoFinal = resultado.toString().replaceAll('.', ',')

  //grava o valor no visor
  setvisorValor(resultadoFinal)

  //grava o valor no Historico
  setHistoricoValor (HistoricoValor+'='+resultadoFinal)
} 
//Realiza o calculo da porcentagem
function calculoPorcentagem (){
  //Ajusta o primeiro numero da conta porcentagem
  const numeroInicial = ajustarNumero (PrimeiroNumero);

  //Ajusta o segundo numero da conta porcentagem
  const numeroSecundario = ajustarNumero (visorValor);

  //faz a conta da porcentagem (x% de Y) onde Y Inicial e x nº visor
  let resultado = numeroInicial*numeroSecundario/100;

  //Ajusta o resultado do calculo adicionado a viirgula no lugar 
  //do ponto
  const resultadoFinal = resultado.toString().replaceAll('.', ',')
 
 //grava o valor resultado final no visor
  setvisorValor(resultadoFinal)
  setHistoricoValor(HistoricoValor + '%(='+resultadoFinal+')')
}



//prepara as variaves para realizar o calculo
function prepararCalculo (operador:'+'|'-'|'*'|'/'|''){

  //grava qual foi o primeiro numero digitado
  setPrimeiroNumero(visorValor) 

  //Grava a operação escolhida
  setOperacao(operador)

  //Apaga o valor do visor para digitar o novo numero
  setvisorValor('')

  //setPorcentagem (resultado)

  //Grava o valor do historico
  setHistoricoValor (HistoricoValor + operador)
}

//insere a virgula no devido lugar
function inserirVirgula (){

  //identifica se ja possui a (,) no numero
  const achouVirgula=visorValor.indexOf(',')

  //caso não tenha encontrado a (,), 
  if (achouVirgula == -1){

    //grava a virgula no visor 
    setvisorValor(visorValor + ',')

    //gava a virgula no Historico
    setHistoricoValor(HistoricoValor + ',')
  }
    
}

//Limpa o valor das variaves 
function limparTela (){

  //limpa o valor do visor
  setvisorValor ('')

  //limpa o valor da oepração selecioanda
  setOperacao ('')

  ////limpa o valor do historico
  setHistoricoValor ('')

  //limpa o valor di primeiro numero do calculo
  setPrimeiroNumero ('')
}
//exibe o App
  return (
    <div className="App">
      

      <header className="App-header">
              
        <p>

          CALCULADORA DO VINI
         
        </p>
        {/*Cria caixa delimita o histrico e visor */}
        <div className = 'caixa-texto'>


        {/*Exibe o histrico passando 'historico valor' como valor do historico */}
        <Historico valor = {HistoricoValor}setvalor={setHistoricoValor}/>

        {/*Exibe o visor passando 'visor valor' como valor do visor */}
        <Visor valor = {visorValor}setValor={setvisorValor}/>
        
        {/*final da caixa que delimita o historico e visor*/}
        </div>
        
        
      </header>


      <div className = 'Button-container '//Criando o container com os botões
      > 

        {numeros.map((x:string, index:number)=>{
          //a função Map executa um bloco de codigo para cada
          //item da lista 'Numeros' e cria um componente 'Button'
          //para cada item da lista
          //X = cada item da lista 'Numeros', um de cada vez em ordem.
          return(
            
            <Button className = 'numeros'
              Title={x} 
              onClick = {()=>inserirNumeros(x)}/>
              
            );
        })}
        
        {/*cria os diversos botões de ação da calculadora */}
        <Button className = 'virgula' Title = ',' onClick = {()=> inserirVirgula()}/>
        <Button className = 'operacao' Title = '+' onClick = {()=> prepararCalculo('+')}/>
        <Button className = 'operacao'Title = '-' onClick = {()=> prepararCalculo('-')}/>
        <Button className = 'operacao'Title = '*' onClick = {()=> prepararCalculo('*')}/>
        <Button className = 'operacao'Title = '/' onClick = {()=> prepararCalculo('/')}/>
        <Button className = 'operacao'Title = '%' onClick = {()=> calculoPorcentagem()}/>
        <Button className = 'limpar' Title = 'Limpar' onClick={()=> limparTela ()}/>
        <Button className = 'igual' Title = '=' onClick = {()=> calcular()}/>
      
        
     </div>
     
    

            
      
    </div>
    
  );
}
// exporta o app para ser usar um outro arquivos 
export default App;
