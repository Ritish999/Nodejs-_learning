
require('dotenv').config();

const express = require('express');
const app = express();

const connectToDatabase = require('./database');
const Blog = require('./model/blogModel');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectToDatabase();

// GET API
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello out there, this is Ritis!'
    });
});

// POST API
app.post('/blog', async (req, res) => {
    console.log('Request body:', req.body);

    const { title, subtitle, description } = req.body || {};

    // Validate request data
    if (!title || !subtitle || !description) {
        return res.status(400).json({
            message: 'Please provide title, subtitle, and description.'
        });
    }

    const blog = await Blog.create({
        title,
        subtitle,
        description
    });

    res.status(201).json({
        message: 'Blog created successfully',
        blog
    });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
