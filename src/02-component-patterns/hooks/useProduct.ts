import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);


    const increaseBy = (valueIncrease: number) => {
        let totalCounter = counter + valueIncrease;
        if (initialValues?.maxCount) {
            totalCounter = Math.min( totalCounter, initialValues.maxCount );
        }

        const newValue = Math.max( totalCounter, 0 );
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);
    }, [value]);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        }
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && counter >= initialValues?.maxCount,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    }
}

export default useProduct;
