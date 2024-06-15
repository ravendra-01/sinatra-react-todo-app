# Todo List App with Sinatra and ReactJS

This project demonstrates how to integrate a Sinatra backend and MongoDB as the database with a React frontend. This is a simple Todo List application. It allows users to add, update, and delete todo items.

## Features

- Add new todo items
- Update the status of todo items (mark as completed/pending)
- Delete todo items
- Display flash messages for success and error notifications
- Styled using Tailwind CSS

## Requirements

- Node.js and npm
- Ruby
- Bundler
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ravendra-01/sinatra-react-todo-app.git
    cd sinatra-react-todo-app
    ```

2. Install the required gems:
    ```sh
    bundle install
    ```

3. Configure MongoDB:
    - Make sure MongoDB is installed and running on your machine.
    - Create a `mongoid.yml` file in the root directory with the following content:
      ```yaml
      development:
        clients:
          default:
            database: todo_list_development
            hosts:
              - localhost:27017
            options:
              server_selection_timeout: 5
      ```

4. Run the backend:
    ```sh
    ruby app.rb
    ```

5. Run the frontend:
    ```sh
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:5173/` to see the application in action.

### Screenshots:

![Logo](./public/home.png)

