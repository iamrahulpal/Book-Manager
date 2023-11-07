# Book-Manager

The Book Manager is a powerful Node.js application built with the Express framework and MongoDB as the database. It provides a wide range of features for managing books, including Create, Read, Update, and Delete operations.

## API Endpoints

### Create Book

- **Endpoint:** POST /api/book
- **Description:** Create a book.
- **Request Body:**
  - title (string): The title of the book.
  - author (string): The author of the book.
  - summary (string): The summary for the book.
- **Response:**
  - Status 201
  - JSON Response: Book added successfully.

### Get All Books

- **Endpoint:** GET /api/book
- **Description:** Retrieve a list of all existing books.
- **Response:**
  - Status 200 OK: The request was successful.
  - JSON Response: An array of books, each containing id, title, author,summary, created_at and updated_at details.

### Get Single Book

- **Endpoint:** GET /api/book/:id
- **Description:** Retrieve a specific book by its unique ID.
- **Response:**
  - Status 200 OK: The request was successful.
  - JSON Response: The book with its id, title, author, summary, created_at and updated_at details.

### Update Book

- **Endpoint:** PUT /api/book/:id
- **Description:** Update an existing book by its ID.
- **Request Body:**
   - title (string): The title of the book.
  - author (string): The author of the book.
  - summary (string): The summary for the book.
- **Response:**
  - Status 200 OK: The book has been successfully updated.
  - JSON Response: The updated book with its id, title, author, summary, created_at and updated_at details.

### Delete Book

- **Endpoint:** DELETE /api/book/:id
- **Description:** Delete a book by its ID.
- **Response:**
  - Status 204 No Content: The book has been successfully deleted.

## Usage

---

This README provides a brief overview of the Comprehensive Blog API and its available endpoints. For more detailed usage and examples, refer to the documentation and consider exploring the API interactively on the hosted Vercel instance.
