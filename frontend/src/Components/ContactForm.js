import React, { useState } from "react" 
import { Box, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      borderRadius: '10px',
    },
    textField: {
        marginBottom: '15px',
        marginTop: '15px', 
        '& .MuiOutlinedInput-root': {
          color: '#fff', // Text color
          '& fieldset': {
            borderColor: '#fff', // Border color
          },
          '& label': {
            color: '#fff', // Label color
          },
          '&:hover fieldset': {
            borderColor: '#3f51b5',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#3f51b5',
          },
        },
    },
    submitButton: {
        marginTop: '10px',
        backgroundColor: '#3f51b5',
        color: '#fff',
        borderColor: '#fff', // Border color
        '&:hover': {
          backgroundColor: '#303f9f',
        },
        transition: 'background-color 0.3s',
    },
    title: {
      marginBottom: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
    }, 
    
  }));

const initialFormValues = {
  name: "",
  email: "",
  message:"",
}

const check = {
  submitted: false,
  success: false
}

const ContactForm = () => {

    const classes = useStyles();

    const [status, setStatus] = useState("Submit")
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(); 

    const validateData = (fieldValues = values) => {
      
      let error = { ...errors }
  
      if ("name" in fieldValues)
        error.name = fieldValues.fullName ? "" : "This field is required."
  
      if ("email" in fieldValues) {
        error.email = fieldValues.email ? "" : "This field is required."
        if (fieldValues.email)
          error.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
            ? ""
            : "Email is not valid."
      }

      if ("message" in fieldValues)
        error.message =
          fieldValues.message ? "" : "This field is required."
  
      setErrors({
        ...error
      });
    }
  

    const handleSubmit = async (event) => {

      setStatus("Sending...")

      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values),
      })

      setStatus("Submit")
      let result = await response.json()
      alert(result.status)
    }

    return (
        <Box className={classes.formContainer}>
          <Typography variant="h4" className={classes.title}>
            Contact me!
          </Typography>
          <TextField
            required
            className={classes.textField}
            name="email"
            onChange={(event) => validateData(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            className={classes.textField}
            onChange={(event) => validateData(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            required
            className={classes.textField}
            onChange={(event) => validateData(event.target.value)}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button
            className={classes.submitButton}
            onClick={() => handleSubmit()}
            type="submit"
            variant="contained"
          >
            {status}
          </Button>
        </Box>
      );
}

export default ContactForm