import React from 'react'
import CartItem from '../components/CartItem'
import Products from '../api/products'
import {connect} from 'react-redux'

function Card(props) {
    const [productsArray,setProduct] = React.useState([])
    // React.useEffect(() => {
    //     Products.getProducts().then(data=>{
    //         // console.log(data)
    //         setProduct(data)
    //     })
    //     // console.log(products);
    //     return () => {
    //         // cleanup
    //     }
    // }, [productsArray])
    // console.log(productsArray);
    return (
        <div className="container">
            <div className="row mt-3">
                {props.cart.map((item,index)=>(
                    <div className="col-md-3" key={item.product._id} >
                        <CartItem  productData={item} productIndex={index}/>
                    </div>
                ))}
                
            </div>
            <p>Total : {props.total}</p>
            <button className="btn btn-primary btn-block col-12 m-2">Pay</button>
        </div>
    )
}
function mapStateToProps(state){
    // const {state} = state
    const {cart} = state
    return {
        cart : cart,
        // total : cart[0].qte * cart[0].product.price
        total : cart.reduce((total,item)=>total +item.qte*item.product.price,0)
    }
}

export default connect(mapStateToProps)(Card)
