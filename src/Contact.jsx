import React, { useState } from 'react';

const Contact=()=>{
    const [inp,setinp] = useState({
        fullname:'',
        mobile:'',
        email:'',
        massage:''
    })
    const inputea =(event)=>{
        const {name,value}= event.target
        setinp((predata)=>{
            return {
                ...predata,
                [name]:value
            }
        }
        )
    }
    const submitedata =(e)=>{
        e.preventDefault();
        alert(`Your name: ${inp.fullname} 
            Your mobile number: ${inp.mobile}
            You mail iD: ${inp.email}
            Your msg: ${inp.massage}`)
    }
    return(
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={submitedata}>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                        name='fullname'
                        value={inp.fullname}
                        onChange={inputea}
                         placeholder="Enter your name"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mobile number</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1"
                        name='mobile'
                        value={inp.mobile}
                        onChange={inputea}
                         placeholder="Mobile number"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                        name='email'
                        value={inp.email}
                        onChange={inputea}
                         placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                        <textarea class="form-control"
                         id="exampleFormControlTextarea1"
                         name='massage'
                        value={inp.massage}
                        onChange={inputea}
                        rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
    
