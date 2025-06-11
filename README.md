# Express Auth with Sessions

A simple user authentication system built with Express.js, MongoDB, and express-session.  
Supports user registration, login with password hashing, and session-based authentication with session storage in MongoDB.

---

## Features

- User registration with email and hashed password (bcrypt)
- User login with session creation
- Session persistence using MongoDB as session store (`connect-mongo`)
- Protected dashboard route accessible only to logged-in users
- Basic error handling and validation

---

## Tech Stack

- Node.js & Express.js
- MongoDB & Mongoose
- bcrypt for password hashing
- express-session for session management
- connect-mongo for MongoDB session store
- dotenv for environment variable management

---

## Getting Started

### Prerequisites

- Node.js installed (v14 or newer recommended)
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
Create a .env file in the root directory and add:

DATABASE_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
PORT=5000
npm run devStart

