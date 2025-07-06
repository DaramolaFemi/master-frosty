import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {
  const [list, setList] = useState([])
  const url = 'http://localhost:5000'

  const fetchList = async () => {
   const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data);
    
    if (response.data.success) {
      setList(response.data.food)

    } else {
      toast.error(response.data.message)
      console.log(response.data.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])
 const removeFood = async (id) => {
  const response = await axios.post(`${url}/api/food/remove/`,{id:id})
  await fetchList()
  if (response.data.success) {
    toast.success(response.data.message)
  } else {
    toast.error(response.data.message)
    console.log(response.data.message)
  } 
 }
  return (
    <div className='list'>

  <div className="flex-col">
    <p>All Foods List</p>
    <div className="list-table">
      <div className="list-table-format title">
       <b>Image</b>
       <b>name</b>
       <b>category</b>
       <b>price</b>
       <b>action</b>
      </div>
      {list.map((item, index) => {
        return(
          <div key={index} className="list-table-format">
            <img src={`${url}/images/`+item.image} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>${item.price}</p>
          <p className='cursor' onClick={()=> removeFood(item._id)}>X</p>
          </div>
        )
      })}
    </div>
  </div>
        
    </div>
  )
}

export default List