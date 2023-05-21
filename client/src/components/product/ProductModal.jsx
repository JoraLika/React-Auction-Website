import React, { useState, useRef, useContext } from 'react';
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
    InputAdornment,
    InputLabel,
    IconButton, 
    CloseIcon
} from "../../MaterialUiCmp.js";
import { addProduct } from "../../apis/product.js";
import { AuthContext } from '../../Context.js'; 
import moment from 'moment';
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
        borderColor: 'black',
      }, 
    },
  });

function ProductModal(props) {
    const [errorMsg, setErrorMsg] = useState(null);
    const { user, setUser } = useContext(AuthContext);

    const [imgPath, setImgPath] = useState('');

    const classes = useStyles();

    const imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            setImgPath(base64);
        });
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const today = moment(Date.now());
        const dueDate = today.add(Number(e.target.dueDate.value), 'hours');
        const product = {
            title: e.target.title.value,
            description: e.target.description.value,
            price: e.target.price.value,
            dueDate: dueDate.toDate().getTime(),
            itemImage: imgPath
        }
        const response = await addProduct(product, user.username, user.password);
        if (response.status === 'failure') return setErrorMsg(response.result);

        props.handleClose();
    }

  return (
    <>
          <Modal open={props.open}>
                <Box sx={style} component="form" onSubmit={handleSubmit}>
                    {/* <IconButton aria-label="cancel" sx={{justifyContent: "flex-end"}}>
                            <CloseIcon />
                    </IconButton> */}
                    <GavelIcon fontSize="large" sx={{ display: "flex", margin: "auto"}} />
                    <Typography id="modal-modal-title" variant="h5" component="h3" 
                            sx={{
                                padding: "2rem 0 0.1rem 0",
                                textAlign: "center",
                                color: "#eeee"
                            }}
                        >                    
                            Create a product
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
                        <TextField className={classes.root} required fullWidth
                            size="small"
                            type="text"
                            name="title"
                            label="Product Name"
                            sx={{ margin: "2rem 0 0 0", input: { color: "#EEEE" } }}
                        />
                        <TextField className={classes.root} required fullWidth multiline
                            label="Product Description"
                            name="description"
                            rows={4}
                            size="small"
                            type="text"
                            sx={{ margin: "1rem 0 0 0", textarea: { color: "#EEEE" } }}
                        />
                        <TextField className={classes.root} required fullWidth
                            size="small"
                            type="number"
                            name="price"
                            label="Starting Bid"
                            sx={{ margin: "1rem 0 0 0", input: { color: "#EEEE" } }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                        />  
                       <TextField className={classes.root} required fullWidth
                            size="small"
                            type="number"
                            name="dueDate"
                            label="Product Duration in hours"
                            sx={{ margin: "1rem 0 0 0", input: { color: "#EEEE" } }}
                            InputProps={{
                                min: '1'
                              }}
                        />  
                        <TextField className={classes.root} fullWidth custom
                            size="small"
                            type="file"  
                            name="itemImage"
                            label= "Product Image"
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={imageUpload}
                            sx={{ margin: "1.2rem 0 0 0", input: { color: "#EEEE" } }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />  
                        <Button id="button" name="cancel" variant="contained" color="primary"
                            onClick={props.handleClose}
                            sx={{
                                backgroundColor: "#EEEE",
                                color: "#411E8F",
                                justifyContent: "center",
                                '&:hover': {
                                    backgroundColor: "#411E8F",
                                    color: "#EEEE"
                                },
                                margin: "2rem 0.4rem 0 0",
                                width: "10rem"
                            }}
                            >
                                Cancel 
                        </Button>
                        <Button id="button" name="action" variant="contained" type="submit" color="primary"
                            sx={{
                                backgroundColor: "#411E8F",
                                justifyContent: "center",
                                '&:hover': {
                                    backgroundColor: "#EEEE",
                                    color: "#411E8F"
                                },
                                margin: "2rem 0 0 0.4rem",
                                width: "10rem"
                            }}
                            >
                                Submit
                        </Button>
                </Box>
            </Modal>  
    </>
  )
}

export default ProductModal;
