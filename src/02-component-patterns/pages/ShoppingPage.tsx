import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            
                
            <ProductCard
                product={ product }
                className="bg-dark"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ counter, isMaxCountReached, increaseBy, reset }) => (
                        <>
                            {console.log(isMaxCountReached)}
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons" />
                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            { !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
                            <span>{ counter }</span>
                        </>
                    )
                }
            </ProductCard>



        </div>
    )
}

export default ShoppingPage
