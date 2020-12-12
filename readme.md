# Books CRUD RestAPI

This Repository contains all related code to the Basic CRUD Operations Based for the MongoDB Database. The Description of Each End Point Has Been Described Below:
**GET - /books** Will Return the List of Books Object Saved in the MongoDB Document
**GET - /books/:id** Will Return the Book Specified by the Id.
**PUT - /books/:id** Will Update the Book Specified by the Id.
**DELETE - /books/:id** Will Delete the Book Specified by the Id.
**POST - books/add** Will Get Add the New Book to the Database.
| No | Method | End Point |
|--|--|--|
| 1 | **GET** | /books
| 2 | **GET** | /books/:id
| 3 | **PUT** | /books/:id
| 4 | **DELETE** | /books/:id
| 5 | **POST** | books/add

## Book Model

The following is the Book Model
Name - Name of the Book - Required - Type: String
Author - Name of Author - Required - Type: String
Publisher - Name of Publisher - Required - Type: String

**_The Password and Username Requires Attenstion. As, it has to be changed according to your MongoDB settings._**
