# Library Management System using Node.js and MySQL

## Project Overview

This project implements a Library Management System with a Node.js backend, MySQL database, and a Bootstrap-enhanced frontend. The system allows librarians to add books with details such as title, author, genre, and an associated image.

## Installation Requirements

- **Node.js:** Ensure that Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

- **MySQL:** Install MySQL and set up a database named 'library'. Update the connection details in `server.js` accordingly.

- **Dependencies:** Navigate to the project directory in the terminal and run the following command to install the project dependencies:

    ```bash
    npm install
    ```

## Tech Stack

**Frontend:**
- HTML
- Bootstrap 4.5.2
- jQuery 3.6.0

**Backend:**
- Node.js
- Express.js
- Multer (for file uploads)
- MySQL

## How to Run

1. **Start the MySQL Server:**
   Ensure your MySQL server is running.

2. **Run the Node.js Server:**
   Execute the following command to start the Node.js server:

    ```bash
    node server.js
    ```

   The server will run on [http://localhost:3000](http://localhost:3000).

3. **Access the Application:**
   Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the Library Management System.

## Usage

1. The homepage displays a form to add books.
2. Fill in the book details and select an image to upload.
3. Click the "Add Book" button to submit the form.
4. The book details will be added to the MySQL database, and the image will be stored in the 'uploads' folder.

## Note

- Ensure that the MySQL server is running before starting the Node.js server.
- Modify the MySQL connection details in `server.js` according to your MySQL setup.
- Feel free to explore and enhance the system based on your requirements! If you encounter any issues or have suggestions, please create an issue on [GitHub](https://github.com/your-repository).

