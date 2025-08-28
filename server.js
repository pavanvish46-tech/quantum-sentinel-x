// Quantum Sentinel X - Ultra 3D Server
const express = require('express');
const path = require('path');
const app = express();

// Security headers
app.use((req, res, next) => {
    res.header('X-Frame-Options', 'DENY');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-XSS-Protection', '1; mode=block');
    next();
});

// Serve static files
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'ultra.html')));
app.get('/health', (req, res) => res.json({ status: 'ultra_3d_operational' }));

// API for threat data
app.get('/api/threat-level', (req, res) => {
    const threats = {
        malware: Math.floor(Math.random() * 25) + 75,
        trojans: Math.floor(Math.random() * 35) + 65,
        permissions: Math.floor(Math.random() * 45) + 55,
        injection: Math.floor(Math.random() * 20) + 80,
        network: Math.floor(Math.random() * 30) + 70,
        encryption: Math.floor(Math.random() * 40) + 60
    };
    res.json(threats);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌌 3D Neural Interface LIVE: http://localhost:${PORT}`));
