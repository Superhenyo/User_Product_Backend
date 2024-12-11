## Users-Product-Backend
# Technology 
    * Typescript
    * node
    * MySQL(sequelize)
    * Express
# Features 
1. **User Registration & Authentication**:
   - `registerUser`: Registers a new user with email, password, etc.
   - `loginUser`: Authenticates users based on email and password.
   - `getProfile`: Retrieves the user's profile based on `userID`.
   - `updateProfile`: Updates user details (e.g., name, password).
   - `deleteUser`: Deletes a user by `userID`.

2. **Order Management**:
   - `newOrder`: Creates a new user order after checking product stock.
   - `allOrders`: Retrieves all orders.
   - `getPaginatedProducts`: Fetches orders in a paginated format.

3. **Product Management**:
   - `getAllProducts`: Retrieves all products.
   - `addNewProduct`: Adds a new product.
   - `updateProduct`: Updates product details.
   - `deleteProduct`: Deletes a product by `productID`.
   - `productByCat`: Retrieves products by category name.
   - `getPaginatedProduct`: Fetches products in a paginated format.

## API Endpoints
Here are the **full API endpoints** with detailed descriptions:

### **User API Endpoints**

1. **POST /checkEmail**
   - **Description**: Check if an email exists in the system.
   - **Body**:
     ```json
     {
       "email": "user@example.com"
     }
     ```
   - **Response**:
     ```json
     {
       "exists": true
     }
     ```

2. **POST /register**
   - **Description**: Register a new user.
   - **Body**:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "User registered successfully"
     }
     ```

3. **POST /login**
   - **Description**: Login a user and return a JWT token.
   - **Body**:
     ```json
     {
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "jwt_token_here"
     }
     ```

4. **GET /profile/:id**
   - **Description**: Get a user's profile by ID (auth required).
   - **Response**:
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "email": "johndoe@example.com"
     }
     ```

5. **PUT /updateUser**
   - **Description**: Update user profile information (auth required).
   - **Body**:
     ```json
     {
    "email" : "admin@mail.com",
    "password" : "admin"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Profile updated successfully"
     }
     ```

6. **DELETE /deleteUser**
   - **Description**: Delete a user (admin required).
   - **Body**:
     ```json
     {
       "id": 1
     }
     ```
   - **Response**:
     ```json
     {
       "message": "User deleted successfully"
     }
     ```

---

### **Orders Purchase API Endpoints**

1. **POST /new**
   - **Description**: Create a new order.
   - **Body**:
     ```json
     {
       "productId": 1,
       "quantity": 2
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Order placed successfully",
       "orderId": 123
     }
     ```

2. **GET /all**
   - **Description**: Fetch all orders (filtered if needed).
   - **Response**:
     ```json
     [
       {
         "orderId": 123,
         "productId": 1,
         "quantity": 2,
         "status": "pending"
       }
     ]
     ```

---

### **Product API Endpoints**

1. **GET /allProducts**
   - **Description**: Get all products.
   - **Response**:
     ```json
     [
       {
         "id": 1,
         "name": "Product A",
         "price": 29.99,
         "category": "Electronics",
         "stock": 100
       }
     ]
     ```

2. **POST /addNewProduct**
   - **Description**: Add a new product.
   - **Body**:
     ```json
     {
       "name": "Product B",
       "price": 49.99,
       "category": "Home",
       "stock": 150
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Product added successfully",
       "productId": 123
     }
     ```

3. **PUT /updateProduct**
   - **Description**: Update a product.
   - **Body**:
     ```json
     {
       "id": 1,
       "name": "Updated Product A",
       "price": 34.99,
       "category": "Electronics",
       "stock": 110
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Product updated successfully"
     }
     ```

4. **DELETE /deleteProduct**
   - **Description**: Delete a product by ID.
   - **Body**:
     ```json
     {
       "id": 1
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Product deleted successfully"
     }
     ```

5. **POST /productByCat**
   - **Description**: Get products filtered by category.
   - **Body**:
     ```json
     {
       "category": "Electronics"
     }
     ```
   - **Response**:
     ```json
     [
       {
         "id": 1,
         "name": "Product A",
         "price": 29.99,
         "category": "Electronics",
         "stock": 100
       }
     ]
     ```

6. **POST /paginatedProducts**
   - **Description**: Get paginated products.
   - **Body**:
     ```json
     {
       "page": 1,
       "limit": 10
     }
     ```
   - **Response**:
     ```json
     {
       "products": [
         {
           "id": 1,
           "name": "Product A",
           "price": 29.99,
           "category": "Electronics",
           "stock": 100
         }
       ],
       "total": 50,
       "page": 1,
       "limit": 10
     }
     ```

---

### **Usage with Postman**

The API has been successfully uploaded to Render, and you can test the endpoints by accessing the URL: [https://user-product-backend.onrender.com/](https://user-product-backend.onrender.com/). To test the endpoints using Postman:

1. Open Postman and create a new request.
2. Choose the appropriate HTTP method (GET, POST, PUT, DELETE) for the endpoint.
3. Enter the full URL with the endpoint path (e.g., `https://user-product-backend.onrender.com/products/allProducts`).
4. Add necessary headers or body content, depending on the request.
5. Click "Send" to test the API functionality.