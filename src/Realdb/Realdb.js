import React from 'react'
const addtodb=id=>{
    const exists=getdb();
    let shopping_cart={};
    if(!exists){
        shopping_cart[id]=1;
    }
    else{
        shopping_cart=JSON.parse(exists);
        if(shopping_cart[id]){
            const newcount=shopping_cart[id]+1;
            shopping_cart[id]=newcount;
        }
        else{
            shopping_cart[id]=1;
        }
       
    }
    updatedb(shopping_cart);
}

const getdb=()=>localStorage.getItem('shopping_cart');

const updatedb=cart=>{
    localStorage.setItem('shopping_cart',JSON.stringify(cart));

}
const removefromdb=id=>{
    const exists=getdb();
    if(!exists){

    }
    else{
        const shopping_cart=JSON.parse(exists);
        delete shopping_cart[id];
        updatedb(shopping_cart);
        
    }
   
}
const getstoredcart=()=>{
    const exists=getdb();
    return exists ? JSON.parse(exists):{};
}

export{addtodb,removefromdb,getstoredcart}