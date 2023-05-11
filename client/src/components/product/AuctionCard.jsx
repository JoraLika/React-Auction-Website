import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Avatar,
  InputBase,
  Box,
  IconButton,
  MoreVertIcon,
  CardHeader,
  Menu,
  MenuItem,
  TextField,
  CheckOutlinedIcon
} from '../../MaterialUiCmp';
import Countdown from 'react-countdown';

const AuctionCard = ({ product, reloadCallback }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else {
      return <Typography gutterBottom variant="subtitle1" component="div" 
      sx={{
        position: "absolute", 
        color: "#EEEE", 
        backgroundColor: "#5627a380",
        padding: "0 0.5rem 0 0.5rem",
        borderRadius: "0.5rem",
        top: 210, 
        left: "7%",
        transform: "translateX(-10%)",
      }}
    >
      {days}:{hours}:{minutes}:{seconds}
    </Typography>
    }
  };

  return (
  <>
   <Card sx={{ maxWidth: 300, backgroundColor: "#310A5D", borderRadius: "1rem", margin: "auto"}}>
    <CardContent>
    <CardHeader
        sx={{
          padding: "0 1rem 1rem 0",
        }}
        action={
            <div>        
              <IconButton onClick={handleMenu} sx={{ color: "#EEEE", margin: "0 -1.2rem 0 0" }}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                sx={{ mt: '40px' }}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit Auction</MenuItem>
              <MenuItem onClick={handleClose}>Cancel Auction</MenuItem>
            </Menu>
          </div>
        }
        avatar={
          <Avatar sx={{ backgroundColor: "#5627a380" }} aria-label="recipe" />
        }
        subheader={
          <Typography variant="subtitle1" sx={{ color: "#EEEE" }} >
            {product.ownerName}
          </Typography>
        }
        title={
          <Typography variant="body2" sx={{ color: "#eeeeee80" }}>
            Current Owner      
          </Typography>
        }
    />
   
    <div style={{position: "relative",}}>
      <CardMedia
        component="img"
        title="Auction picture"
        height="250"
        image={product.itemImage}
        sx={{
          borderRadius: "1rem",
          "& img": {
            objectFit: "contain",
          }
        }}
      /> 
      <Countdown
        date={new Date(product.dueDate) }
        renderer={renderCountdown}
      />
     </div>
     </CardContent>
        <Typography gutterBottom variant="h6" component="h1" sx={{ margin: "0 0 0 1rem", color: "#EEEE" }}>
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#EEEE", margin: "0.5rem 0 1rem 1rem" }}>
          {product.description}
        </Typography>
      <CardActions>
        <Typography variant="body2" sx={{ ml: 1, color: "#eeeeee80" }}>
            Current Bid     
            <Typography variant="subtitle1" sx={{ color: "#EEEE", margin: "0 0 0.5rem 0" }}>
              ${product.price}
            </Typography>
          </Typography>
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              label="Make a bid"
              sx={{ color: "#EEEE", width: "6rem", margin: "0 0 0 6rem", borderColor: "#EEEE", 
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: "#EEEE",
                
              },
              input: {
                color: "#EEEE"
              }
            }}    
              InputProps={{
                endAdornment: <IconButton type="button"  sx={{  color: "green" }}>
                                <CheckOutlinedIcon fontSize="medium" sx={{margin: "0 -1rem 0 0.2rem", backgroundColor: "#EEEE", borderRadius:"5px"}}/>
                              </IconButton> 
              }}      
            variant="outlined"
            />       
      </CardActions>
    </Card>
  </>
  );
};
export default AuctionCard;


