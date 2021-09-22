import React from 'react';
import {NavLink} from 'react-router-dom';
import Comman from './Comman'

const Home=()=>{
    const imga = `https://s3-img.pixpa.com/com/640/116332/sachinbhor-k3n2qc.jpg`
    return(
        <>
        <Comman name='Thanks for contact me' img={imga} />
        </>
    )
}

export default Home;

