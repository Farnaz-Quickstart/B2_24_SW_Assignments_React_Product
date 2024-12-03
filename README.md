# Assignment: React Product Details Component 
Objective: Build a React application to display product details dynamically using state 
and props. This exercise will help you practice managing state, passing props, and 
rendering dynamic content in React. 
 
## Instructions 
### Set Up the App: 
1. Create a React app using create-react-app. 
2. Create the following components: 
- App: The main parent component. 
- ProductList: A child component that displays a list of products. 
- ProductForm: A child component to add new products to the list. 
 
### Product List: 
1. Create a list of 5 products in the App component. Each product should have the 
following properties: 
- id  
- name  
- price  
- category 
- featured 
2. Pass the product list as props to the ProductList component. 
3. Include filters or buttons to display [NOT FOR THIS ASSIGNMENT]: 
- All products 
- Featured products 
- Products by category (e.g., Electronics, Clothing) 
 
 
### ProductForm Component 
The ProductForm component will allow users to add new products dynamically to the 
list. It can include input fields for name, price, category. 
 
```
const products = [ 
{ 
id: 1, 
name: "Laptop", 
price: 999.99, 
category: "Electronics", 
featured: false // New field added 
}, 
{ 
id: 2, 
name: "T-shirt", 
price: 19.99, 
category: "Clothing", 
featured: false // New field added 
}, 
{ 
id: 3, 
name: "Microwave", 
price: 89.99, 
category: "Home Essentials", 
featured: false // New field added 
}, 
{ 
id: 4, 
name: "Smartphone", 
price: 699.99, 
category: "Electronics", 
featured: false // New field added 
}, 
{ 
id: 5, 
name: "Jeans", 
price: 39.99, 
category: "Clothing", 
featured: false // New field added 
}, 
{ 
id: 6, 
name: "Blender", 
  
 
price: 49.99, 
category: "Home Essentials", 
featured: false // New field added 
}, 
{ 
id: 7, 
name: "Wireless Headphones", 
price: 159.99, 
category: "Electronics", 
featured: false // New field added 
}, 
{ 
id: 8, 
name: "Socks", 
price: 5.99, 
category: "Clothing", 
featured: false // New field added 
} 
]; 
```