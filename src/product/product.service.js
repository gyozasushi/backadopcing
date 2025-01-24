const fs = require("fs");
const {
    insertProduct,
    deleteProduct,
    editproduct,
    findProductById,
    findProducts
} = require("../product/product.repository");

// createproduk
const createProduct = async(newProductData)=>{
    
    const product  = await insertProduct(newProductData);
    
}