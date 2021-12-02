import { useState } from 'react'
import { GenericShoppingCart, Product, ShoppingCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<GenericShoppingCart>({})

    const onProductCountChange = ({ count, product }: { count:number, product: Product}) => {

        setShoppingCart( oldShopping => {

            if (count) {
                return {
                    ...oldShopping,
                    [product.id]: {...product, count}
                }
            } else {
                // Object.keys(oldShopping)
                //         .filter(key => key === product.id ? delete oldShopping[key] : null)
                const { [product.id]: toDelete, ...rest } = oldShopping;
                return { ...rest };
            }
        })
        
    }


    return {
        shoppingCart,
        onProductCountChange
    }
}

