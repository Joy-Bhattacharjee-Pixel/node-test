const express = require("express");
const app = express();

// This is required for parsing body from POST
app.use(express.json());
// Required for url encoding
app.use(express.urlencoded({ extended: true }));
// Importing db details

// Dummy checking
app.get("/home", (req, res) => {
    res.json({ message: "Welcome to Inboxx Application" });
});


// Defining port
const PORT = process.env.PORT || 8081;
// Listenning to port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});