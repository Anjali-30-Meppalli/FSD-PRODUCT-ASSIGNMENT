import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate=useNavigate()

  // navigate
  const handleSubmit=()=>{
    navigate('/dash')
  }

  return (
    <div>
      <h1 >ADD</h1>
      <TextField label="title" variant="outlined" /><br /><br />
      <TextField label="image" variant="outlined" /><br /><br />
      <TextField label="price" variant="outlined" /><br /><br />
      <TextField label="category" variant="outlined" /><br /><br />
      <Button variant="text" onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Add