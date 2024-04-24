import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

function UserCard({user, cardVisibility, toggleCardVisibility}) {
  return (
    <Card style={{  maxWidth: 345 , display: cardVisibility ? "block" : "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="user profile picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            User Name:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.login}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            BIO:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.bio}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            LOCATION:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.location}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            REPOS:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.repos_url}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" color='error' onClick={toggleCardVisibility}>Reset</Button>
    </Card>
  );
}

export default UserCard;




  


