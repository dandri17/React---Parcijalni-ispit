import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FormCard({fetchData, toggleCardVisibility, cardVisibility}) {
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
      onChange = {fetchData}

    >
      <TextField id="filled-basic" label="Filled" variant="filled" />
    </Box>
      </CardContent>
      <CardActions>
      <Button type="button" variant='contained' color='success' onClick = {toggleCardVisibility}>
        Find user!
      </Button>
      </CardActions>
    </Card>
  );
}
export default FormCard;