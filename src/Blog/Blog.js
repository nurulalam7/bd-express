import React, { useEffect, useState } from 'react'
import '../Blog/Blog.css'
// import { useParams } from 'react-router';

import UseAuth from './../Context/UseAuth';
import { Link } from 'react-router-dom';

const Blog = () => {
    // const {_id}=useParams();
    const {user}=UseAuth();
    const [orders,setorders]=useState([]);
    useEffect(()=>{
        fetch('https://evening-brook-25408.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setorders(data));

    },[orders])

    // delete user 
    const handledeleteuser = id=>{
        const proced=window.confirm('are you sure ,you want to delete');
        if(proced){
            const url=`https://evening-brook-25408.herokuapp.com/orders/${id}`;
            fetch (url,{
                method:'DELETE',
            })
                 .then(res=>res.json())
                 .then(data=>{
                     if(data.deletedCount>0 ){
                         alert('successfuly deleted')
                         const remainingorder=orders.filter(order=> order._id !==id)
                         setorders(remainingorder)
     
                     }
                 })

        }
        // alert(id)
       
      
    }
    const handleupdatedinfo= (id)=>{
        fetch(`https://evening-brook-25408.herokuapp.com/orders/${id}`,{
            method:'PUT',

        })
        .then(res=>res.json())
        .then(data=>console.log(data))
       
    }

    return (
        <div className="upda">
           
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>BOOKING NAME</th>
                        <th>PERSON NAME</th>
                        <th>EMAIL</th>
                        <th>DELIVERY COST</th>
                        <th>DESTINATION</th>
                        <th>ACTION</th>


                    </tr>
                </thead>
                <tbody>
                    {
                           orders.map((order,index)=>(
                            
                               <tr>
                                  
                                   <th>{index+1}</th>
                                   <td>{order.name}</td>
                                   <td>{order.displayName}</td>
                                   <td>{order.email}</td>
                                   <td>{order.price}</td>
                                   <td>{order.location}</td>
                                 {/* <Link to ={`/orders/update/${order._id}`}><button>update</button></Link> */}

                                 <td>
                                   {
                                       order.approved==false ?' pending' : 'approved'
                                   }

                                 </td>

                                 <td>
                                    <button className="btn btn-warning" onClick={()=>handleupdatedinfo(order._id)}>update</button>
                                   <button className="btn btn-danger" onClick={()=>handledeleteuser(order._id)}>delete</button>
                                   

                                 </td>
                                
                                </tr>
                               
                                
                           ))
                    }
                </tbody>
            </table>
            
            {/* {
                 
            } */}

        </div>
    )
}

export default Blog


{/* <button className="btn btn-danger">update</button>
<button onClick={()=> handledeleteuser(user._id)} className="btn btn-warning" >delete</button>
 */}
