import React from 'react'
import Products from '../api/products'
import {connect} from 'react-redux'
import {addToCart} from '../store/actions/action'

function OneProduct(props) {
    const [product,setProduct] = React.useState({product:'',qte:1,loding:true})
    // const [qte,setQte] = React.useState(1)
    React.useEffect(() => {
        const id = props.match.params.id
        // console.log(id);
        Products.getOneProduct(parseInt(id)).then(prd=>{
            // console.log(prd)
            setProduct({product:prd,loding:false,qte:1})
        })
        return () => {
            // cleanup
        }
    }, [])
    // console.log(product.loding);
    // console.log(product.qte);
    

    function handelQte (event){
        // event.preventDefault()
        const val = event.target.value
        if(val<1){
            return;
        }
        setProduct({...product,qte:event.target.value})
    }
    // console.log(product.qte);
    function addToCart (product) {
        props.addToCart(product, product.qte);
    }
    if(product.loding){
        return 'loding'
    }
    else{

        return (
            <div className="container">
                <img src="../logo192.png" className="card-img-top" alt="logo" />
                <span>{product.product.title}</span>
                <br/>
                <span>{product.product.price}</span>
                <br/>
                <input type="number" name="" id="" 
                onChange={(event)=>handelQte(event)}
                value={product.qte}
                />
                <br/>
                <span>total : {product.qte*product.product.price}</span>
                <button className="btn btn-primary" onClick={()=>addToCart(product)}>add to card</button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {
        addToCart: (info, qte) => dispatch(addToCart(info, qte)),
    };
}

export default connect(null,mapDispatchToProps)(OneProduct);
