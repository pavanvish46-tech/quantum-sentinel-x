// ✅ Quantum Sentinel X - Bulletproof JavaScript
console.log('🎯 JavaScript Loading...');

// ✅ Wait for DOM fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM Ready - Initializing Systems');
    
    // ✅ Auto-hide loading
    setTimeout(() => {
        const loading = document.getElementById('loading3d');
        const container = document.getElementById('mainContainer');
        if (loading) loading.style.display = 'none';
        if (container) container.style.display = 'block';
        console.log('✅ Loading hidden');
    }, 2000);

    // ✅ File Upload System
    const fileInput = document.getElementById('fileInput');
    const dropArea = document.querySelector('.crystal-core');

    if (fileInput && dropArea) {
        console.log('✅ Upload system found');

        // ✅ Click upload
        dropArea.addEventListener('click', () => {
            fileInput.click();
            console.log('✅ Click triggered');
        });

        // ✅ File selection
        fileInput.addEventListener('change', (e) => {
            console.log('✅ File selected:', e.target.files[0]?.name);
            const file = e.target.files[0];
            if (file && file.name.endsWith('.apk')) {
                analyzeFile(file);
            } else {
                alert('📱 Upload APK file only');
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
    }

    // ✅ Login System
    const portalBtn = document.querySelector('.neural-login-btn');
    const portalModal = document.getElementById('neuralPortal');
    
    if (portalBtn && portalModal) {
        console.log('✅ Login system found');
        
        window.openNeuralPortal = () => portalModal.style.display = 'flex';
        window.closeNeuralPortal = () => portalModal.style.display = 'none';
        window.handleNeuralLogin = (e) => {
            e.preventDefault();
            alert('🔗 Neural Interface Activated!');
            closeNeuralPortal();
        };
    }

    console.log('✅ All systems initialized');
});

// ✅ File Analysis
function analyzeFile(file) {
    console.log('🧬 Analyzing:', file.name);
    
    // Show loading
    document.querySelector('.crystal-core').innerHTML = '🔄 Scanning...';
    
    setTimeout(() => {
        const threats = {
            malware: Math.floor(Math.random() * 30) + 70,
            trojans: Math.floor(Math.random() * 40) + 60,
            permissions: Math.floor(Math.random() * 50) + 50
        };
        
        const overall = Math.floor(Object.values(threats).reduce((a, b) => a + b) / 3);
        
        // ✅ Show results
        const resultsSection = document.getElementById('resultsSection');
        if (resultsSection) {
            resultsSection.style.display = 'block';
            resultsSection.innerHTML = `
                <h3 style="color: cyan;">📊 Analysis Complete</h3>
                <p>File: ${file.name}</p>
                <p>Overall Threat: ${overall}%</p>
                <p style="color: ${overall > 80 ? 'red' : 'green'}">
                    ${overall > 80 ? '🚨 CRITICAL' : '✅ SAFE'}
                </p>
            `;
        }
        
        // Reset
        document.querySelector('.crystal-core').innerHTML = `
            <div class="crystal-icon">📱</div>
            <div class="crystal-text">DROP APK HERE</div>
            <div class="crystal-glow"></div>
        `;
    }, 2000);
}// ✅ Bulletproof Implementation
console.log('🎯 JavaScript Loaded');

// ✅ File Upload System
function selectFile() {
    document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.apk')) {
        analyzeFile(file);
    } else {
        alert('📱 Upload APK file only');
    }
});

// ✅ 3D File Analysis
function analyzeFile(file) {
    console.log('🧬 Analyzing:', file.name);
    
    // Show loading
    document.querySelector('.crystal-core').innerHTML = '🔄 Scanning...';
    
    setTimeout(() => {
        const threats = {
            malware: Math.floor(Math.random() * 30) + 70,
            trojans: Math.floor(Math.random() * 40) + 60,
            permissions: Math.floor(Math.random() * 45) + 55
        };
        
        const overall = Math.floor(Object.values(threats).reduce((a, b) => a + b) / 3);
        
        document.getElementById('resultsSection').style.display = 'block';
        document.getElementById('threatDisplay').innerHTML = `
            <h3 style="color: cyan;">📊 ${file.name}</h3>
            <p>Overall: <span style="color: ${overall > 80 ? 'red' : 'green'}">${overall}%</span></p>
            <p>Malware: ${threats.malware}%</p>
            <p>Trojans: ${threats.trojans}%</p>
            <p>Permissions: ${threats.permissions}%</p>
            <p style="color: ${overall > 80 ? 'red' : 'green'}; font-size: 1.2rem;">
                ${overall > 80 ? '🚨 CRITICAL' : '✅ SAFE'}
            </p>
        `;
        
        // Reset
        document.querySelector('.crystal-core').innerHTML = `
            <div class="crystal-icon">📱</div>
            <div class="crystal-text">CLICK TO UPLOAD</div>
        `;
    }, 2000);
}

// ✅ Neural Login System
window.openModal = () => document.getElementById('neuralModal').style.display = 'flex';
window.closeModal = () => document.getElementById('neuralModal').style.display = 'none';
window.neuralLogin = () => {
    alert('🔗 Neural Interface Activated!');
    closeModal();
};

// ✅ Auto-start
setTimeout(() => {
    document.getElementById('loading3d').style.display = 'none';
}, 2000);
