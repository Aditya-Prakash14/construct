const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the React/Astro frontend app
const path = require('path');
const fs = require('fs');
console.log('__dirname:', __dirname);
const staticPath = path.resolve(__dirname, '../frontend/dist');
console.log('Serving static files from:', staticPath);

if (fs.existsSync(staticPath)) {
    console.log('Directory exists. Contents:', fs.readdirSync(staticPath));
} else {
    console.error('Directory DOES NOT EXIST');
}

app.use(express.static(staticPath));

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'ApplyMate API is running' });
});

// Mock Job Matching Endpoint
app.get('/api/jobs', async (req, res) => {
    // In a real app, this would query the DB or external APIs
    const jobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechCorp',
            matchScore: 95,
            location: 'Remote',
            type: 'Full-time'
        },
        {
            id: 2,
            title: 'Full Stack Engineer',
            company: 'StartupX',
            matchScore: 88,
            location: 'Bangalore',
            type: 'Hybrid'
        },
        {
            id: 3,
            title: 'React Native Developer',
            company: 'MobileFirst',
            matchScore: 82,
            location: 'Remote',
            type: 'Contract'
        }
    ];
    res.json(jobs);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
