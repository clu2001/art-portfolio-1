import React, { useState } from "react" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
              required
              name="email" 
              onChange={(event) => validateData(event.target.value)} 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" />
            <TextField onChange={(event) => validateData(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
            <TextField
              required
              onChange={(event) => validateData(event.target.value)}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
            />
            <Button 
              onClick={() => handleSubmit()}
              type="submit"
              variant="outlined" >{status}</Button>
      </Box>
    );
}

export default ContactForm