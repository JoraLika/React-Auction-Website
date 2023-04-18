import React, { useRef } from 'react';
import {
  Card,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import Countdown from 'react-countdown';
import './ProductsPage.css';

const AuctionCard = ({ product }) => {
  const bidPrice = useRef();

  let auctionCart = JSON.parse(localStorage.getItem('auctionCart'));
  // const userData = JSON.parse(localStorage.getItem('user'));
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else {
      // Render a countdown
      return <span>{days}:{hours}:{minutes}:{seconds}</span>;
    }
  };

  const deleteHandler = (e) => {
    localStorage.removeItem("product");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cart = {
      title: product.title,
      description: product.description,
      owner: product.username,
      bid: bidPrice.current.value,
      id: Math.random() * 1000,
    }

    if (auctionCart == null) auctionCart = [];
    auctionCart.push(cart);
    localStorage.setItem('auctionCart', JSON.stringify(auctionCart));

    // const dataUser = {
    //   confirmPassword: "asdfghjkl",
    //   email: "j@gmail.com",
    //   password: "asdfghjkl",
    //   username: "jora",
    //   wallet: userData.wallet - cart.bid
    // }
    // userData.push(dataUser);
    // localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <>
      <Card
        id='card-container-product'
        className='container col-md-4'
        style={{
          width: '20rem',
          height: '100%',
        }}

      >
        <Card.Body className='card-body'>
          <Card.Img
            style={{
              height: '320px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            variant="top" src={product.itemImage} />
          <Card.Title className='lead display-6'>{product.title}</Card.Title>
          <Card.Text className=''>{product.description}</Card.Text>
          {/* <Card.Text className='lead display-12'>
            {days && days + ' d: '}
            {hours} hr: {minutes} min: {seconds} sec
          </Card.Text> */}
          <Countdown
            date={Date.now() + product.duration}
            renderer={renderer}
          />
          <InputGroup className='sm-3' size='md'>
            <InputGroup.Text>Owner</InputGroup.Text>
            <InputGroup.Text>
              {product.username}
            </InputGroup.Text>
          </InputGroup>
        </Card.Body>
        <ListGroup className='list-group-flush d-flex justify-content-between align-item-center'>
          <ListGroupItem>
            <InputGroup className='sm-3' size='md'>
              <InputGroup.Text className=''>Top Bid</InputGroup.Text>
              <InputGroup.Text className=''>
                ${product.price}
              </InputGroup.Text>
            </InputGroup>
          </ListGroupItem>
          <ListGroupItem>
            <InputGroup className='sm-3 ' size='md'>
              <InputGroup.Text className='current-winner'>
                Winner
              </InputGroup.Text>
              <InputGroup.Text className='current-winner'>
                Winner
              </InputGroup.Text>
            </InputGroup>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link style={{ textDecoration: 'none' }}>
            <div
              onClick={deleteHandler}
              className='btn btn-outline-secondary cancel container'
            >
              Cancel Auction
            </div>
            <form id='card-form' onSubmit={handleSubmit}>
              <InputGroup
                className='input sm-3 ms-auto'
                aria-valuemin='1'
              >
                <FormControl
                  ref={bidPrice}
                  required
                  placeholder='Your bid goes here'
                  aria-label='Your bid goes here'
                  aria-describedby='basic-addon2'
                  type='number'
                  min='0'
                />
                <Button
                  variant='outline-secondary'
                  type='submit'
                  id='button-addon2'
                >
                  Bid
                </Button>
              </InputGroup>
            </form>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};
export default AuctionCard;
// export const AuctionCard = () => {
//   return (
//     <>
//       <Countdown
//         renderer={renderer}
//       />
//     </>
//   );
// };


