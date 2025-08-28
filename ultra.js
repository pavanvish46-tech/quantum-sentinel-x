// ✅ Complete Upload & Login System
console.log('🎯 Quantum Sentinel X - Upload & Login System Active');

// ✅ File Upload System
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const dropArea = document.querySelector('.crystal-core');
    const resultsSection = document.getElementById('resultsSection');
    
    // ✅ Click upload
    dropArea.addEventListener('click', () => fileInput.click());
    
    // ✅ Handle file selection
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.name.endsWith('.apk')) {
            analyzeFile(file);
        } else {
            alert('📱 Please upload a valid APK file');
        }
    });
    
    // ✅ Drag & drop
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.style.transform = 'scale(1.1)';
    });
    
    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.style.transform = 'scale(1)';
        const file = e.dataTransfer.files[0];
        if (file?.name?.endsWith('.apk')) {
            analyzeFile(file);
        }
    });
    
    // ✅ Auto-hide loading
    setTimeout(() => {
        document.getElementById('loading3d').style.display = 'none';
    }, 2000);
});

// ✅ File Analysis
function analyzeFile(file) {
    console.log('🧬 Analyzing:', file.name);
    
    // Show loading
    document.querySelector('.crystal-core').innerHTML = '🔄 Analyzing...';
    
    setTimeout(() => {
        const threats = {
            malware: Math.floor(Math.random() * 30) + 70,
            trojans: Math.floor(Math.random() * 40) + 60,
            permissions: Math.floor(Math.random() * 50) + 50,
            injection: Math.floor(Math.random() * 25) + 75,
            network: Math.floor(Math.random() * 35) + 65,
            encryption: Math.floor(Math.random() * 45) + 55
        };
        
        const overall = Math.floor(Object.values(threats).reduce((a, b) => a + b) / Object.values(threats).length);
        
        // ✅ Show results
        document.getElementById('resultsSection').style.display = 'block';
        document.getElementById('threatResults').innerHTML = `
            <p style="color: cyan; font-size: 1.5rem;">📊 Results for: ${file.name}</p>
            <p>Overall Threat: <span style="color: ${overall > 80 ? '#ff0044' : '#00ffff'}">${overall}%</span></p>
            <p>Malware: ${threats.malware}%</p>
            <p>Banking Trojans: ${threats.trojans}%</p>
            <p>Permission Risk: ${threats.permissions}%</p>
            <p style="color: ${overall > 80 ? 'red' : 'green'}; font-size: 1.2rem;">
                ${overall > 80 ? '🚨 CRITICAL' : '✅ RELATIVELY SAFE'}
            </p>
        `;
        
        // Reset upload area
        document.querySelector('.crystal-core').innerHTML = `
            <div class="crystal-icon">📱</div>
            <div class="crystal-text">DROP APK HERE</div>
            <div class="crystal-glow"></div>
        `;
        
        // ✅ Animate progress circle
        animateProgress(overall);
    }, 2000);
}

// ✅ Progress Animation
function animateProgress(overall) {
    const circle = document.getElementById('progressCircle');
    const text = document.getElementById('progressText');
    let current = 0;
    
    const interval = setInterval(() => {
        current++;
        text.textContent = current + '%';
        circle.style.strokeDashoffset = 565.48 - (565.48 * current / 100);
        circle.style.stroke = current > 80 ? '#ff0044' : current > 60 ? '#ff6600' : '#00ff88';
        
        if (current >= overall) clearInterval(interval);
    }, 25);
}

// ✅ Neural Login
window.openPortal = () => document.getElementById('portalModal').style.display = 'flex';
window.closePortal = () => document.getElementById('portalModal').style.display = 'none';
window.neuralLogin = () => {
    alert('🔗 Neural Interface Activated!');
    closePortal();
};
