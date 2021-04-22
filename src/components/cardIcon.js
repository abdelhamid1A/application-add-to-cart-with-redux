import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function cardIcon(props) {
    return (
        <div className="float-end">
            <Link to="/card">
                <i className="fa fa-shopping-cart"></i>
                <span className="badge bg-danger m-1">{props.totalQu}</span>
            </Link>
        </div>
    )
}
function mapStateToProps(state){
    return {
        totalQu : state.cart.reduce((total,item)=>total+parseInt(item.qte),0)
        // totalQu :state.cart[0].qte
        
    }
}

export default connect(mapStateToProps)(cardIcon)
