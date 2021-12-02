import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"
import { products } from '../data/products';

import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';



const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={ product }
                            className="bg-dark"
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>

                    ))
                }

            </div>

            <div className="shopping-card">
            {
                Object.entries(shoppingCart).map(([key, product]) =>(
                        <ProductCard
                            key={key}
                            product={ product }
                            className="bg-dark"
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className="custom-image"/>
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                ))
            }
            </div>

        </div>
    )
}

export default ShoppingPage
