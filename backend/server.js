
const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Update the destination path
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Please upload only images.'));
        }
    }
});

app.use('/uploads', express.static(path.join(__dirname, 'backend/uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/books', upload.single('bookImage'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { title, author, genre } = req.body;
    const imagePath = req.file.filename;

    // Connect to MySQL and insert book details (please modify the connection details as needed)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'library'
    });

    connection.connect(err => {
        if (err) {
            console.error('Error connecting to MySQL: ' + err.stack);
            return res.status(500).send('Error connecting to MySQL');
        }

        console.log('Connected to MySQL');

        // Inserting book details into the database (Sample query, modify as needed)
        const insertQuery = `INSERT INTO books (title, author, genre, image_path) VALUES (?, ?, ?, ?)`;
        connection.query(insertQuery, [title, author, genre, imagePath], (error, results) => {
            if (error) {
                console.error('Error inserting into MySQL: ' + error);
                return res.status(500).send('Error inserting data into MySQL');
            } else {
                return res.json({ success: true });
            }
        });

        connection.end();
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
