import { Box, Button, TextField } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = ({handleClose}) => {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const { setAlert} = CryptoState();
  
  const handleSubmit = async() =>{

    if(!email || !password){
      setAlert({
        open:true,
        message:"Please fill the required detail carefully",
        type:"error",
      });
      return;
    }

    try {
       
       const result = await signInWithEmailAndPassword(auth,email,password);
       
       
       setAlert({
        open:true,
        message:`Login Successful. Welcome ${result.user.email}`,
        type: "success",
      });


      handleClose();
       
    } catch (error) {
        setAlert({
          open:true,
          message:error.message,
          type:"error",
        });
        return;
    }

  };

  return (
    <Box 
      p ={3}
      style={{display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant='outlined'
        type='email'
        label='Enter Email'
        value={email}
        onChange={(e) =>setemail(e.target.value)}
        fullWidth
      />
       <TextField
        variant='outlined'
        type='password'
        label='Enter Password'
        value={password}
        onChange={(e) =>setpassword(e.target.value)}
        fullWidth
      />
       <Button
        variant='contained'
        size='large'
        style={{backgroundColor:"#EEBC1D"}}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  )
}

export default Login 