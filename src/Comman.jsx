import React from 'react';
import {NavLink} from 'react-router-dom';

const Comman=(props)=>{
    return(
        <>
        <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1>{props.name} <strong className='brand-name'>Bhushan Wable</strong></h1>
                        <h2 className='my-3'>
                            We are team of creative and fantastic peple
                        </h2>
                        <div className='mt-3'>
                            <NavLink to='/service' className='btn-get-started'>Get start</NavLink>
                        </div>
                    </div>
                    <div className='col-md-6 pt-6 pt-lg-0 order-1 order-lg-2'>
                        <img className='img-data ms-auto' src={props.img} alt='bhushan photo' />
                    </div>
                </div>
                </div>
            </div>
        </div>  

        </section>
        </>
    )
}

export default Comman;

