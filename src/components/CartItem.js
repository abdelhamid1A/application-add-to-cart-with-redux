import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../store/actions/action'

function CartItem(props) {
    console.log(props.productIndex);
    const {productData,productIndex} = props
    const {product} = productData
    console.log(productIndex);
    return (
        <div className="card">
            <img src="./logo192.png" className="card-img-top" alt="logo" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price}</p>
                <p className="card-text">Qte : {productData.qte}</p>
                <p className="card-text">Total : {productData.qte * product.price }</p>
                <p className="card-text">index : {productIndex}</p>
                <button href='#' className="btn btn-danger" onClick={()=>props.removeFromCart(productIndex)}><i className="fa fa-trash"></i> Delete</button>
            </div>
        </div>
    )
}
// function mapDispatchToProps(dispatch){
//     return {
//         removeFromCart : (index)=>dispatch(removeFromCart(index))
//     }
// }
export default connect(null,{removeFromCart})(CartItem)