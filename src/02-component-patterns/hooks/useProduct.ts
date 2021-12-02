import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChange );

    const increaseBy = (valueIncrease: number) => {

        if ( isControlled.current ) {
            return onChange!({ count: valueIncrease, product });
        }

        const newValue = Math.max( counter + valueIncrease, 0 );

        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter(value);
    }, [value])

    return {
        counter, increaseBy
    }
}

export default useProduct;
