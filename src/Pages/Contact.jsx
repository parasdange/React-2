import React ,{useState}from 'react';


const Contact =()=>{

    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    })

    const inputEvent=(e)=>{

        const {name,value}=e.target

      

        setData((preValue)=>{

            const newData={...preValue,
                [name]:value
            }



            return newData;

        }) 

    }

    const submitEvent=(e)=>{

        e.preventDefault()
        alert(`my name is ${data.fullname} , my number is ${data.phone} and email id ${data.email}`)

    }

    return (
        <>
          <h1 className="head text-center">Contact</h1>
          <div className="container-fluid">
              <div className="row justify-content-center">
                  <div className="col-md-4 ">
                  <form onSubmit={submitEvent}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">FullName</label>
    <input onChange={inputEvent} value={data.fullname} type="text" class="form-control" name="fullname" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input onChange={inputEvent}  value={data.phone}  type="number" class="form-control" name="phone" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={inputEvent} value={data.email}   type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>

 
  <div class="form-floating mb-2">
  <textarea onChange={inputEvent}  value={data.message}  class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'100px'}} name="message"></textarea>
  <label for="floatingTextarea2">Message</label>
</div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                  </div>
              </div>
          </div>
        </>
    );
}

export default Contact;