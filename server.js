const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('video'), (req, res) => {
    // req.file contains the uploaded file
});
app.post('/submit-form', (req, res) => {
    // req.body contains the form fields
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/submit-form', (req, res) => {
    console.log(req.body);
});

app.post('/upload', (req, res) => {
    // handle file upload
});

app.post('/submit-form', (req, res) => {
    // handle form submission
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
