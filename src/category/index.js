const prisma = require("../db");

// create kategori
const insertCategory = async(categoryData) =>{
    const category = await prisma.category.create({
        data:{
            name : categoryData.name,
        }
    })
}
// delete kategori 