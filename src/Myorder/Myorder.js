import React, {useEffect, useState} from 'react'
import UseAuth from './../Context/UseAuth';
import '../Myorder/Myorder.css'

const Myorder = () => {
    const {user}=UseAuth();
    const [myorders,setmyorders]=useState([]);

    // const email=user.email;

    useEffect(()=>{
        
        fetch(`https://evening-brook-25408.herokuapp.com/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setmyorders(data))
    },[user.email])


    // delete my order 

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
                         const remainingorder=myorders.filter(order=> order._id !==id)
                         setmyorders(remainingorder)
     
                     }
                 })

        }
        // alert(id)
       
      
    }
    return (
        <div className="myord">
           
           
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
                                    
                                   <button onClick={()=>handledeleteuser(myorder._id)} className="btn btn-success">delete</button>
                                   

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
