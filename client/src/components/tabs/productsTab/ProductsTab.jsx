import React, { useState, useEffect, useContext } from 'react';
import {
    Box, 
    Tabs,
    Tab,
    Typography,
    Divider,
    List,
    Grid
} from "../../../MaterialUiCmp.js";
import PropTypes from 'prop-types';
import CreateProduct from '../../product/CreateProduct.jsx';
import AuctionCard from '../../product/AuctionCard.jsx';
import { getProducts } from '../../../apis/product.js';
import { AuthContext } from '../../../Context.js';

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

const ProductsTab = () => {
    const { user, setUser } = useContext(AuthContext);

    const [value, setValue] = useState(0);
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn]= useState(false);

    const handleChange = (event, newValue) => setValue(newValue);

    useEffect(async () => {

      await reloadList();
      setIsLoggedIn(user.username !== undefined)

    }, [user]);

    const reloadList = async() => {
      const response = await getProducts();
      if (response.status === 'failure') return console.error(response.result);

      setProducts(response.result.data);
    }

    return (
      <>
        <Box sx={{ width: '100%', margin: "2.5rem 0 0 0"}}>
            <Tabs value={value} centered textColor="inherit" indicatorColor="secondary" onChange={handleChange}>
                <Tab label="Products"/>
                <Tab label="Market" />
            </Tabs>                 
            {/* <Divider orientation="vertical" variant="middle" flexItems light sx={{ ml: 2, height: 28 }}/> */}           
            <TabPanel value={value} index={0}>
                {/* <Typography id="panel-title" variant="h5" component="h1" 
                    sx={{
                        padding: "0 0 1.5rem 0",
                        textAlign: "center",
                        color: "#eeee"
                    }}
                >                    
                    Products
                </Typography> */}
                    <Grid container spacing={3}
                    sx={{ '& > *:not(:first-of-type)': { marginLeft: 1 }, justifyContent: "center"}}
                    >  
                      {products.map(product => ( 
                        <>
                        <Grid item xs={12} sm={6} md={4} lg={3}  key={product._id} >
                          <AuctionCard product={product} reloadCallback={reloadList}/>
                        </Grid>   
                      </> 
                     ))}
                    </Grid>
                {
                  isLoggedIn ? 
                    <CreateProduct reloadCallback={reloadList}/> 
                  : null
                }
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

export default ProductsTab;