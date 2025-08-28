// Quantum Sentinel X - Production Server
const express = require('express');
const path = require('path');
const app = express();

// Security headers
app.use((req, res, next) => {
    res.header('X-Frame-Options', 'DENY');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Compression and performance
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true,
    lastModified: true
}));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ultra.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ultra_operational',
        timestamp: new Date().toISOString(),
        neural_status: 'quantum_ready',
        version: '2.1.0'
    });
});

// API endpoints
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

// Handle 404s gracefully
app.use((req, res) => {
    res.status(404).json({ error: 'Neural pathway not found' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error('Quantum Sentinel Error:', err);
    res.status(500).json({ error: 'Neural systems temporarily offline', timestamp: new Date().toISOString() });
});

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🌌 Quantum Sentinel X Neural Interface LIVE at:`);
    console.log(`   Local: http://localhost:${PORT}`);
    console.log(`   Render: https://quantum-sentinel-x.onrender.com`);
    console.log(`   Health: http://localhost:${PORT}/health`);
});

module.exports = app;
