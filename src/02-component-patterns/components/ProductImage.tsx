import { useContext } from "react";

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';



export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext);

    const imgToShow = img 
                        ? img : (product.img
                            ? product.img : noImage);

    return (
        <img className={ styles.productImg } src={ imgToShow } alt="Coffee Mug" />
    )
}