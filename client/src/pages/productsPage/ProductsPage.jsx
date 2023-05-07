import React, { useRef, useState, useEffect, useContext } from 'react';
import {
    Box, 
    Tabs,
    Tab,
    Typography,
    Divider,
    List
} from "../../MaterialUiCmp.js";
import PropTypes from 'prop-types';
import CreateProduct from '../../components/product/CreateProduct.jsx';
import AuctionCard from '../../components/product/AuctionCard.jsx';
import { getProducts } from '../../apis/product.js';
// import { AuthContext } from '../../Context';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
const ProductsPage = () => {
    // const { user, setUser } = useContext(AuthContext);
    // const [showForm, setShowForm] = useState(false);
    // const [error, setError] = useState('');
    // const [products, setProducts] = useState([]);
    // const [imgPath, setImgPath] = useState('');
    const [value, setValue] = useState(0);
    const [products, setProducts] = useState([]);

    const handleChange = (event, newValue) => setValue(newValue);

    // const openForm = () => setShowForm(true);
    // const closeForm = () => setShowForm(false);

    // const itemTitle = useRef();
    // const itemDesc = useRef();
    // const startPrice = useRef();
    // const itemDuration = useRef();
    // const itemImage = useRef();

    // const submitForm = (e) => {
    //     e.preventDefault();
    //     const dueDate = moment().add(itemDuration.current.value, 'hours').format();
    //     const product = {
    //         username: user.username,
    //         title: itemTitle.current.value,
    //         description: itemDesc.current.value,
    //         price: startPrice.current.value,
    //         dueDate: dueDate,
    //         itemImage: imgPath,
    //         id: Math.random() * 1000,
    //     }

    //     products.push(product);
    //     localStorage.setItem('products', JSON.stringify(products));
    //     reloadList();
    //     setError('');
    //     closeForm();
    // };
    useEffect(async () => {
      const response = await getProducts();
      if (response.status === 'failure') return console.error(response.result);

      setProducts(response.result.data);
    }, [])
    const reloadList = () => {
    }

    return (
      <>
        <Box sx={{ width: '100%', margin: "2.5rem 0 0 0"}}>
            <Tabs value={value} centered textColor="inherit" indicatorColor="secondary" onChange={handleChange}>
                <Tab label="Your Products "/>
                <Tab label="Others" />
            </Tabs>                 
            {/* <Divider orientation="vertical" variant="middle" flexItems light sx={{ ml: 2, height: 28 }}/> */}           
            <TabPanel value={value} index={0}>
                <Typography id="panel-title" variant="h5" component="h1" 
                    sx={{
                        padding: "0 0 1.5rem 0",
                        textAlign: "center",
                        color: "#eeee"
                    }}
                >                    
                    Products
                </Typography>
                {/* <AuctionCard/> */}
                <List>
                {/* {products.map(product => (<Typography variant="h5" key={product._id}>{product.name}</Typography>))} */}
                  {products.map(product => (<AuctionCard product={product} key={product._id} reloadCallback={reloadList}/>))}
                </List> 
                <CreateProduct/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography id="panel-title" variant="h5" component="h1" 
                    sx={{
                        padding: "0 0 1.5rem 0",
                        textAlign: "center",
                        color: "#eeee"
                    }}
                >                    
                    Market
                </Typography>
            </TabPanel>
        </Box>
      </>
    );
}

export default ProductsPage;