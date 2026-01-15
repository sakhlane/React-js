function ProductCard({product}){
  const  {title, price, rating , inStock} = product;
    return <>
        <p>Product Name: {title}</p>
        <p>Product Price: {price}</p>
        <p>Product Rating: {rating}</p>
        <p>Product inStock: {inStock}</p>
    </>
}

export default ProductCard;