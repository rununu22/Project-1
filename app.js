const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const { fname, lname, email, subject } = req.body; // access form data
    
    // Add validation logic here
    if (!fname || !lname || !email || !subject) {
        return res.render('contact', { error: 'All fields are required', fname, lname, email, subject });
      }
    
      // If all fields are provided, process the form
      // Here, you can save the form data to a database, send an email, etc.
    
      res.render('success', { fname }); // Render success page with the first name
    });
    
    

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});