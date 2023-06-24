import React, { useState } from 'react';

function SellForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic, including handling the uploaded image
    // You can use the 'title', 'description', and 'image' state values here
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h2>Sell Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        {image && <img src={URL.createObjectURL(image)} alt="Product Preview" />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SellForm;