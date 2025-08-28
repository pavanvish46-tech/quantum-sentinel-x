const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'ultra.html')));
app.get('/health', (req, res) => res.json({status: 'ultra_ready'}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 LIVE: http://localhost:${PORT}`));
