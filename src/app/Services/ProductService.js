import { Stripe } from "../utils/Stripe"; 

export const getProducts = async (limit) => {
    try {
        const products = await Stripe.products.list({ limit: limit || 10 , expand:['data.default_price']}); 
        
        console.log(JSON.stringify(products, null, 2));
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; 
    }
};
export const getProductById = async (productId) => {
    try {
        const product = await Stripe.products.retrieve(productId,{expand:['default_price']}); 
        
        console.log(JSON.stringify(product, null, 2));
        return product;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error; 
    }
};
