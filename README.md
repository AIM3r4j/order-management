## Order Management

### Description

This project implements a set of API endpoints for handling CRUD (Create, Read, Update, Delete) operations of orders. The API processes order details including user ID, product IDs, quantities, and payment information. It handles various HTTP methods such as GET, POST, PUT, PATCH, and DELETE requests for managing orders. The endpoint is designed to validate incoming data, handle exceptions gracefully, and return appropriate responses.

### Features

- Implements CRUD operations for orders
- Validates incoming data
- Handles exceptions
- Supports various HTTP methods (GET, POST, PUT, PATCH, DELETE)

### Live Link

[Live APP](https://order-management-52ve.onrender.com/omapi/hello)

### Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AIM3r4j/order-management.git
   ```

2. Navigate to the project directory:

   ```bash
   cd order-management
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

4. Set up environment variables:

   - Create a .env file based on the provided .env.example file.

   - Update the variables with appropriate values.

5. Run application:

   ```bash
   npm run start:dev
   ```

### Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t <image_name> .
   ```

2. Run the Docker container:

   ```bash
   docker run -p <host_port>:<container_port> -d <image_name>
   ```

3. Replace <host_port> with the port on your host machine where you want to access the application, and <container_port> with the port specified in the .env file or the default port if not specified. <image_name> is the name you gave to your Docker image in step 1.

### Documentation:

1.  Locate the "Order Management.postman_collection.json" file inside the base folder

2.  Import the file into Postman

3.  Use the postman collection as the documentation for the app

4.  Update the baseURL variable's port if needed

### API Endpoints

- GET /orders: Retrieve all orders
- GET /orders/:id: Retrieve a specific order by ID
- POST /orders: Create a new order
- PUT /orders/:id: Update an existing order
- PATCH /orders/:id: Partially update an existing order
- DELETE /orders/:id: Delete an existing order
