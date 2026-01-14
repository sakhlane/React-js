// function MapMethod(){
//     let names = ['sakhlane','saakhib','sahil','tahir']
//     let ages = [29,27,24,18]
//     return ( <>
//         {names.map((name ,index)=>{
//           return  <h1>{name} - {ages[index]}</h1> 
//         })}
//     </>
//     );
// }

// export default MapMethod;
/*
🧩 Practice Problem: Product List
👉 Problem Statement

You are given an array of products.
Each product has:

id

name

price

🎯 Task

Using the map() method, display all products on the screen like this:

Product: Laptop
Price: $800
----------------

🧪 Starter Code (You complete the map part) */
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  return (
    <>
      <h2>Products</h2>

      {/* Use map() here */
        products.map((product)=>{
            return <>
            <p key={product.id}>Product:{product.name} </p>
            <p key={product.id}>price:{product.price} </p>
            </>
        })
      }
      
    </>
  );
}

export default ProductList;