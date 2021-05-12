import styled, { css } from 'styled-components';
interface IProps {
  tipo:'danger'
}

const cores = {
  danger:css`
  //color: #fff;
  //text-shadow: 2px 2px 4px #000000;
  color: #7f2d2b;
  //background-color: #0aff00;
  background-color: #fddddd;
  border-color: #fcd0cf;
  `
}

export const CaixaAlerta = styled.div<IProps>`

position: relative;
padding: .75rem 1.25rem;
margin-bottom: 1rem;
border: 1px solid transparent;
border-radius: .25rem;

${props=>cores[props.tipo]}
`;

