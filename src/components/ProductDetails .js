import React from 'react';
import { useParams } from 'react-router-dom';
import '../cssFIles/ProductDetails.css'

function ProductDetails() {
  const { id } = useParams();

  // Replace with your actual product data
  const product = {
    id: 1,
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem incidunt soluta fugiat fuga deleniti reiciendis ipsam culpa veniam vel corrupti amet ratione est eveniet nobis asperiores consequuntur iusto quod, repellat ipsa.',
    image: 'https://res.cloudinary.com/dzdamfuke/image/upload/v1687585936/Personal/product1_pf8vvx.jpg',
    sellerContact: {
      contactNumber: '1234567890',
      email: 'seller@example.com',
      address: '123 Seller Street, City',
    },
    
  };

  return (
    <div>
      <div>
        <img src={product.image} alt={product.title} style={{ width: '300px', height: '500px' }}/>
      </div>
      <div key={product.id} className="product-item"></div>
      <h2>Product Details</h2>
      <h3>{product.title}</h3>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <h3>Contact Information</h3>
        <p>Contact Number: {product.sellerContact.contactNumber}</p>
        <p>Email: {product.sellerContact.email}</p>
        <p>Address: {product.sellerContact.address}</p>
      </div>
    </div>
  );
}



export default ProductDetails;