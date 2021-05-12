import React, { ReactNode } from 'react';
import { CaixaAlerta } from './styles';

interface IProps {
    tipo:'danger';
    children?:ReactNode;

}

export const Alerta : React.FC<IProps>=({
    tipo, children
})=>{
    if (children){
        return (
            <CaixaAlerta tipo ={tipo}>
                {children}
            </CaixaAlerta>
        );
    }
    return null
}