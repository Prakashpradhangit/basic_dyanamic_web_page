const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if any)
app.use(express.static('public'));

// Route to render the form
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.render('result', { name, email });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
