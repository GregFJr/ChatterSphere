# ChatterSphere

## Description

ChatterSphere API is a robust backend solution for a social networking web application. Designed with Node.js, Express.js, and MongoDB, it specializes in managing large volumes of unstructured data, facilitating user interactions such as sharing thoughts, reacting to others' posts, and creating a dynamic friend list.

## Features

- User account creation and management
- Posting, updating, and deleting thoughts
- Reacting to other users' thoughts
- Building and managing a friend list

## Installation

To set up ChatterSphere API locally:

1. Clone the repository:
2. Navigate to the project directory and install dependencies:
3. Start the server:


## Usage

Use API testing tools like Insomnia or Postman to interact with the API once the server is up and running.

### API Endpoints

#### Users

- `GET /api/users` - Retrieve all users
- `GET /api/users/:id` - Retrieve a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

#### Thoughts

- `GET /api/thoughts` - Retrieve all thoughts
- `GET /api/thoughts/:id` - Retrieve a single thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:id` - Update a thought by ID
- `DELETE /api/thoughts/:id` - Delete a thought by ID

#### Friends

- `POST /api/users/:userId/friends/:friendId` - Add a friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend

#### Reactions

- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

## License

This project is unlicensed.



