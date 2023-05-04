import React, { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Avatar,
  Box
} from '../../MaterialUiCmp';
import Countdown from 'react-countdown';
import Bid from './Bid';
import Image from '../../images/pic.jpg';
const AuctionCard = ({ product, reloadCallback }) => {
  // const bidPrice = useRef();
  // const [auctionCart, setAuctionCart] = useState([]);
  // // const userData = JSON.parse(localStorage.getItem('user'));
  // const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return null;
  //   } else {
  //     // Render a countdown
  //     return <span>{days}:{hours}:{minutes}:{seconds}</span>;
  //   }
  // };

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
  // };

  return (
  <>
   <Card sx={{ maxWidth: 300, backgroundColor: "#310A5D", borderRadius: "1rem", margin: "auto"}}>
    <CardContent>
    <div style={{position: "relative",}}>
      <CardMedia
        component="img"
        title="Auction picture"
        height="250"
        image={Image}
        sx={{
          borderRadius: "1rem",
          "& img": {
            objectFit: "contain",
          }
        }}
        // Image
      /> 
        <Typography gutterBottom variant="subtitle1" component="div" 
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
          00:00:00
          {/* DueDate */}
        </Typography>
     </div>
     </CardContent>

      <CardContent>
        <Typography gutterBottom variant="h6" component="h1" sx={{margin: "-1.5rem 0 0.5rem 0", color: "#EEEE" }}>
          Auction Title
          {/* Title */}
        </Typography>       
        <Typography variant="body2" sx={{ color: "#EEEE" }}>
          {/* Auction description */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', margin: "1rem 0 0 0" }}>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 35, height: 35 }}/> 
          <Typography variant="body2" sx={{ ml: 2, color: "#eeeeee80" }}>
            Current Owner      
            <Typography variant="subtitle1" sx={{ color: "#EEEE" }}>
              Auction Owner
              {/* Owner */}
            </Typography>
          </Typography>
        </Box>   
      </CardContent>

      <CardActions>
        <Typography variant="body2" sx={{ ml: 1, color: "#eeeeee80" }}>
            Current Bid     
            <Typography variant="subtitle1" sx={{ color: "#EEEE", margin: "0 0 0.5rem 0" }}>
              $1000
              {/* Price */}
            </Typography>
          </Typography>
          <Button 
            size="small" 
            sx={{ 
              color: "#411E8F", 
              margin: "0 0 0 8rem", 
              backgroundColor: "#EEEE",  
              "&:hover": {
                backgroundColor: "#411E8F",
                color: "#EEEE"
               }
              }}
          >
              Bid here
          </Button>
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


