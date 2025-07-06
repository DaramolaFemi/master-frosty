import { log } from "console";
import Foodmodel from "../Models/FoodModel.js";
import fs from "fs";

// add food items

 const addFood = async (req, res) => {
  
   let imageFileName = `${req.file.filename}`
   
   const food = new Foodmodel({
       name: req.body.name,
       description: req.body.description,
       price: req.body.price,
       image: imageFileName,
       category: req.body.category,
   })
   
   try {
     await food.save()
     res.status(200).json({success:true, message:"Food added successfully"})
   } catch (error) {
    console.log(error)
     res.status(500).json({success: false, message:"Error adding food item"})
   }


}


const ListFood = async (req, res) => {

  try{
    const food = await Foodmodel.find({})
    res.status(200).json({success:true, food})

  }catch(error){
    console.log(error);
    
    res.status(500).json({success:false, message:"Error fetching food items"})
  }


}

// remove foodItem

const removeFood =  async (req, res) => {

try {
  const food = await Foodmodel.findById(req.body.id)
  if (!food) {
    return res.status(404).json({ success: false, message: "Food item not found" });
  }
  fs.unlink(`Uploads/${food.image}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Error deleting image" });
    }
  });
  await Foodmodel.findByIdAndDelete(req.body.id);
  res.status(200).json({ success: true, message: "deleted successfully" });
} catch (error) {
  console.log(error);
  res.json({ success: false, message: "Error deleting food item" });
  
}

}



export {addFood, ListFood, removeFood};