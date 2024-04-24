import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function FormCard({fetchData, toggleCardVisibility, cardVisibility}) {

  const[user, setUser] = useState("")

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUser(inputValue);
    fetchData(inputValue);
  };

  return (
    <Card style={{maxWidth: 345, display: cardVisibility ? "none" : "block"}}>
      <CardContent>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="User" variant="filled" onChange = {handleInputChange} />
    </Box>
      </CardContent>
      <CardActions>
      <Button type="button" variant='contained' color='success' onClick ={() => {toggleCardVisibility(); fetchData()}}>
        Find user!
      </Button>
      </CardActions>
    </Card>
  );
}
export default FormCard;