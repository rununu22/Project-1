const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // serve static files from the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const { firstName, lastName, phoneNumber, email } = req.body; // access form data
    
    // Add validation logic here
    if (!firstName || !lastName || !phoneNumber || !email) {
        return res.status(400).send('All fields are required');
    }
    
    // If all fields are provided, process the form
    // Here, you can save the form data to a database, send an email, etc.
    
    // Sending a success response with the first name
    res.status(200).send(`Thank you, ${firstName}! Your form has been submitted successfully.`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
