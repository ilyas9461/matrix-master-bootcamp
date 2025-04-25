import React, { useState, useEffect } from "react";
import "./edit-product.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function EditProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const location = useLocation();
  const { product } = location.state || {}; // Get the product object from state
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        price: product.price || "",
        description: product.description || "",
      });
    }
  }, [product]);

  const showProduct=(product)=>{
    console.log(product);
    navigate(`/products/show/${product.id}`, { state: { product } });
    
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update Response:", data);
        navigate("/");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="form-wrapper">
      <h2>{product.title}t</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-input">
          <label>
            Name
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <label>
            Price
            <input type="text" name="price" value={formData.price} onChange={handleChange} />
          </label>
          <label>
            Description
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit" className="create-btn">
            Update
          </button>
          <div>
            <a onClick={()=>showProduct(product)} className="go-back">
              Show
            </a>
            |
            <a href="/" className="go-back">
              Home
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
