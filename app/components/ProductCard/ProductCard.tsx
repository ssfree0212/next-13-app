import React from "react";
import AddToCart from "@/app/components/AddToCart";
import styles from './ProductCard.module.css';


const ProductCard = () => {
    return(
        <>
            <div className={styles.cardContainer}> <AddToCart /> </div>

            <div className='p-5 my-5 bg-sky-400 text-white text-3xl hover:bg-sky-800'> <AddToCart /> </div>
            <div > <AddToCart /> </div>
        </>

    )
}

export default ProductCard;