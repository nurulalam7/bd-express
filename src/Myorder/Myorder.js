import React, {useEffect, useState} from 'react'
import UseAuth from './../Context/UseAuth';

const Myorder = () => {
    const {user}=UseAuth();
    const [myorders,setmyorders]=useState([]);

    // const email=user.email;

    useEffect(()=>{
        
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setmyorders(data))
    },[user.email])
    return (
        <div>
            <br />
            <br />
            <br /><br />
            <br />
            <h4> my order</h4>
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
                            myorders.map((myorder,index)=>(
                            
                               <tr>
                                  
                                   <th>{index+1}</th>
                                   <td>{myorder.name}</td>
                                   <td>{myorder.displayName}</td>
                                   <td>{myorder.email}</td>
                                   <td>{myorder.price}</td>
                                   <td>{myorder.location}</td>
                                 {/* <Link to ={`/orders/update/${order._id}`}><button>update</button></Link> */}

                                 <td>
                                   {/* {
                                       myorder.approved==false ?' pending' : 'approved'
                                   } */}

                                 </td>

                                 <td>
                                    
                                   <button className="btn btn-success">delete</button>
                                   

                                 </td>
                                
                                </tr>
                               
                                
                           ))
                    }
                </tbody>
            </table>
            
            
        </div>
    )
}

export default Myorder

// // extra 
//  /* {onClick={()=>handleupdatedinfo(order._id)}
//                =>
//                     <h3>{  myorder.email}</h3>
//                     className="btn btn-danger" onClick={()=>handledeleteuser(order._id)}
//                   )
//             }
