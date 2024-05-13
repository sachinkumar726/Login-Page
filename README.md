User Authentication System

## Description:
This project implements a user authentication system using ReactJS+ vite for the frontend and Node.js with Express.js and MongoDB for the backend.
The frontend utilizes Tailwind CSS for UI styling and Toast Master for displaying notifications.
Users can sign up, sign in, and their session is managed upon successful login.

---

## File Structure:
- **frontend:** Contains the ReactJS + vite frontend code.
- **backend:** Contains the Node.js with Express.js backend code.

---

## Frontend:
- **UI Framework:** Tailwind CSS
- **Notification System:** Toast Master
- **Pages:*
    Home page
  - Sign Up Page
  - Sign In Page

---

## Backend:
- **Framework:** Express.js
- **Database:** MongoDB

---

## Features:
- User Registration: Users can create a new account by providing a username, email, and password. Basic form validation is implemented.
- User Login: Users can log in using their email and password. Session-based authentication is used to manage user sessions.
- User Profile Page: After login, users are redirected to a Hom page.This page is only accessible to logged-in users.
- Logout Functionality: Users can log out, ending their session.
- Error Handling: Proper error handling is implemented for scenarios such as duplicate users and incorrect passwords.

---

## How to Run:
1. Clone the repository.
2. Navigate to the backend directory and run `npm install` to install backend dependencies and 'npm install express'.
3. Start MongoDB server.
4. Run `node server.js` to start the backend server.
5. Navigate to the frontend directory and run `npm install` to install frontend dependencies.
6. Run `npm start or npm run dev` to start the frontend server.
7. Access the application in your browser at `http://localhost:5000`.

---

## Additional Notes:
- Ensure MongoDB is installed and running before starting the backend server.
- Configure environment variables for sensitive information such as database connection details.
- Feel free to customize the UI, add more features, or extend functionality as needed.

---

