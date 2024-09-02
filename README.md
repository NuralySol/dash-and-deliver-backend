# Food Delivery App Backend

This is the backend of the Food Delivery App built using the MERN stack.

## Technologies Used

- MongoDB
- Express
- Node.js
- JWT Authentication
- CORS
- Axios
- Mongoose
- Bcrypt

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your MongoDB URI and JWT secret.
4. Run `npm run dev` to start the server in development mode.

## API Routes

- Unprotected routes

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/`              | Welcome message           |
| POST   | `/auth/register` | Register a new user       |
| POST   | `/auth/login`    | Log in a user             |
| GET    | `/restaurants`   | Get a list of restaurants |

- Protected routes

| Method | Endpoint                         | Description                                    |
| ------ | -------------------------------- | ---------------------------------------------- |
| GET    | `/menu-items`                    | Get all menu items                             |
| POST   | `/menu-items`                    | Create a new menu item                         |
| GET    | `/orders`                        | Get all orders for the authenticated user      |
| POST   | `/orders`                        | Create a new order                             |
| GET    | `/addresses`                     | Get all addresses for the authenticated user   |
| POST   | `/addresses`                     | Create a new address                           |
| GET    | `/addresses/:id`                 | Get a specific address by ID                   |
| PUT    | `/addresses/:id`                 | Update an existing address by ID               |
| DELETE | `/addresses/:id`                 | Delete an address by ID                        |
| POST   | `/payment/create-payment-intent` | Create a payment intent for a specific amount. |

## Contributing

Feel free to fork the repository and submit pull requests.

## Suggestions

1. API Endpoint Configuration

   • Ensure that all frontend applications or services consuming this API are configured to use the correct API base URL.
   • Store the API base URL in environment variables or configuration files to easily switch between development, staging, and production environments.

2. Authentication Setup

   • Implement JWT authentication on the client side, ensuring that tokens are securely stored (e.g., in localStorage or sessionStorage).
   • Include the JWT token in the Authorization header for all requests to protected routes.

3. Handle API Responses

   • Implement error handling on the client side to manage responses from the API, including handling errors like 401 Unauthorized, 404 Not Found, and 500 Internal Server Error.
   • Use loading indicators and user notifications to enhance the user experience during API requests.

4. Test API Integration

   • Use Postman or similar tools to test API endpoints before integrating them into the frontend.
   • Write unit and integration tests for your API client to ensure that it interacts correctly with the backend.

5. Add Missing Routes

   • Review the missing CRUD operations for entities like Addresses, Restaurants, Menu Items, Food Orders, Order Menu Items, and Order Status.
   • Implement these routes as needed in the backend to provide full CRUD support.

6. Documentation and Onboarding

   • Ensure that API documentation is kept up-to-date with any changes or additions to the routes.
   • Provide onboarding documentation for new developers, including instructions on setting up the development environment and integrating with the API.

7. Deployment and Monitoring

   • Deploy the API to a production environment with proper CI/CD pipelines.
   • Implement monitoring and logging to track API performance and errors in production.

This markdown documentation should serve as a comprehensive guide for developers working with the Food Delivery App API. It includes details on the available routes, suggested next steps for integration, and guidance on enhancing the API’s functionality.

## Next Steps for APIs

<details>

### DoorDash API Integration

- **Explore DoorDash API**: Understand the endpoints and integrate them into your backend.
- **Add Routes**: Create routes to fetch restaurant data from DoorDash and manage orders.
- **Error Handling**: Implement robust error handling and logging for DoorDash API calls.

### Google Maps API Integration (Fallback)

- **Explore Google Maps Places API**: Use this API to fetch restaurant data if DoorDash is not available.
- **API Key Setup**: Securely set up your Google Maps API key and integrate it into your backend.
- **New Endpoints**: Add endpoints to serve restaurant data fetched from Google Maps.

### Enhance Stripe Integration

- **Webhook Support**: Implement Stripe webhooks to handle events like successful payments.
- **Subscription Features**: Consider adding support for subscription payments if needed.
- **Error Handling**: Improve error handling for better reliability and user experience.

### Testing and Documentation

- **Unit and Integration Tests**: Ensure all new features are thoroughly tested.
- **Update Documentation**: Reflect new integrations and endpoints in the API documentation.
- **Load Testing**: Validate the backend’s performance under load with the new integrations.

</details>

test build dev