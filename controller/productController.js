const Product= require('../model/product.js');

const getProduct = async (req, res)=> {
    const product = await Product.find()

    res.json(product)
}


const postProduct= async (req,res)=>{
    let msg='Product inserted'
    const body= req.body
    try{
        const product = new Product (body)
        await product.save() 
    }catch(error){
        msg=error
    }
    res.json({msg:msg})
}

const putProduct=async (req,res)=>{
    const {Nameproduct, Price, Weight} = req.body
    let msg= ' product update'
    try{
        await Product.findOneAndUpdate({Nameproduct:Nameproduct}, {Price:Price, Weight:Weight})
    }catch(error){
        msg=error
    }
    res.json({msg:msg})
}

const deleteProduct = async (req, res) =>{
    id= req.params.id
    let msg= 'Product deleted'
    try{
        await  Product.findOneAndDelete({_id:id})

    }catch (error) {
        msg= 'There was a problem while deleting '
    }
    res.json({msg:msg})
} 

module.exports= {
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}

