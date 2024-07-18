import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

const Add  = () =>{
  const [myName,setName]=useState('Greeshma');
  const [form,setForm]=useState({
    title:'',
    price:0,
    category:''
  })
  function fieldValue(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  function valueAdd(){
    console.log(form);
  }
  //const [count,setCount]=useState(0);
  //function capValue(){
   // setCount(count+1);
  
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"


      >
        {/*<h4>Welcome {myName} to React Learning</h4>*/}
        <div>
        <TextField id="outlined-basic" label="Title" variant="filled"  name='title' onChange={fieldValue}/>
       

        </div>
        <div>
        <TextField id="filled-basic" label="Price" variant="filled" name='price' onChange={fieldValue}/>
        </div>
        <div>

        
        <TextField id="standard-basic" label="Category" variant="filled" name='category' onChange={fieldValue}/>
        </div>
        <div>
        <TextField id="filled-basic" label="Image" variant="filled" name='image' onChange={fieldValue}/>
        </div>
        <div>
         <Button variant='contained'onClick={valueAdd} >ADD</Button>
        </div>
        
       {/* <div>
          <small>Button is clicked {count} times</small>
        </div>*/}
      </Box>
    );
  }

  export default Add