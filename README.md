## Requirements

- Node.js (version 14 or higher)
- npm (comes with Node.js installation)

## Backend Setup
1. Navigate to the backend directory:
   ```cd cambridge-backend```

2. Install dependencies
   ```npm install```
  
3. Start the backend server:
   ```node server.js```

## Frontend Setup
1. Navigate to the frontend directory:
   ```cd cambridge-frontend```

2. Install dependencies
   ```npm install```
  
3. Start the backend server:
   ```npm start```

4. The frontend application will run on http://localhost:3001 (or the next available port if 3001 is occupied).

## Testing the Backend API 
To test the API, these are the available endpoints
- GET http://localhost:3000/products - Fetch all products.
- GET http://localhost:3000/products/:id - Fetch a product by ID.
- GET http://localhost:3000/product-types - Fetch distinct product types.
- POST http://localhost:3000/products - Add a new product.
- DELETE http://localhost:3000/products/:id - Delete a product by ID.



