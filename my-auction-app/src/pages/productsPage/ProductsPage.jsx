import React, { useRef, useState, useEffect } from 'react';
import {
    Button,
    Form,
    Modal,
    Alert,
} from 'react-bootstrap';
import NavComp from '../../components/NavComp';
import moment from 'moment';
import './ProductsPage';
import AuctionCard from './AuctionCard';

const ProductsPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState('');

    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

    const itemTitle = useRef();
    const itemDesc = useRef();
    const startPrice = useRef();
    const itemDuration = useRef();
    const itemImage = useRef();

    const user = JSON.parse(localStorage.getItem('user'));
    let products = JSON.parse(localStorage.getItem('products'));

    const imgTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const submitForm = (e) => {
        e.preventDefault();
        const dueDate = moment().add(itemDuration.current.value, 'hours').format();
        const product = {
            username: user.username,
            title: itemTitle.current.value,
            description: itemDesc.current.value,
            price: startPrice.current.value,
            duration: dueDate,
            itemImage: itemImage.current.files[0],
            id: Math.random() * 1000,
        }

        console.log(itemImage);
        if (!imgTypes.includes(itemImage.current.files[0].type)) {
            setError('Please use a valid image');
            return;
        }

        if (products == null) products = [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        setError('');
        closeForm();
    };

    const imageUpload = (e) => {
        const file = itemImage.current.files[0];
        getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64;
            console.debug("file stored", base64);
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

    return (
        <div className="auction" style={{ background: '#181818' }}>
            <NavComp />
            <div className='col d-flex justify-content-center my-3'>
                <div onClick={openForm} className='btn btn-dark mx-2'>
                    + Create
                </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                {products?.map(product => (
                    <AuctionCard key={product.id} product={product} />
                ))}
            </div>

            {/* Products list */}
            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>
                    <Modal.Header>
                        <Modal.Title>Create Auction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form.Group className='mb-3'>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type='text' required ref={itemTitle} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type='text' required ref={itemDesc} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Starting Bid</Form.Label>
                            <Form.Control type='number' required ref={startPrice} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Product Duration in hours</Form.Label>
                            <Form.Control type='number' required ref={itemDuration} min='1' />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Seller</Form.Label>
                            <Form.Control
                                type='text'
                                value={user.username}
                                readOnly
                                id='seller'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control
                                onChange={imageUpload}
                                accept="image/*"
                                type='file'
                                label='Select Product Image'
                                required
                                custom
                                ref={itemImage}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={closeForm}
                            variant='outline-dark mx-2'
                        >
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                            variant='dark mx-2'
                        >
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default ProductsPage;