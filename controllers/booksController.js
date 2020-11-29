const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find({})
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(newBook => res.json(newBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findByIdAndDelete( req.params.id )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
