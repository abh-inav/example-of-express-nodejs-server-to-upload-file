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
app.post('/upload', upload.single('video'), (req, res) => {
    // Input validation
    if (!req.file) {
        return res.status(400).json({ message: 'No file provided' });
    }
    if (req.file.mimetype !== 'video/mp4') {
        return res.status(400).json({ message: 'Invalid file type' });
    }
    if (req.file.size > 100000000) {
        return res.status(400).json({ message: 'File size too large' });
    }
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ message: 'Name or Email is missing' });
    }
    // Error handling
    try {
        // move the file to the desired location
        fs.renameSync(req.file.path, 'uploads/' + req.file.originalname);
        // save file information to the database
        var data = new File({
            name: req.file.originalname,
            path: 'uploads/' + req.file.originalname,
            email: req.body.email,
            userName: req.body.name
        });
        data.save((err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Error while saving file information' });
            } else {
                return res.status(200).json({ message: 'File uploaded successfully' });
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error while uploading file' });
    }
});
