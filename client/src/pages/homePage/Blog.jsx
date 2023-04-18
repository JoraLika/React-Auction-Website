import React from 'react';
import './HomePage.css';
import Article from './Article';
// import pic2 from '../../images/pic2.png';
import pic2 from '../../images/pic2.png';
import pic4 from '../../images/pic4.png';
import pic5 from '../../images/pic5.png';
import pic6 from '../../images/pic6.png';
import pic7 from '../../images/pic7.png';
import pic8 from '../../images/pic8.png';

const Blog = () => (
    <div className="blog section__padding" id="blog">
        <div className="blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="blog-container">
            <div className="blog-container_groupA">
                <Article imgUrl={pic4} date="Dec  1, 2021" text="Impressionist & Modern Art. Explore For More!" />
                <Article imgUrl={pic8} date="Dec  1, 2021" text="December Country House & Fine Interiors Auction. Explore For More!" />
                <Article imgUrl={pic6} date="Dec  1, 2021" text="Antiques & Fine Art Sale. Explore For More!" />
                <Article imgUrl={pic7} date="Dec  1, 2021" text="The Europian Sale. Explore For More!" />
                <Article imgUrl={pic2} date="Dec  1, 2021" text="Antique & Vintage Jewellery Auction. Explore For More!" />
                <Article imgUrl={pic5} date="Dec  1, 2021" text="19th & 20th Century Photographs. Explore For More!" />
            </div>
        </div>
    </div>
);

export default Blog;