import { createContext, CSSProperties } from 'react';
import { ReactElement } from "react";

import styles from '../styles/styles.module.css';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import { JsxAttribute } from 'typescript';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

/* Patrón: Compound Component Pattern */
export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div
                className={ `${styles.productCard} ${className}` }
                style={ style }
            >
                { children }
            </div>
        </Provider>
        
    )
}

