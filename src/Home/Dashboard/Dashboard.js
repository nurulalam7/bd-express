import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import './Dashboard.css'


const Dashboard = () => {
    const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data =>{
    console.log(data);
    axios.post('http://localhost:5000/services',data)
    .then(res=> {
        if(res.data.insertedId){
            alert('added successfully');
            reset();
          
        }
    })
  }
    return (
        <div className="dash">

            <br />
            <br />
            <br />
            <br />
           
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
