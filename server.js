// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations and waitlist (DATA)
// =============================================================
var reservations = [];
var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// retrieve reservations
app.get("/api/reservations"), function(req, res) {
    return res.json(reservations);
}

// retrieve waitlist
app.get("/api/waitlist"), function(req, res) {
    return res.json(waitlist);
}

app.post("/api/reservations", function(req, res) {
    var newReservation = req.body;
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});