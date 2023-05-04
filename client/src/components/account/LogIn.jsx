import React, { useState, useContext   } from 'react';
import { login } from "../../apis/user.js";
import { AuthContext } from '../../Context.js'; 
import {
    Box, 
    Button, 
    TextField, 
    Typography, 
    Modal, 
    Alert, 
    GavelIcon, 
    FormControlLabel, 
    Checkbox, 
    IconButton, 
    CloseIcon
} from "../../MaterialUiCmp.js";
import { makeStyles } from '@material-ui/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: "1rem",
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#310A5D',
    border: '1px solid #000',
    p: 4,
  };

const useStyles = makeStyles({
    root: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#eeee',
      },
      '& .MuiInputLabel-root': {
        color: '#eeee',
      },     
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: '#eeee',
      },
      '&:focus .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',color: "white"
      }, 
    },
  });
function LogIn(props) {

    const [errorMsg, setErrorMsg] = useState(null);
    const { user, setUser } = useContext(AuthContext);

    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        
        const response = await login(username, password);
        if (response.status === 'failure') return setErrorMsg(response.result);

        setUser(response.result.data);
        localStorage.setItem("userInfo", JSON.stringify({ username, password }))
        props.handleClose();
    }
        return (
        <>
            <Modal open={props.open} onClose={props.handleOpen}>
              <Box sx={style} component="form" onSubmit={handleSubmit}>
                  <IconButton onClick={props.handleClose} sx={{margin: "0 0 0 19rem", color: "#EEEE"}}>
                      <CloseIcon />
                  </IconButton>
                <GavelIcon fontSize="large" sx={{ display: "flex", margin: "auto"}} />
                   <Typography 
                        id="modal-modal-title" 
                        variant="h5" 
                        component="h3" 
                        sx={{
                            padding: "2rem 0 0.1rem 0",
                            textAlign: "center",
                            color: "#eeee"
                        }}
                    >                    
                        Welcome back 
                   </Typography>
                   <Typography 
                        variant="body1" 
                        sx={{
                            textAlign: "center", 
                            margin: "0.3rem 0 0 0", 
                            color: "#eeeeeed0"
                        }}>
                        Login to manage your account.
                    </Typography>
                    {errorMsg ? 
                        <Alert 
                            severity="error" 
                            className="text-center" 
                            sx={{margin: "1rem 0 0 0"}}
                        >
                            {errorMsg}
                        </Alert> : 
                    null}
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        className={classes.root}
                        size="small"
                        type="text"
                        name="username"
                        label="Username"
                        sx={{
                           margin: "2rem 0 0 0"
                        }}
                    />
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        className={classes.root}
                        size="small"
                        type="password"
                        name="password"
                        label="Password"
                        sx={{
                           margin: "1rem 0 0 0"
                        }}
                    />     
                     <FormControlLabel control={<Checkbox/>} label="Remember me" />                      
                      <Button 
                        id="button"
                        variant="contained"
                        type="submit"
                        name="action"
                        color="primary"
                        sx={{
                            backgroundColor: "#411E8F",
                            justifyContent: "center",
                            '&:hover': {
                                backgroundColor: "#EEEE",
                                color: "#411E8F"
                            },
                            margin: "2rem 0 0 0",
                            width: "21rem"
                        }}
                        >
                            Login
                      </Button>
                    <Typography variant="body1" sx={{textAlign: "center", margin: "2rem 0 0 0", color: "#eeeeeed0"}}>
                       Don&apos;t have an account? 
                        <Button onClick={props.handleOpenSignUp} sx={{padding: "0 0 0 0.5rem"}}>
                          Sign up
                        </Button>
                    </Typography>
              </Box>
            </Modal>
        </>
        );
};
export default LogIn;
