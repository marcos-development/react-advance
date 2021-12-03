import { createContext, CSSProperties } from 'react';
// import { ReactElement } from "react";

import styles from '../styles/styles.module.css';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

/* Patrón: Compound Component Pattern */
export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
    initialValues
}: Props) => {


    const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({ onChange, product, value, initialValues });


    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div
                className={ `${styles.productCard} ${className}` }
                style={ style }
            >
                { children({
                    counter,
                    isMaxCountReached,
                    maxCount,
                    product,
                    increaseBy,
                    reset
                })
                }
            </div>
        </Provider>
        
    )
}

