import React from 'react'

export default function productItem(props) {
    const {productData} = props
    return (
        <div className="card">
            <img src="./logo192.png" className="card-img-top" alt="logo" />
            <div className="card-body">
                <h5 className="card-title">{productData.title}</h5>
                <p className="card-text">{productData.price}</p>
                <a href={"/product/"+productData._id} className="btn btn-primary">buy</a>
            </div>
        </div>
    )
}
