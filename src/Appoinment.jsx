import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Appoinment() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[Id,setId]=useState('')
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[docassign,setdocassign]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const pt={Id,name,address,docassign}
    console.log(pt)
    fetch("http://localhost:8080/patient",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(pt)

  }).then(()=>{
    console.log("New Student added")
  })
}

// useEffect(()=>{
//   fetch("http://localhost:8080/patient")
//   .then(res=>res.json())
//   .then((result)=>{
//     setpatient(result);
//   }
// // )
// },[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Patient</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Patient Id" variant="outlined" fullWidth 
      value={Id}
      onChange={(e)=>setId(e.target.value)}
      />
    <TextField id="outlined-basic" label="Patient Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />


      <TextField id="outlined-basic" label="Patient Adress" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />

<TextField id="outlined-basic" label="docassign" variant="outlined" fullWidth
      value={docassign}
      onChange={(e)=>setdocassign(e.target.value)}
      />


      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Students</h1>

    <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}