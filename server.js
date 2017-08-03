// ******************************************************************************
// *** Dependencies
// =============================================================

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
let exphbs = require ('express-handlebars');



// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 8889;

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

let routes = require('./controllers/cubs_controller.js');
app.use('/', routes);

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


// =============================================================
// =======================   connection for ORM    ===================
// =============================================================
// app.listen(port, function() {
// 	console.log("LISTENING ON PORT:", port);
// });


