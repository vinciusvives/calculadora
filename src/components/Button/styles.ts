import styled, {css} from 'styled-components';

interface IProps{
  tipo:'igual'| 'C' | 'operacao' | 'virgula' | 'numeros'
}
const cores = {
  igual : css`
    color: #fff;
    background-color: rgb(25, 0, 255);
    border: 1px solid rgb(41, 169, 219);
    border-radius: 5px;
    &:hover{
      background-color: rgb(180, 178, 182);
      transition-duration: 0.5s;
    }
  `,
  C:css`
    color: #fff;
    background-color: rgb(253, 2, 2);
    border: 1px solid rgb(41, 169, 219);
    border-radius: 5px;
    &:hover{
      background-color: rgb(180, 178, 182);
      transition-duration: 0.5s;
    }
  `,
  operacao:css`
  background-color: rgb(250, 182, 94);
  border: 1px solid rgb(41, 169, 219);
  border-radius: 5px;
  &:hover{
    background-color: rgb(180, 178, 182);
  transition-duration: 0.5s;
  }
  `,
  virgula:css`
  border: 1px solid rgb(41, 169, 219);
  border-radius: 5px;
  &:hover{
    background-color: rgb(129, 128, 129);
    transition-duration: 0.5s;
  }
  `,
  numeros:css`
  border: 1px solid rgb(41, 169, 219);
  border-radius: 5px;
  &:hover{
    background-color: rgb(129, 128, 129);
    transition-duration: 0.5s;
  }`,
}
export const CaixaBotao = styled.button<IProps>`
width: 30px;
height: 30px;
margin: 5px;
flex:auto;
${props=>cores[props.tipo]}
`

;
