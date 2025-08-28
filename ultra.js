// Quantum Sentinel X - 3D Ultra Edition
console.log('🧬 3D Neural System Loading...');

class Quantum3D {
    constructor() {
        this.init();
    }

    init() {
        this.setup3DUpload();
        this.setupNeuralPortal();
        this.createParticles();
    }

    setup3DUpload() {
        const dropArea = document.querySelector('.upload-crystal');
        const fileInput = document.getElementById('fileInput');

        // Click to upload
        dropArea.addEventListener('click', () => fileInput.click());

        // Drag & drop
        dropArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropArea.style.transform = 'scale(1.1) rotateY(180deg)';
        });

        dropArea.addEventListener('dragleave', () => {
            dropArea.style.transform = 'scale(1) rotateY(0deg)';
        });

        dropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files[0]?.name?.endsWith('.apk')) {
                this.startQuantumAnalysis(files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files[0]?.name?.endsWith('.apk')) {
                this.startQuantumAnalysis(e.target.files[0]);
            }
        });
    }

    setupNeuralPortal() {
        window.openNeuralPortal = () => document.getElementById('neuralPortal').style.display = 'flex';
        window.closeNeuralPortal = () => document.getElementById('neuralPortal').style.display = 'none';
        window.handleNeuralLogin = (e) => {
            e.preventDefault();
            alert('🔗 Neural Interface Activated!');
            closeNeuralPortal();
        };
    }

    startQuantumAnalysis(file) {
        console.log('🚀 Analyzing:', file.name);
        
        // 3D Loading
        document.getElementById('loading3d').style.display = 'flex';
        
        setTimeout(() => {
            document.getElementById('loading3d').style.display = 'none';
            document.getElementById('neuralDashboard').classList.add('active');
            this.animateThreatAnalysis();
        }, 4000);
    }

    animateThreatAnalysis() {
        const threats = {
            malware: Math.floor(Math.random() * 25) + 75,
            trojans: Math.floor(Math.random() * 35) + 65,
            permissions: Math.floor(Math.random() * 45) + 55,
            injection: Math.floor(Math.random() * 20) + 80,
            network: Math.floor(Math.random() * 30) + 70,
            encryption: Math.floor(Math.random() * 40) + 60
        };

        this.animateSphere(threats);
        this.update3DStreams(threats);
    }

    animateSphere(threats) {
        const overall = Math.floor(Object.values(threats).reduce((a, b) => a + b) / Object.values(threats).length);
        let current = 0;
        const interval = setInterval(() => {
            current++;
            document.getElementById('sphereText').textContent = current + '%';
            document.getElementById('sphereProgress').style.strokeDashoffset = 879.65 - (879.65 * current / 100);
            document.getElementById('sphereProgress').style.stroke = current > 80 ? '#ff0044' : current > 60 ? '#ff6600' : '#00ff88';
            if (current >= overall) clearInterval(interval);
        }, 25);
    }

    update3DStreams(threats) {
        Object.keys(threats).forEach(key => {
            const fill = document.getElementById(key + 'Fill');
            const value = document.getElementById(key + 'Value');
            fill.style.width = threats[key] + '%';
            value.textContent = threats[key] > 80 ? 'CRITICAL' : threats[key] > 60 ? 'HIGH' : threats[key] > 40 ? 'MEDIUM' : 'LOW';
        });
    }

    createParticles() {
        // Create floating particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            particle.style.cssText = `
                position: absolute; width: 2px; height: 2px; background: cyan;
                border-radius: 50%; box-shadow: 0 0 10px cyan;
                animation: float ${Math.random() * 10 + 5}s linear infinite;
                left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
            `;
            document.querySelector('.quantum-particles').appendChild(particle);
        }
    }
}

// Auto-start
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading3d').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    }, 3000);
    
    new Quantum3D();
});
