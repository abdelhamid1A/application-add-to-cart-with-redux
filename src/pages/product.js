import React from 'react'
import ProductItem from '../components/productItem'
import Products from '../api/products'

export default function Product() {
    const [productsArray,setProduct] = React.useState([])
    React.useEffect(() => {
        Products.getProducts().then(data=>{
            // console.log(data)
            setProduct(data)
        })
        // console.log(products);
        return () => {
            // cleanup
        }
    }, [productsArray])
    console.log(productsArray);
    return (
        <div className="container">
            <div className="row mt-3">
                {productsArray.map((productData)=>(
                    <div className="col-md-4" key={productData._id}>
                        <ProductItem  productData={productData}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
