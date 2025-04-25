import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  let isMounted = true; 
  useEffect(() => {
    
    if (products.length === 0 && isMounted) {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    }
    return () => {
      isMounted = false; 
    };
  }, []);

  const showProduct = (product) => {
    navigate(`/products/show/${product.id}`, { state: { product } });
  };
  const editProduct = (product) => {
    navigate(`/products/edit/${product.id}`, { state: { product } });
  };

  const deleteProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("deleteProduct :", data);
      });
  };

  return (
    <div className="product-wrapper">
      <div className="product-title">
        {products.length != 0 ? <h2>Products</h2> : <h2>Loading ...</h2>}
        <a href="/new">Add Product</a>
      </div>

      {products.length != 0 && (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td className="actions">
                  <div>
                    <a onClick={() => showProduct(product)}>Show</a> |<a onClick={() => editProduct(product)}>Edit</a>
                    <button className="delete-btn" onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
