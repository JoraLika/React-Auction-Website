import React, { useRef, useState } from 'react';
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
// import Image from '../../images/pic.jpg';
const AuctionCard = ({ product, reloadCallback }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const bidPrice = useRef();
  // const [auctionCart, setAuctionCart] = useState([]);
  // // const userData = JSON.parse(localStorage.getItem('user'));
  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else {
      // Render a countdown
      // return <span>{days}:{hours}:{minutes}:{seconds}</span>;
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

  // const reloadList = () => {
  //   const localAuctionCart = JSON.parse(localStorage.getItem("auctionCart"));
  //   setAuctionCart(localAuctionCart);
  // }
  // const deleteHandler = (e) => {
  //   const products = JSON.parse(localStorage.getItem("products"));
  //   const selectedIndex = products.findIndex((item) => item.id === product.id);
  //   products.splice(selectedIndex, 1);
  //   localStorage.setItem("products", JSON.stringify(products));
  //   reloadCallback();
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const cart = {
  //     title: product.title,
  //     description: product.description,
  //     owner: product.username,
  //     bid: bidPrice.current.value,
  //     id: Math.random() * 1000,
  //   }

  //   auctionCart.push(cart);
  //   localStorage.setItem('auctionCart', JSON.stringify(auctionCart));
  //   reloadList();
  // };7

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
      
            {/* <Button 
              size="small" 
              sx={{ 
                color: "#411E8F", 
                fontSize: "12px",
                // margin: "0 0 0 8rem", 
                backgroundColor: "#EEEE",  
                "&:hover": {
                  backgroundColor: "#411E8F",
                  color: "#EEEE"
                }
              }}
            >
              Bid here
            </Button> */}
</CardActions>




       

      <CardActions>
        {/* <Button 
            size="small" 
            sx={{ 
              color: "#411E8F", 
              display: "flex",
               justifyContent: "center",
              backgroundColor: "#EEEE",  
              "&:hover": {
                backgroundColor: "#411E8F",
                color: "#EEEE"
               }
              }}
          >
              Cancel
          </Button> */}
          </CardActions> 
    </Card>








    
      {/* <div
        id='card-container-product'
        className='container col-md-4'
        style={{
          width: '20rem',
          height: '100%',
        }}

      >
        <div className='card-body'>
          <img
            style={{
              height: '320px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            variant="top" 
            src={product.itemImage} 
            />
          <h3 className='lead display-6'>
            {product.title}
            </h3>
          <p className=''>
            {product.description}
            </p>
          <Card.Text className='lead display-12'>
            {days && days + ' d: '}
            {hours} hr: {minutes} min: {seconds} sec
          </Card.Text>
          <Countdown
            date={new Date(product.dueDate) }
            renderer={renderer}
          />
          <input className='sm-3' size='md'>
            <p>Owner</p>
            <p>
              {product.username}
            </p>
          </input>
        </div>
        <ul className='list-group-flush d-flex justify-content-between align-item-center'>
          <li>
            <input className='sm-3' size='md'>
              <p className=''>Top Bid</p>
              <p className=''>
                ${product.price}
              </p>
            </input>
          </li>
          <li>
            <input className='sm-3 ' size='md'>
              <p className='current-winner'>
                Winner
              </p>
              <p className='current-winner'>
                Winner
              </p>
            </input>
          </li>
        </ul>
        <div>
          <a style={{ textDecoration: 'none' }}>
            <div
              onClick={deleteHandler}
              className='btn btn-outline-secondary cancel container'
            >
              Cancel Auction
            </div>
            <form 
              id='card-form' 
              onSubmit={handleSubmit}
            >
              <input
                className='input sm-3 ms-auto'
                aria-valuemin='1'
              >
                <input
                  ref={bidPrice}
                  required
                  placeholder='Your bid goes here'
                  aria-label='Your bid goes here'
                  aria-describedby='basic-addon2'
                  type='number'
                  min='0'
                />
                <button
                  variant='outline-secondary'
                  type='submit'
                  id='button-addon2'
                >
                  Bid
                </button>
              </input>
            </form>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                {auctionCart?.map(bid => (
                    <Bid key={bid.id} bid={bid}/>
                ))}
            </div>
          </a>
        </div>
      </div> */}
    </>
  );
};
export default AuctionCard;


