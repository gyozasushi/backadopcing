const prisma = require("../db");
const path = require("path");
const fs = require("fs");



// create produk
const insertProduct = async (productData)=>{
    const product = await prisma.product.create({
        data:{
            name:productData.nama,
            description:productData.description,
            price:productData.price,
            image: `/uploads/${productData.image}`,
            type : productData.type,
            categoryId : productData.categoryId
        }
    });
    return product;
};
//delete produk
const deleteProduct = async(id)=>{
    const product = await prisma.product.findUnique({
        where:{
            id,
        }
    });

    if(product && product.image){
        const imagePath = path.join(__dirname,"../public",product.image);
        fs.unlink(imagePath,(err)=>{
            if(err)console.log("error deleting image")
        })
    }
    
    await prisma.product.delete({
        where:{
            id,
        }
    });
    return product;
};

// editproduct 
const editproduct = async(id,productData)=>{
    const product = await prisma.product.update({
        where:{
            id:parseInt(id),
        },
        data:{
            name : productData.name,
            description:productData.description,
            price :productData.price,
            image : productData.image ? path.basename(productData.image) : null,
            type : productData.type,
            categoryId : productData.categoryId
        }
    });
    return product;
};

// getallproduk
const findProducts = async()=>{
    const products = await prisma.product.findMany();
    return products
};
const findProductById = async(id)=>{
    const product = await prisma.product.findUnique({
        where:{
            id
        }
    });
    return product;
};

module.exports = {
    insertProduct,
    deleteProduct,
    deleteProduct,
    editproduct,
    findProductById,
    findProducts,
};