const fs = require("fs");
const prisma = require("../db")
const {
    insertProduct,
    deleteProduct,
    editproduct,
    findProductById,
    findProducts
} = require("../product/product.repository");

// createproduk
const createProduct = async(newProductData)=>{
    newProductData.image = `/uploads/${newProductData.image}`;

    const product  = await insertProduct(newProductData);
    return product;
}

module.exports={
    createProduct
};