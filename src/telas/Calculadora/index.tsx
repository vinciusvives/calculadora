//Importando as Bibliotecas
//import { Button } from '../../components/Button';
//import { Visor } from '../../components/Visor';
//import { Historico } from '../../components/Historico';
//import { Alerta } from '../../components/Alerta';
import React, { useEffect, useRef, useState } from 'react';
import { AppHeader, AppTitle, ButtonContainer, ButtonContainerigual, ButtonContaineroperador, CaixaApp, CaixaTexto, CaixaVisivel, ControladorComprimento, ControladorAltura   } from './styles';
import { Alerta, Button, Historico, Visor  } from './../../components';

//cria componente como o nome "App"
const Calculadora: React.FC = () => {
const ref = useRef<any>(null);


  // variavel que armazena o tipo de erro
  const [Erro, setErro] = useState('')

  //Variavel do Visor 
  const [visorValor, setvisorValor] = useState<string>('0');

  //lista de Numeros para gerar os botões de nuemros
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  //Variavel do primento numento digitrado para primiera conta
  const [NumerosDigitados, setNumerosDigitados] = useState<Array<string>>([]);

  //Variavel da operação que sera realizada
  const [Operacoes, setOperacoes] = useState<Array<'+' | '-' | '*' | '/' | ''>>([]);

  //const [OperacoesDigitados, setOperacoesDigitados] = useState<Array<string>>([]);

  //variavel do historico
  const [HistoricoValor, setHistoricoValor] = useState<string>('0');


  const [Visivel, setVisivel ] = useState<boolean>(true);
  
  const [Altura, setAltura] = useState<number>(0);

    
  useEffect (()=>{
    setAltura(ref!.current!.clientWidth);
  }, [])

  const [Visivel2, setVisivel2 ] = useState<boolean>(true);

  const [Comprimento, setComprimento] = useState<number>(0);

  useEffect (()=>{
    setComprimento(ref!.current!.clientWidth);
  }, [])

  

  //Função que insere os numeros na tela
  function inserirNumeros(numeroNovo: string) {

    //insere o valor no visor
    setvisorValor(visorValor + numeroNovo);

    //insere o valor no historico 
    setHistoricoValor(HistoricoValor + numeroNovo);
  }

  //Reaziza ajustes necessarios para realziar as contas
  function ajustarNumero(numeroErrado: string) {

    //se não tiver digitado nada tratar como 0
    if (numeroErrado == '' || numeroErrado === ',') {

      //retorna o valor 0
      return 0
    }

    //retira o divisor de milhar '.' 
    const numeroSemponto = numeroErrado.replaceAll('.', '');

    //troca as virgulas pelo ponto visto que em EUA se 
    //usa o ('.') no lugar da (',')
    const numeroSemvirgula = numeroSemponto.replaceAll(',', '.');

    //transforma a variavel string para tipo numero
    const numeroCorrigido = parseFloat(numeroSemvirgula)

    //retorna o valor final
    return numeroCorrigido
  }

  //realzia os calculos desejados
  function calcular() {

    //verifica se foi digitado a operação, tratamento de erro (length = tamanho)
    if (Operacoes.length === 0) {

      //limpar a tela 
      setvisorValor('')
      setHistoricoValor('')

      //Mostra para o usuario um erro em POP-up 
      window.alert('Nenhuma operação selecioada!')

      //Sai da função para não realizar o resto do codigo
      return

    }
    //Inicar a variavel que guarda o resultado do calculo
    let resultado = ajustarNumero(NumerosDigitados[0]);

    //realisando a conta para cada numero digitado
    NumerosDigitados.forEach((x: string, index: number) => {

      //armazena o resutlado anterior 
      const NumeroInicial = (resultado);

      //Faz uma comparação para o proximo numero digitado 
      const SegundoNumero = (index + 1 === NumerosDigitados.length) ? visorValor : NumerosDigitados[index + 1]

      //Ajusta o segundo numero da conta
      const numeroSecundario = ajustarNumero(SegundoNumero);

      //pega a operacao da lista 
      const OperacaoAtual = Operacoes[index]

      //realiza a oparação de Adição
      if (OperacaoAtual == '+') {

        //grava o resukltado da Adição
        resultado = NumeroInicial + numeroSecundario
      }

      //realiza a oparação de Subtração
      if (OperacaoAtual == '-') {

        //grava o resukltado da Subtração
        resultado = NumeroInicial - numeroSecundario
        console.log('primeiro numero', NumeroInicial);
        console.log('segundo numero', numeroSecundario);
      }

      //realiza a oparação de Multiplicação
      if (OperacaoAtual == '*') {

        //grava o resukltado da Multiplicação
        resultado = NumeroInicial * numeroSecundario
      }

      //realiza a oparação de Divisão
      if (OperacaoAtual == '/') {

        //grava o resukltado da Divisão
        resultado = NumeroInicial / numeroSecundario
      }
    })//final do forEach

    //Ajusta o resultado do calculo adicionado a virgula no lugar 
    //do ponto
    const resultadoFinal = resultado.toString().replaceAll('.', ',')

    //grava o valor no visor
    setvisorValor(resultadoFinal)

    //grava o valor no Historico
    setHistoricoValor(HistoricoValor + '=' + resultadoFinal)
  }


  function calcular2() { //pode ser usado as mesmas variaveis usadas no calculo1, cada escopo '{}' é independe um do outro.
    setErro('')
    if (Operacoes.length === 0) {

      //limpar a tela 
      setvisorValor('')
      setHistoricoValor('')

      //Mostra para o usuario um erro em POP-up 
      setErro('Nenhuma operação selecioada!')

      //Sai da função para não realizar o resto do codigo
      return

    }
    //Inicar a variavel que guarda o resultado do calculo
    let resultado = ajustarNumero(NumerosDigitados[0]);

    Operacoes.forEach((operacaoAtual: string, index: number) => {


      //armazena o resutlado anterior 
      const NumeroInicial = (resultado);
      //Ajusta o segundo numero da conta
      //Faz uma comparação para o proximo numero digitado 
      const SegundoNumero = (index + 1 === NumerosDigitados.length) ? visorValor : NumerosDigitados[index + 1]

      const numeroSecundario = ajustarNumero(SegundoNumero);

      //realiza a oparação de Adição
      if (operacaoAtual == '+') {

        //grava o resukltado da Adição
        resultado = NumeroInicial + numeroSecundario
      }

      //realiza a oparação de Subtração
      if (operacaoAtual == '-') {

        //grava o resukltado da Subtração
        resultado = NumeroInicial - numeroSecundario
        console.log('primeiro numero', NumeroInicial);
        console.log('segundo numero', numeroSecundario);
      }

      //realiza a oparação de Multiplicação
      if (operacaoAtual == '*') {

        //grava o resukltado da Multiplicação
        resultado = NumeroInicial * numeroSecundario
      }

      //realiza a oparação de Divisão
      if (operacaoAtual == '/') {
        if (numeroSecundario == 0) {
          setErro('Erro! Proibido dividir por 0.')
          return;
        }

        //grava o resukltado da Divisão
        resultado = NumeroInicial / numeroSecundario

      }

    })

    const resultadoFinal = resultado.toString().replaceAll('.', ',')
    setvisorValor(resultadoFinal)

    //grava o valor no Historico
    setHistoricoValor(HistoricoValor + '=' + resultadoFinal)

    // limpa o historico de numeros digitados
    setNumerosDigitados([]);

    // limpa o historico de operacoes digitadas
    setOperacoes([]);
  }

  //Realiza o calculo da porcentagem
  function calculoPorcentagem() {
    setErro('');
    if (NumerosDigitados.length === 0) {
      setErro('Operação Invalida');
      return;
    }
    //Ajusta o primeiro numero da conta porcentagem
    //sendo esse numero o ultimo digitado 
    //ex: (NumerosDigitados[NumerosDigitados.length-1]); length - 1 busca o ultimo numero
    const numeroInicial = ajustarNumero(NumerosDigitados[NumerosDigitados.length - 1]);

    //Ajusta o segundo numero da conta porcentagem
    const numeroSecundario = ajustarNumero(visorValor);

    //faz a conta da porcentagem (x% de Y) onde Y Inicial e x nº visor
    let resultado = numeroInicial * numeroSecundario / 100;

    //Ajusta o resultado do calculo adicionado a viirgula no lugar 
    //do ponto
    const resultadoFinal = resultado.toString().replaceAll('.', ',')

    //grava o valor resultado final no visor
    setvisorValor(resultadoFinal)
    setHistoricoValor(HistoricoValor + '%(=' + resultadoFinal + ')')
  }

  //prepara as variaves para realizar o calculo
  function prepararCalculo(operador: '+' | '-' | '*' | '/' | '') {

    //cria uma lista de numeros digitados(...)pega todos os valores da lista
    setNumerosDigitados([...NumerosDigitados, visorValor])

    //cria uma lista com as operações digitadas
    setOperacoes([...Operacoes, operador])

    //Apaga o valor do visor para digitar o novo numero
    setvisorValor('')

    //Grava o valor do historico
    setHistoricoValor(HistoricoValor + operador)
  }

  //insere a virgula no devido lugar
  function inserirVirgula() {

    //identifica se ja possui a (,) no numero
    const achouVirgula = visorValor.indexOf(',')

    //caso não tenha encontrado a (,), 
    if (achouVirgula == -1) {

      //grava a virgula no visor 
      setvisorValor(visorValor + ',')

      //gava a virgula no Historico
      setHistoricoValor(HistoricoValor + ',')
    }
  }

  //Limpa o valor das variaves 
  function limparTela() {
    //Limpa a tela de erro 
    setErro('')

    //limpa o valor do visor
    setvisorValor('')

    //limpa o valor da lista de operaçoes selecioandas trazendo vazia
    setOperacoes([])

    ////limpa o valor do historico
    setHistoricoValor('')

    //limpa o valor da lista dos  numeros digitados trazendo vazio
    setNumerosDigitados([])
  }

  //exibe o App
  return (
    <CaixaApp>
      <AppHeader>
        <AppTitle>
          
          CALCULADORA DO VINI
        </AppTitle>

        
        <Alerta tipo='danger'>
          {Erro}
        </Alerta>

         {/* Botão para Esconder bloco  */}
        <Button tipo='numero' Title={'Esconder Calculadora'} onClick={() =>setVisivel(!Visivel) }/>
        
        {/*<Button tipo='grupooperacao' Title={'Ocultar Operador'} onClick={() =>setVisivel2(!Visivel2) } 
        />*/}

        {/*Cria caixa delimita o histrico e visor */}
        <CaixaTexto>

          {/*Exibe o histrico passando 'historico valor' como valor do historico */}
          <Historico valor={HistoricoValor} setvalor={setHistoricoValor} />

          {/*Exibe o visor passando 'visor valor' como valor do visor */}
          <Visor valor={visorValor} setValor={setvisorValor} />

          {/*final da caixa que delimita o historico e visor*/}
        </CaixaTexto>
      </AppHeader>

      {/* Esconder bloco  */}
      <ControladorComprimento 
      comprimento = {Visivel?Comprimento:1}
      >
      <CaixaVisivel
      altura = {Visivel?0 : Comprimento}
      ref = {ref}
      >  
      <ButtonContainer //Criando o container com os botões
      >
        {numeros.map((x: string, index: number) => {
          //a função Map executa um bloco de codigo para cada
          //item da lista 'Numeros' e cria um componente 'Button'
          //para cada item da lista
          //X = cada item da lista 'Numeros', um de cada vez em ordem.
          return (
            <Button
              tipo='numeros'
              Title={x}
              onClick={() => inserirNumeros(x)} />
          );
        })}

        
        {/*cria os diversos botões de ação da calculadora */}
        
        <Button tipo='virgula' Title=',' onClick={() => inserirVirgula()} />
        <Button tipo='grupooperacao' Title={'Ocultar Operadores'} onClick={() =>setVisivel2(!Visivel2) } 
        />
        <ControladorComprimento 
          comprimento= {Visivel2?Comprimento:0}
        >
          <CaixaVisivel
          altura = {Visivel2?0: Comprimento}
          ref = {ref}
        >  
        
         <ButtonContaineroperador //Criando o container com os botões
         >
        <Button tipo='somar' Title='+' onClick={() => prepararCalculo('+')} />
        <Button tipo='subtrair' Title='-' onClick={() => prepararCalculo('-')} />
        <Button tipo='multiplicar' Title='*' onClick={() => prepararCalculo('*')} />
        <Button tipo='dividir' Title='/' onClick={() => prepararCalculo('/')} />
        <Button tipo='porcentagem' Title='%' onClick={() => calculoPorcentagem()} />
        
        </ButtonContaineroperador>
        </CaixaVisivel>
        </ControladorComprimento >

        
        <ButtonContainerigual
         >
        <Button tipo='C' Title='C' onClick={() => limparTela()} />
        <Button tipo='igual' Title='=' onClick={() => calcular2()} />
        
        </ButtonContainerigual>
        
        
        
        
      </ButtonContainer>
      </CaixaVisivel>
      </ControladorComprimento >

      

           {/*<ButtonContainerigual
           >
           <Button tipo='C' Title='C' onClick={() => limparTela()} />
           <Button tipo='igual' Title='=' onClick={() => calcular2()} />
        
           </ButtonContainerigual>*/}

        {/*<Button tipo='C' Title='C' onClick={() => limparTela()} />
        <Button tipo='igual' Title='=' onClick={() => calcular2()} />*/}
        
    </CaixaApp>
    
  );
}


// exporta o app para ser usar um outro arquivos 
export default Calculadora;
