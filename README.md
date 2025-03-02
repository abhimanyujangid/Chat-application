
---

## About This Project 🚀  

This project is a modern web application built using cutting-edge technologies to ensure a seamless user experience. It incorporates real-time communication, efficient state management, and a responsive UI for enhanced performance.  

### Tech Stack 🛠️  

#### Frontend:  
- **React** ⚛️ - A JavaScript library for building dynamic and interactive user interfaces.  
- **Redux Toolkit** 🗄️ - Simplifies state management with powerful tools.  
- **Socket.io Client** 🔄 - Enables real-time communication between users.  
- **React Router** 🚏 - Manages client-side routing for smooth navigation.  
- **Axios** 🌐 - Handles HTTP requests efficiently.  
- **Tailwind CSS** 🎨 - Provides utility-first styling for a sleek design.  
- **DaisyUI** ✨ - A Tailwind CSS component library for rapid UI development.  

#### Backend:  
- **Node.js** 🚀 - A JavaScript runtime built on Chrome's V8 JavaScript engine.  
- **Express** ⚡ - A minimal and flexible Node.js web application framework.  
- **Mongoose** 🛢️ - An ODM (Object Data Modeling) library for MongoDB and Node.js.  
- **Socket.io** 🔄 - For real-time bidirectional communication.  
- **JWT (JSON Web Tokens)** 🔐 - For user authentication and authorization.  
- **bcryptjs** 🔑 - For hashing passwords.  
- **dotenv** 🌍 - For loading environment variables.  

### Features 💡  
✅ Real-time updates using WebSockets  
✅ Efficient state management with Redux Toolkit  
✅ Secure authentication with JWT and bcryptjs  
✅ Responsive and accessible UI with Tailwind CSS & DaisyUI  
✅ Seamless navigation with React Router  
✅ API integration with Axios  
✅ Database management with MongoDB and Mongoose  

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

