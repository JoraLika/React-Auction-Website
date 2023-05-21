import React, {useState, useContext, useEffect} from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  MenuIcon,
  Container, 
  Chip, 
  Tooltip,
  MenuItem,
  GavelIcon,
  AccountCircle,
  PersonIcon,
  Button
} from '../MaterialUiCmp';
import { AuthContext } from '../Context.js'; 
import SignUp from './account/SignUp';
import LogIn from './account/LogIn';

function NavComp () { 
    const { user, setUser } = useContext(AuthContext);
    const [btnVisible, setBtnVisible]= useState(true);
    const [isOpenSignUp, setOpenSignUp] = useState(false);
    const [isOpenLogIn, setOpenLogIn] = useState(false);

    const getModalHandler = (type) => {
      return () => {
        if(type === "SignUp" ){
          setOpenLogIn(false);
          setOpenSignUp(true);

        } else {
          setOpenSignUp(false);
          setOpenLogIn(true);
        }
      }
    }

    const getModalCloseHandler = (type) => {
      return () => {
        if(type === "SignUp" ){
          setOpenSignUp(false);
        } else {
          setOpenLogIn(false);
        }
      }
    }

    const handleLogOut = () => {
      localStorage.removeItem("userInfo");
      setUser({});
    }

    useEffect(() => {
        setBtnVisible(user.username === undefined)
    }, [user]);

    return (
     <>
      <AppBar position="static" color="transparent" 
        sx={{
          boxShadow: "none", 
          // borderBottom: "0.5px #9153F4 solid", 
          // borderRadius: "0 0 20px 20px"
          }}
      > 
       <Container maxWidth="lg">
        <Toolbar disableGutters>
          <GavelIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              padding: "0 0 0 0.5rem",
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Auction
          </Typography>
          <GavelIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography variant="h5" noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              padding: "0 0 0 0.5rem",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Auction
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "start" }} >
              
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
            {
              btnVisible ? null :
            <Chip variant="contained" label= {`${user.username} | $${user.wallet}`} color="primary" size="medium"
              avatar={<PersonIcon />}
              sx={{
                  color: "#eeeee",
                  backgroundColor: "#5727A3",
                  marginRight: "2rem",
                  borderRadius: "10px",
                  fontSize: "1rem",
              }} 
            />
            }
            {
              btnVisible ?
            <Box>
              <Button size= "medium" id="button" variant="contained" type="submit" color="primary"
              onClick={getModalHandler("LogIn")}
              sx={{
                  backgroundColor: "#411E8F",
                  margin:"0 0.5rem 0 0",
                  '&:hover': {
                      backgroundColor: "#EEEE",
                      color: "#411E8F"
                  },
              }}
              >
                 Log in
            </Button>
            <LogIn 
              open={isOpenLogIn} 
              handleOpenSignUp={getModalHandler("SignUp")} 
              handleClose={getModalCloseHandler("LogIn")}
            />
           <Button size= "medium" id="button" variant="contained" type="submit" color="primary"
              onClick={getModalHandler("SignUp")}
              sx={{
                  backgroundColor: "#411E8F",
                  margin:"0 0 0 0.5rem",
                  '&:hover': {
                      backgroundColor: "#EEEE",
                      color: "#411E8F"
                  },
              }}
              >
                 Sign up
            </Button>            
              <SignUp open={isOpenSignUp} handleOpenLogIn={getModalHandler("LogIn")} handleClose={getModalCloseHandler("SignUp")}/>
            </Box>
              :
              <Button size= "medium" id="button" variant="contained" type="submit" color="primary"
              onClick={handleLogOut}
              sx={{
                  backgroundColor: "#411E8F",
                  margin:"0 0 0 0.5rem",
                  '&:hover': {
                      backgroundColor: "#EEEE",
                      color: "#411E8F"
                  },
              }}
              >               
               Logout
            </Button> 
            }
          </Box> 
        </Toolbar>
       </Container>
      </AppBar>
    </>
        );
}
export default NavComp;
