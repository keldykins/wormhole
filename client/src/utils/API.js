import axios from "axios";

export default {
  //Search for book
  searchForBook: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },
  // Gets all books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteSavedBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
