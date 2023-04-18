import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="blog-container_article">
    <div className="blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <Link id="link" to={"/products"} style={{ textDecoration: 'none' }}>
        <p>Read Full Article</p>
      </Link>
    </div>
  </div>
);

export default Article;
