const mongoose=require("mongoose")
const mondbUrl="mongodb+srv://mdgulamsabir9:02QVj8hkmhoL6G4a@cluster4.sag2ujh.mongodb.net/?retryWrites=true&w=majority"
const connectDb=()=>{
    return mongoose.connect(mondbUrl)
}
module.exports={connectDb}