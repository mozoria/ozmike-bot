import React from 'react'

const ShoeForm = ({ shoe, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      placeholder="Shoe Name"
      type="text"
      value={shoe.name}
      onChange={handleChange}
      name="name"
    />
    <input
      placeholder="Shoe size"
      type="text"
      value={shoe.size}
      onChange={handleChange}
      name="size"
    />
    <input
      placeholder="Quantity"
      type="number"
      value={shoe.quantity}
      onChange={handleChange}
      name="quantity"
    />
    <button type="submit">Submit</button>
  </form>
)

export default ShoeForm
