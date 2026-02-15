import {useCart} from "../context/CartContext";

const ProductCard = ({product}) => {
    const {addToCart} = useCart();
    
    return (<div className = "bg-white rounded-lg shadow p-4 flex flex-col">
               <img src={product.image} alt={product.name} className = "h-40 object-cover rounded mb-4"/>
               <h2 className = "text-xl font-semibold">
                   {product.name}
               </h2>
               <p className = "text-gray-500 text-sm mb-2">
                    {product.description}
               </p>
               <p className = "font-bold text-lg">
                  ${product.price}
               </p>
               
               <button onClick = {() => addToCart(product)} className = "bg-black text-white mt-3 px-4 py-2 rounded-md transition-all hover:cursor-pointer hover:-translate-y-1 duration-200">
                   Add To Cart
               </button>
             </div>);
}

export default ProductCard;