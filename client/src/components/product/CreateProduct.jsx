import React, { useState } from 'react';
import { Fab, AddIcon, Tooltip, Box} from '../../MaterialUiCmp';
import ProductModal from './ProductModal';

function CreateProduct() {
  const [open, setOpen] = useState(false);
    
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  
  return (
    <>
    <Box sx={{ 
        position: "fixed",
        right: "7rem",
        bottom: "12%",
    }}>
    <Tooltip title="Add a product" arrow>
      <Fab onClick={handleOpenModal} id="addBtn"
        sx={{
            backgroundColor: "#411E8F",
            color: "#eeee",
            zIndex: 100,
            transition: ".4s",
            "&:hover": {
                backgroundColor: "#eeee",
                color: "#411E8F",
            }
        }}
      >
        <AddIcon />
       </Fab>
    </Tooltip>
      <ProductModal open={open} handleClose={handleCloseModal}/>
    </Box>
    </>
  )
}

export default CreateProduct;
