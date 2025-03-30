# Assignment 3 - The Timeline Comments

## Features

- Backend with Node.js.
- Frontend with Vanilla JS (No EJS).
- MongoDB and Mongoose ORM.
- Full CRUD operations.

---

### Screenshots

---

<p align="center">
  <table align='center'>
    <tr>
      <td align="center">
        <img src="./front-end/images/front.png" alt="Front Page" width="300">
        <p>Home Page without login</p>
      </td>
      <td align="center">
        <img src="./front-end/images/front-login.png" alt="Login Page" width="300">
        <p>Login Page</p>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./front-end/images/front-after-login.png" alt="After Login" width="300">
        <p>After Login</p>
      </td>
      <td align="center">
        <img src="./front-end/images/register.png" alt="Register Page" width="300">
        <p>Register Page</p>
      </td>
    </tr>
  </table>
</p>

## How to Run the Project

```bash
# Clone or download the project
git clone <full-repository-url>

# Navigate to the project directory with 'cd' command or file explorer.
 Assignment3-TheTimelineComments

# Install dependencies
npm install

# Create .env file in the project main directory and assign  your values  to the variables.
PORT=...
MONGO_URI=...

# Start the development server
npm run dev

# Open your browser and go to
http://localhost:PORT
```

## How do you use project?

- Register yourself via Register Form.
- Login the project via Login Form.
- Post your first message.
- Add Comment on the messages.
- Make CRUD operations with related butons.

## ERD (entity-relationship diagram)

<table align='center'>
    <tr>
      <td align="center">
        <img src="./front-end/images/erd-db.png" alt="ERD Diagram" width="400">
      </td>
      <td align="center">
        <img src="./front-end/images/compas.png" alt="ERD Diagram" width="400">
      </td>
    </tr>
<table>
<p align='center'>ERD (https://dbdiagram.io/d/time-line-with-mongodb-67e925bf4f7afba184b6017a) && Compas MongoDB </p>

## Relationships with Collections:

### Users <--> Messages:

One user can create many messages (1:N relationship).
Each message belongs to one user.

### Messages <-->Comments:

One message can have many comments (1:N relationship).
Each comment belongs to one message.

### Users <-->Comments:

One user can create many comments (1:N relationship).
Each comment belongs to one user.

## Explanation of Relationships:

### 1. One-to-One (1:1) Relationship:

- Definition: Each entity in one collection is associated with exactly one entity in another collection.
- Example: A User has one Profile, and each Profile belongs to one User.

### 2. One-to-Many (1:N) Relationship:

- Definition: One entity in a collection is associated with multiple entities in another collection.
- Example: A User can create many Messages, but each Message belongs to only one User.

### 3. Many-to-Many (M:N) Relationship:

- Definition: Many entities in one collection are associated with many entities in another collection.
- Example: A User can belong to many Groups, and each Group can have many Users.
