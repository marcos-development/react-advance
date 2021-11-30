import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"


const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Coffee Mug - Card',
        img: './coffee-mug.png'
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title title={"Hola"} />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={ product }>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage
