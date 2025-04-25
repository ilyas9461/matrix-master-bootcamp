import React, { useState } from "react";
import "./show-product.css";
import { useParams, useLocation, useNavigate} from "react-router-dom";

export default function ShowProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const location = useLocation();
  const { product } = location.state || {}; // Get the product object from state
  const navigate= useNavigate()

  if (!product) {
    return <p>No product details available for ID: {id}</p>;
  }

  const editProduct=(product)=>{
    console.log(product);
    navigate(`/products/edit/${product.id}`, { state: { product } });    
  }

  return (
    <div className="show-container">
      <h1 className="show-title">{product.title}</h1>
      
      <div className="show-details">
        <div className="detail-row">
          <span className="detail-label">Name:</span>
          <span className="detail-value">{product.title}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Price:</span>
          <span className="detail-value">{product.price}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Description:</span>
          <span className="detail-value">{product.description}</span>
        </div>
      </div>
      
      <div className="show-actions">
      <a href="/" >Back</a>|<a onClick={()=>editProduct(product)}>Edit</a>
      </div>
    </div>
  )
}
