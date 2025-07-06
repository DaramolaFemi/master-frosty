import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/admin_assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = () => {
    const url = 'http://localhost:5000'
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(false)
   const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: ""
   })

   const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
   }

   const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description) 
    formData.append("category", data.category)
    formData.append("price", Number(data.price))
    formData.append("image", image)
const response = await axios.post(`${url}/api/food/add`, formData);
 if (response.data.success) {
    setData({
        name: "",
        description: "",
        category: "Salad",
        price: ""
       })
    setImage(false)
    toast.success(response.data.message)
 }else{
    toast.error(response.data.message)
 }
}
  
  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmit}>
            <div className="add-image-upload flex-col">
   <p>Upload Image</p>
   <label htmlFor="image">
   <img src={image ? URL.createObjectURL(image) :assets.upload_area} alt="" width={100} />

   </label>
   <input type="file"id='image' hidden required onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={handleChange} value={data.name} type="text" name='name' placeholder='type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea onChange={handleChange} value={data.description } name="description"  rows="6" placeholder='type here' required></textarea>  
            </div>
            <div className="add-category-price">
                <div className='add-category flex-col'> 
                  <p>Product Category</p>
                  <select onChange={handleChange} value={data.category} name="" >
                    <option value="Salad">Salad</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure veg">Pure veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                    </select>  
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onChange={handleChange} value={data.price} type="Number" name='price' placeholder='$20' required />
                </div>
            </div>
            <button className='add-btn' type='submiit'>ADD</button>
        </form>
        
    </div>
  )
}
export default Add