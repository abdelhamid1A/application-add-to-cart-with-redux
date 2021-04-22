import React from 'react'
import Products from './products.json'

export  function getProducts() {
    return Promise.resolve(Products)
}
export function getOneProduct(id){
    const prd = Products.find(item =>item._id === id)
    return Promise.resolve(prd)
}
export default {getProducts,getOneProduct}
