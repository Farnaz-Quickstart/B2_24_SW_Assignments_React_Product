import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';




export default function ProductList({products}) {
  return (
   <>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Category</th>
          <th>Featured</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map ((product,idx)=>(
            <tr key={idx}>
              <td>{idx+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.featured ? '✓' : '✗'}   </td>
              
          </tr>
          ))
        }
      </tbody>
    </Table>
   </>
  )
}
