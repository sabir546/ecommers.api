
const Category=require("../models/category.model")
const Product=require("../models/product.model")
async function createProduct(reqDeta){
    let topLevel=await Category.findOne({name:reqData.topLevelCategory});
    if(!topLevel){
topLevel=new Category({
    name:reqDeta.secondLevelCategory,
    level:1
  

})
    }

    let secondLevel=await Category.findOne({name:reqData.secondLevelCategory,parentCategory:topLevel._id});
    if(!secondLevel){
secondLevel=new Category({
    name:reqDeta.secondLevelCategory,
    parentCategory:topLevel._id,
    level:2
})
}

let thirdLevel=await Category.findOne({name:reqData.thirdLevelCategory,parentCategory:secondLevel._id});
if(!thirdLevel){
thirdLevel=new Category({
name:reqDeta.thirdLevelCategory,
parentCategory:secondLevel._id,
level:3
})
}

const product =new Product({
title:reqData.title,
color:reqData.color,
description:reqData.description,
discountedPrice:reqData.discountedPrice,
discountPercent:reqData.discountPercent,
imageUrl:reqData.imageUrl,
brand:reqData.brand,
price:reqData.price,
sizes:reqData.sizes,
quantity:reqData.quantity,
category:thirdLevel._id,
})

return await product.save();
}
async function deleteProduct(product){
    const product=await findProductById(productId);
    await Product.findByIdAndDelete(productId);
return "product deleted successfully"
}

async function updateProduct(productId,reqData){
   return await Product.findByIdAndDelete(productId,reqData)

}
async function findProductById(id){
    const product=await Product.findById(id).populate("category").exec();
    if(!product){
        throw new Error("product not found with id "+id);

    } 
    return product;
}

async function getAllProducts(reqQuery){
    let {category,color,minPrice, maxPrice, minDiscount, maxDiscount ,sor,stock,pageNumber,pageSize} =reqQuery;
    pageSize=pageSize || 10;
let query =product.find().populate("category");
if(category){
    const existCategory=await Category.findOne({name:category});
    if(existCategory){
        query=query.where("category").equals(existCategory._id);
    }
    else{
        return {content:[],currentPage:1,totalPages:0}
    }
}
if(color){
    const colorSet=new Set(color.split(",").map(color=>color.trim().toLowerCase()))

    const colorRegex=colorSet.size>0?new RegExp([...colorSet].join("|"),"i"):null;
    query=query.where("color").regex(colorRegex);
}

if(size){
    const sizeSet=new Set(sizes);
    query.query.where("sizes.name").in([...sizesSet]);
}

if(minPrice && maxPrice){
    query=query.where("discountedPrice").gte(minPrice).lte(maxPrice)
}

if (minDiscount){
    query= query.where("discountedpercent").gt(minDiscount);
}
if(stock){
    if(stock=="in_stock"){
        query=query.where("quantity").gt(0)
    }
  else  if(stock=="out_stock"){
        query=query.where("quantity").gt(1)
    }
}
}