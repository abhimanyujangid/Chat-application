
---

# Chat Application

This is a full-stack chat application built with Node.js, Express, MongoDB for the backend, and React, Redux, and Socket.io for the frontend.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [File Structure](#file-structure)
6. [Contributing](#contributing)


## Features

- Real-time messaging using Socket.io
- User authentication and authorization

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For managing the application state.
- **Socket.io Client**: For real-time communication.
- **React Router**: For routing in the application.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: For styling the application.
- **DaisyUI**: UI component library for Tailwind CSS.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Socket.io**: For real-time bidirectional communication.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
- **bcryptjs**: For hashing passwords.
- **dotenv**: For loading environment variables.

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)
- MongoDB

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/abhimanyujangid/Chat-application.git
    cd Chat-application/backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your environment variables:

    ```env
    PORT=8080
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:

    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

Once both the backend and frontend servers are running, open your browser and navigate to `http://localhost:3000` to use the chat application.

## File Structure

### Backend

- **config**: Contains configuration files, such as database connection.
- **controllers**: Contains the logic for handling requests and interacting with models.
- **middleware**: Contains middleware functions for request processing.
- **models**: Contains Mongoose models for MongoDB.
- **routes**: Contains route definitions for API endpoints.
- **socket**: Contains socket.io configuration and event handling.
- **index.js**: Entry point for the backend server.

### Frontend

- **public**: Contains static files like `index.html`.
- **src**: Contains the main application code.
  - **components**: Contains React components.
  - **hooks**: Custom hooks used in the application.
  - **redux**: Redux slices and store configuration.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any contributions, issues, and feature requests are welcome!

