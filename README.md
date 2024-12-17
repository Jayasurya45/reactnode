��#   r e a c t n o d e 
 
# Node.js and React App

This project is a full-stack application with a **Node.js** backend using **Express** and **MongoDB**, and a **React** frontend.

## Running the Application Locally

### Frontend (React)

To run the frontend application (React):

1. **Navigate to the frontend directory (`portfolio`)**:
    ```bash
    cd portfolio
    ```

2. **Install the frontend dependencies**:
    ```bash
    npm install axios
    npm react-router-dom
    ```

3. **Start the React development server**:
    ```bash
    npm start
    ```

    This will run the frontend on `http://localhost:3000`.

---

### Backend (Node.js + Express)

To run the backend application (Node.js + Express):

#### Prerequisites

Make sure you have the following installed:

- **Node.js**
- **MongoDB** (running locally on port 27017)
- **`nodemon`** (If not installed globally, you can install it using `npm install -g nodemon`)

#### Steps to Run the Backend

1. **Navigate to the backend directory (`crud10`)**:
    ```bash
    cd crud10
    ```

2. **Install the backend dependencies**:
    ```bash
    npm i body-parser
    npm i cors
    npm i mongoose
    ```

3. **Start the backend server using `nodemon`**:
    ```bash
    nodemon app.js
    ```

    This will run the backend on `http://localhost:7000`.

> **Note**: If you don't have `nodemon` installed globally, you can install it using the following command:
   ```bash
   npm install -g nodemon

