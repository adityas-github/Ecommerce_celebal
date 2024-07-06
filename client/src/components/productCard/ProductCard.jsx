import React from 'react'
import { Link } from 'react-router-dom'
import classes from './productCard.module.css'

const ProductCard = ({ product }) => {
    // const data = [
    //     {id: crypto.randomUUID(), title: 'product 1', desc: 'best product', stars: 5, price: 99.99, photo: sunglasses},
    //     {id: crypto.randomUUID(), title: 'product 1', desc: 'best product', stars: 5, price: 99.99, photo: sunglasses},
    //     {id: crypto.randomUUID(), title: 'product 1', desc: 'best product', stars: 5, price: 99.99, photo: sunglasses},
    //     {id: crypto.randomUUID(), title: 'product 1', desc: 'best product', stars: 5, price: 99.99, photo: sunglasses},
    //     {id: crypto.randomUUID(), title: 'product 1', desc: 'best product', stars: 5, price: 99.99, photo: sunglasses},
    //    ]

  return (
    <div className={classes.container}>
        <Link to={`/productDetail/${product._id}`} className={classes.wrapper}>
            <img src={`http://localhost:5500/images/${product.firstImg}`} className={classes.productImg} alt="" />
            <div className={classes.productInfo}>
              <h2 className={classes.productTitle}>{product.title}</h2>
              <span className={classes.productPrice}><span>$</span>{Number(product?.price).toFixed(2)}</span>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard