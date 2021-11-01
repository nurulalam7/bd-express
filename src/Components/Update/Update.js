import React, { useEffect,useState } from 'react'
import { set } from 'react-hook-form';
import { useParams } from 'react-router'
import UseAuth from './../../Context/UseAuth';
// import { useForm } from 'react-hook-form';



const Update = () => {
    const {id}=useParams();
    const {user}=UseAuth();
    // const {register}=useForm();
    const[update,setupdate]=useState({});
    // const [up,setup]=useState({})
    useEffect(()=>{
        const url=`https://evening-brook-25408.herokuapp.com/orders/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setupdate(data));
    },[])

    const handleupdateinfo=e=>{
        const url=`https://evening-brook-25408.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:'PUT',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(user)

        })
                .then()
        e.preventDefault();
    };  

    // update name 
    // const handlenamechange=e=>{
    //     const updatname=e.target.value;
    //     const updateuser={name :updatname ,email :user.email};
    //     setupdate(updateuser);
    // };


    // update email
    const handleemail= e=>{
        console.log(e.target.value);
        // const updateemail=e.target.value;
        // const updateuser={name:updateemail,email:user.email};
        // setup(updateuser);
        
    };
    const  handlename=e=>{
       
        const oldname=e.target.value;
        const updateuser={name:user.displayName,email:oldname};
        setupdate(updateuser)
    }

    // const handlelocation =e=>{
    //     const oldlocation=e.target.value;
    //     const updatelocation={oldlocation};
    //     setupdate(updatelocation)
    // }

    // const handleprice=e=>{
    //     const oldprice=e.target.value;
    //     const updateprice={oldprice};
    //     setupdate(updateprice)
    // }
    return (
        <div>
            <br />
            <br /><br />
            <br />
            {/* <h2>update user information</h2> */}
            {/* <p>{id}</p> */}

            {/* update form  */}
            <h3>please update your information</h3>

                        <form onSubmit={handleupdateinfo}>
                
                            <h3>{user.email} {user.displayName}</h3>
                           <input onChange={handlename} type="text" value={user.displayName || ''} />
                           <input onChange={handleemail} type="email" name="" id="" value={user.email || ''} />
                           <input type="submit"  value='update'/>
                       </form>

                       <br />
                       <br />
                       <br />
                       <br />

           
        </div>
    )
}

export default Update
