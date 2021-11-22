import React from 'react'
import { useEffect, useState } from 'react';
// import axios from 'axios';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function Form() {



    export default function Form() {
        // const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
        const[Id,setId]=useState('')
        const[name,setName]=useState('')
        const[address,setAddress]=useState('')
        const[docassign,setdocassign]=useState([])
        
        //  const classes = useStyles();
    
      const handleClick=(e)=>{
        e.preventDefault()
        const pt={Id,name,address,docassign}
        console.log(pt)
        // axios.post("http://localhost:8080/patient",{pt})
        fetch("http://localhost:8080/patient",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(pt)
    
      }).then(()=>{
        console.log("New Student added")
      })
      alert("Successfully added");
    }






    return (
<form action="<login/>" method="get" onsubmit={handleClick}>
        <div align="center">
            <h1>Registration Form</h1>
            <div class="form-group">
                <div class="col-md-4">
                    <label for="exampleInputPassword1">Id</label>
                    <input type="text" class="form-control mx-sm-3" id="exampleInputEmail1" placeholder="patient id" />
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-4">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control mx-sm-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="patient name" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-4">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="phone" class="form-control mx-sm-3" id="exampleInputEmail1" placeholder="patient address" />
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-4">
                    <label for="exampleInputPassword1">Doctor Appoinment</label>
                    <input type="text" class="form-control mx-sm-3" id="exampleInputEmail1" placeholder="Doctor assign" />
                </div>
            </div>
            <div class="form-check">
            <div class="col-md-4">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">I'm not Robot</label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
        </div>
        </div>
        </form>
    )
}

// export default Form
