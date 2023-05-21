import React, { useState, useContext } from 'react';
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
    Link, 
    Checkbox, 
    IconButton, 
    CloseIcon
} from "../../MaterialUiCmp.js";
import { makeStyles } from '@material-ui/styles';
import { register } from "../../apis/user.js";

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
        color: 'black',
      }, 
    },
  });
function SignUp(props) {
    const [errorMsg, setErrorMsg] = useState(null);
    const { user, setUser } = useContext(AuthContext); 
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value,
            confirmPass: e.target.confirmPassword.value
        }

        if (user.confirmPass !== user.password) return setErrorMsg("Password And Confirm Password Do Not Match");
        
        const response = await register(user);
        if (response.status === 'failure') return setErrorMsg(response.result);

        setUser(response.result.data);
        localStorage.setItem("userInfo", JSON.stringify({ 
            username: user.username, 
            password: user.password
        }));
        props.handleClose();

    }

        return (
          <>
            <Modal open={props.open} >
                <Box sx={style} component="form" onSubmit={handleSubmit}>
                    <IconButton onClick={props.handleClose} sx={{margin: "0 0 0 19rem", color: "#EEEE"}}>
                            <CloseIcon />
                    </IconButton>
                    <GavelIcon fontSize="large" sx={{ display: "flex", margin: "auto"}} />
                    <Typography id="modal-title" variant="h5" component="h3" 
                            sx={{
                                padding: "2rem 0 0.1rem 0",
                                textAlign: "center",
                                color: "#eeee"
                            }}
                        >                    
                            Create new account
                    </Typography>
                    <Typography variant="body1" 
                            sx={{
                                textAlign: "center", 
                                margin: "0.3rem 0 0 0", 
                                color: "#eeeeeed0"
                            }}>
                            Sign up to manage your account.
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
                        <TextField variant="outlined" className={classes.root} required fullWidth
                            size="small"
                            type="email"
                            name="email"
                            label="Email"
                            sx={{ margin: "2rem 0 0 0", input: { color: "#EEEE" } }}
                        />
                        <TextField variant="outlined" className={classes.root} required fullWidth
                            name="username" 
                            label="Username"
                            size="small"
                            type="text"
                            InputProps={{ minLength: 3, maxLength: 20 }}
                            sx={{ margin: "1rem 0 0 0", input: { color: "#EEEE" } }}
                        />
                        <TextField variant="outlined" className={classes.root} required fullWidth
                            size="small"
                            InputProps={{ minLength: 8 }}
                            type="password"
                            name="password"
                            label="Password"
                            sx={{ margin: "1rem 0 0 0", input: { color: "#EEEE" } }}
                        />  
                        <TextField variant="outlined" className={classes.root} required fullWidth
                            size="small"
                            type="password"
                            InputProps={{ minLength: 8 }}
                            name="confirmPassword"
                            label="Confirm Password"
                            sx={{ margin: "1rem 0 0 0", input: { color: "#EEEE" } }}
                        />                      
                        <Button id="button" name="action" variant="contained" type="submit" color="primary"
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
                                Sign up 
                        </Button>
                    <Typography variant="body1" sx={{textAlign: "center", margin: "2rem 0 0 0", color: "#eeeeeed0"}}>
                        Already have an account? 
                            <Button onClick={props.handleOpenLogIn} underline="none" sx={{padding: "0 0 0 0.5rem"}}> 
                                Log in 
                            </Button>
                    </Typography>
                </Box>
            </Modal>  
            </>
        );
}
export default SignUp;
