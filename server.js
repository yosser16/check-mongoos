import express from "express" ; 
import dotenv from "dotenv"; 
import mongoose, { mongo } from "mongoose";
import user  from "./model/user.js";
const app = express(); 
dotenv.config(); 
app.use(express.urlencoded({extended : true })); 
app.use(express.json()); 

await mongoose.connect(process.env.MONGO_URL)

//  async function task1() {
//        const arrayOfPersons = [
//          { name: "yosser", age: 24, favoritefood: ["spagheti"] },
//          { name: "nour", age: 20 , favoritefood:  ["pizza"] },
//       ];
//     await user.create(arrayOfPersons);
//    }  
//  task1() ;
//    async function task2() {
//   const persons = await user.find();
//      console.log(persons);  }
//  task2();   

//  async function task3() {
//     const persons = await user.findOne({name : "nour"});
//        console.log(persons);  }
//    task3();  
  
// async function task4() {
//   const persons = await user.findById("6666f5100fb289bf82ae61c6");
//            console.log(persons);  }
//        task4();   

    //    async function task5() {
    //     const persons = await user.findByIdAndUpdate("6666f5100fb289bf82ae61c6" , {favoriteFoods:"salad"});
    //              console.log(persons);  }
    //          task5();   

            //  async function task6() {
            //     const persons = await user.findByIdAndDelete("6666f5100fb289bf82ae61c7" )}; 
            //          task6();   
        

            // async function task7() {
            //            const arrayOfPersons = [
            //              { name: "marie", age: 30, favoritefood: ["spagheti"] },
            //              { name: "marie", age: 50 , favoritefood:  ["pizza"] },
            //           ];
            //          await user.create(arrayOfPersons);
            //        }  
            //   task7() ;

    // async function task8() {
    //             const persons = await user.deleteMany({name : "marie"} )}; 
    //              task8();   
        



const PORT = process.env.PORT || 7000 ; 

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})