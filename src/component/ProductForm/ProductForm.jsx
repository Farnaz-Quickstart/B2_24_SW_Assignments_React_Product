import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ProductForm({products,setProdcuts}) {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState(0)
  const [productCategory, setProductCategory] = useState(0)
  const [productFeature, setProductFeature] = useState(0)

  let handleAdd = (e) => {
    e.preventDefault();
    let NewProduct = {
      name: productName,
      price: productPrice,
      category: productCategory,
      featured: productFeature 
      }
    console.log(NewProduct);
    setProdcuts ([...products,NewProduct])
  }



  return (
    <>
      <h1>Product Form Component</h1>
      <Form>     
        <Form.Control type="text" placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)} />

        <Form.Control type="text" placeholder="Product Price" onChange={(e)=>setProductPrice(e.target.value)} />

        <Form.Select aria-label="Default select example" onChange={(e)=>setProductCategory(e.target.value)}>
          <option>Select Product Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Home Essentials">Home Essentials</option>
          <option value="Electronics">Electronics</option>
        </Form.Select>

        <Form.Select aria-label="Default select example" onChange={(e)=>setProductFeature(e.target.value)}>
          <option>Select Product Featured</option>
          <option value="true">YES</option>
          <option value="false">NO</option>
        </Form.Select>

        <Button variant="primary" type="submit" onClick={(e)=>{handleAdd(e)}}>
          Submit
        </Button>
    </Form>
    </>
  )
}
