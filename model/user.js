import mongoose from "mongoose"; 
const userschema = mongoose.Schema ({
    name: { type : String, required : true } ,
age: Number, 
favoriteFoods: String,
 }) ; 


const  user =  mongoose.model ("user", userschema); 
export default user ; 