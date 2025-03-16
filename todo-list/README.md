# SpaceApp - Todo List with Firebase Authentication

A modern, responsive to-do list application built with React, Firebase Authentication, and Firestore database. This app features a sleek, space-themed UI with authentication flows and real-time task management.

![SpaceApp Screenshot](./assets/screenshot.png)

## Features

- **User Authentication**
  - Email/password login and registration
  - Google OAuth integration
  - Password reset functionality

- **Task Management**
  - Create, read, update, and delete tasks
  - Real-time synchronization with Firestore
  - Toggle task completion status
  - Filter tasks (all/completed)

- **User Profile**
  - View account details
  - Personalized profile information
  - Profile picture integration

- **Modern UI**
  - Responsive design for mobile and desktop
  - Space-themed purple and black gradient UI
  - Clean, intuitive interface built with Tailwind CSS

## Tech Stack

- React 19
- Firebase 11
  - Authentication
  - Firestore Database
- React Router 7
- Tailwind CSS
- Vite (Build Tool)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/AriJayaT/to-do-list-wads.git
cd to-do-list-wads/todo-list
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` to see the application running.

## Project Structure

```
src/
├── assets/             # Static assets like images
├── components/         # Reusable components
│   ├── TaskForm.jsx    # Form to add new tasks
│   ├── TaskItem.jsx    # Individual task item component
│   ├── TaskList.jsx    # List of tasks component
│   └── useTasks.js     # Custom hook for task operations
├── pages/              # Application pages
│   ├── Landing.jsx     # Landing page after login
│   ├── Login.jsx       # Login page
│   ├── Profile.jsx     # User profile page
│   ├── Register.jsx    # Registration page
│   ├── Reset.jsx       # Password reset page
│   └── Todo.jsx        # Todo list page
├── App.jsx             # Main application component with routing
├── firebase.js         # Firebase configuration and services
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## Firebase Setup Details

### Authentication

This project uses Firebase Authentication with the following methods:
- Email/Password authentication
- Google OAuth authentication

### Firestore Database

The database has two main collections:
- `users`: Stores user information
- `tasks`: Stores user tasks with fields:
  - `text`: Task description
  - `completed`: Boolean indicating completion status
  - `userId`: Reference to the user
  - `createdAt`: Timestamp of creation

## Acknowledgments

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

---

Made with by Ari Jaya Teguh
