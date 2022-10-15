import React from "react"
import {useParams} from "react-router-dom"
import data from "../../data/data"

function ProductDetails() {
    const {productId} = useParams()
    const thisProduct = data.SanPham.find(prod => prod.id ===parseInt(productId))
    
    return (
        <div>
            <h1>{thisProduct.tenSanPham}</h1>
            <img src={thisProduct.hinhAnh} alt="noi dung"></img>
        </div>
    )
}

export default ProductDetails