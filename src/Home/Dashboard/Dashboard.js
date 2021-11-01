import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import '../Dashboard/Dashboard.css'


const Dashboard = () => {
    const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data =>{
    console.log(data);
    axios.post('https://evening-brook-25408.herokuapp.com/services',data)
    .then(res=> {
        if(res.data.insertedId){
            alert('added successfully');
            reset();
          
        }
    })
  }
    return (
        <div className="dash">

           
           
            <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>please add a new service</h2>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="service name" />
                        <textarea {...register("description" )} placeholder="description" />
                        <input type="number" {...register("price")} placeholder="price" />
                        <input {...register("img" )} placeholder="img url" />
                        
                        <input type="submit" />
            </form>
            
        </div>
    )
}

export default Dashboard
