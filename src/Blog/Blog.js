import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import UseAuth from './../Context/UseAuth';

const Blog = () => {
    // const {_id}=useParams();
    const {user}=UseAuth();
    const [orders,setorders]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setorders(data));

    },[])

    // delete user 
    const handledeleteuser = id=>{
        // alert(id)
        const url=`http://localhost:5000/orders/${id}`;
       fetch (url,{
           method:'DELETE',
       })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0 ){
                    alert('successfuly deleted')
                    // const remainingorder=orders.filter(order=> order._id !==id)
                    // setorders(remainingorder)

                }
            })
      
           
      
         

    }

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
                                   <th>{order.name}</th>
                                   <th>{order.displayName}</th>
                                   <th>{order.email}</th>
                                   <th>{order.price}</th>
                                   <th>{order.location}</th>
                                   <button onClick={()=>handledeleteuser(order._id)}>button</button>
                                   
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
