 import React from 'react';
 import Card from './Card';
 import data from './Sapi'

 const Service=()=>{
     return(
         <>
            <div className='my-5'>
            <h1 className='text-center'>Our Service</h1>
            </div>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div className='row gy-5'>
                {
                    data.map((val,ind)=>{
                       return <Card key={ind} img={val.img} head={val.head} desc={val.desc} />
                    })   
                }                    
                </div>
                </div> 
            </div>
        </div>
         </>
     )
 }

 export default Service;

