import React, { useState, useContext} from 'react';
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
  CheckOutlinedIcon,
  Collapse,
  ExpandMoreIcon
} from '../../MaterialUiCmp';
import Countdown from 'react-countdown';
import { AuthContext } from '../../Context.js'; 
import { removeProduct } from '../../apis/product';

const AuctionCard = ({ product, reloadCallback }) => {
  const { user, setUser } = useContext(AuthContext);
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCancel = async () => {
    const response = await removeProduct(product._id, user.username, user.password);
    if (response.status === 'failure') return alert(response.result);

    reloadCallback();
  };

  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
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
      00:00:00:00
    </Typography>;
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
              <MenuItem onClick={handleCancel}>Cancel Auction</MenuItem>
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
          <Button expand={expanded} onClick={handleExpandClick} variant="contained" sx={{margin: "0 0 0 6rem"}}>
            Bid Here
          </Button>
      </CardActions>  

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardActions>
            <TextField
              size="small"
              sx={{ color: "#EEEE", borderColor: "#EEEE", marginRight: "1rem",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: "#EEEE",
              
              },  
              '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: "#EEEE"
                },
              '& .MuiFormLabel-root': {
                color: "#EEEE"
              },
              input: {
                color: "#EEEE"
              }
            }}       
            variant="outlined"
            />          
            <Button size="small" variant="contained" >
            Confirm
          </Button> 
          </CardActions> 
        </Collapse>  
    </Card>
  </>
  );
};
export default AuctionCard;


