import React, { useState } from "react";
import "./new-product.css";

export default function NewProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="form-wrapper">
      <h2>New product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-input">
          <label>
            Name
            <input type="text" name="title" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Price
            <input type="text" name="price" value={formData.price} onChange={handleChange} required />
          </label>
          <label>
            Description
            <textarea name="description" value={formData.description} onChange={handleChange} required/>
          </label>
        </div>
        <div className="form-actions">
          <button type="submit" className="create-btn">
            Create
          </button>
          <a href="/" className="go-back">
            Go back
          </a>
        </div>
      </form>
    </div>
  );
}
