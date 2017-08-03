// =============================================================
// Dependencies
// =============================================================
var db = require("../models");

// =============================================================
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/cubs", function(req, res) {
    db.cubs.findAll({})
    .then(function(res) {
      res.json();
    });
  });

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   db.cubs.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //   .then(function(dbcubs) {
  //     res.json(dbcubs);
  //   });
  // });

  // // Get rotue for retrieving a single post
  // app.get("/api/XXX/:id", function(req, res) {
  //   db.cubs.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbcubs) {
  //     res.json(dbcubs);
  //   });
  // });

  // // POST route for saving a new post
  // app.post("/api/ ", function(req, res) {
  //   console.log(req.body);
  //   db.cubs.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //   .then(function(dbcubs) {
  //     res.json(dbcubs);
  //   });
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/XXXX/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbcubs) {
  //     res.json(dbcubs);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/cubs", function(req, res) {
  //   db.Post.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //   .then(function(dbcubs) {
  //     res.json(dbcubs);
  //   });
  // });
};
