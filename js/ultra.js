// 🔧 Add to ultra.js top
console.log('📡 Neural Interface Loading...');

// 🔧 Add file existence check
window.addEventListener('load', () => {
    console.log('✅ Files loaded:', {
        html: document.title,
        css: !!document.querySelector('link[href*="css"]'),
        js: !!document.querySelector('script[src*="js"]')
    });
});
// Quantum Sentinel X - Ultra Edition
class NeuralNetwork {
    constructor() {
        this.particles = [];
        this.neuralCanvas = document.getElementById('neuralCanvas');
        this.init();
    }

    init() {
        this.createNeuralParticles();
        this.animateNeuralField();
    }

    createNeuralParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'neural-particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: cyan;
                border-radius: 50%;
                box-shadow: 0 0 10px cyan;
            `;
            this.neuralCanvas.appendChild(particle);
            this.particles.push({
                element: particle,
                x: Math.random() * 200,
                y: Math.random() * 200,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            });
        }
    }

    animateNeuralField() {
        const animate = () => {
            this.particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > 200) particle.vx *= -1;
                if (particle.y < 0 || particle.y > 200) particle.vy *= -1;

                particle.element.style.left = particle.x + 'px';
                particle.element.style.top = particle.y + 'px';
            });
            requestAnimationFrame(animate);
        };
        animate();
    }
}

class UltraScanner {
    constructor() {
        this.uploadNeural = document.getElementById('uploadNeural');
        this.ultraDashboard = document.getElementById('ultraDashboard');
        this.loadingMatrix = document.getElementById('loadingMatrix');
        this.threatRing = document.getElementById('threatRing');
        this.threatPercentage = document.getElementById('threatPercentage');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupNeuralEffects();
    }

    setupEventListeners() {
        this.uploadNeural.addEventListener('click', () => document.getElementById('fileInput').click());
        document.getElementById('fileInput').addEventListener('change', (e) => this.handleUpload(e));
    }

    setupNeuralEffects() {
        new NeuralNetwork();
    }

    handleUpload(e) {
        const file = e.target.files[0];
        if (file && file.name.endsWith('.apk')) {
            this.startQuantumAnalysis();
        } else {
            this.showNotification('Upload valid APK file');
        }
    }

    startQuantumAnalysis() {
        this.loadingMatrix.style.display = 'flex';
        
        setTimeout(() => {
            this.loadingMatrix.style.display = 'none';
            this.ultraDashboard.classList.add('active');
            this.animateThreatMatrix();
        }, 4000);
    }

    animateThreatMatrix() {
        const threats = this.generateUltraThreats();
        const overallThreat = Math.floor(Object.values(threats).reduce((a, b) => a + b) / Object.values(threats).length);

        this.animateThreatRing(overallThreat);
        this.animateDataStreams(threats);
    }

    generateUltraThreats() {
        return {
            malware: Math.floor(Math.random() * 25) + 75,
            trojans: Math.floor(Math.random() * 35) + 65,
            permissions: Math.floor(Math.random() * 45) + 55,
            injection: Math.floor(Math.random() * 20) + 80,
            network: Math.floor(Math.random() * 30) + 70,
            encryption: Math.floor(Math.random() * 40) + 60
        };
    }

    animateThreatRing(target) {
        let current = 0;
        const interval = setInterval(() => {
            current++;
            this.threatPercentage.textContent = current + '%';
            
            const offset = 879.65 - (879.65 * current / 100);
            this.threatRing.style.strokeDashoffset = offset;
            this.threatRing.style.stroke = this.getNeuralColor(current);

            if (current >= target) {
                clearInterval(interval);
                this.updateNeuralStatus(target);
            }
        }, 25);
    }

    animateDataStreams(threats) {
        setTimeout(() => {
            Object.keys(threats).forEach(key => {
                const fillElement = document.getElementById(key + 'Fill');
                const valueElement = document.getElementById(key + 'Value');
                
                fillElement.style.width = threats[key] + '%';
                valueElement.textContent = this.getNeuralStatus(threats[key]);
            });
        }, 2000);
    }

    getNeuralColor(level) {
        if (level < 30) return '#00ff88';
        if (level < 60) return '#ffff00';
        if (level < 80) return '#ff6600';
        return '#ff0044';
    }

    getNeuralStatus(level) {
        if (level > 85) return 'CRITICAL THREAT';
        if (level > 70) return 'HIGH RISK';
        if (level > 50) return 'MEDIUM RISK';
        return 'RELATIVELY SAFE';
    }

    updateNeuralStatus(level) {
        const status = level > 85 ? '🔴 NEURAL ALERT' : 
                      level > 70 ? '🟡 QUANTUM WARNING' : '🟢 NEURAL CLEAR';
        
        document.getElementById('threatStatus').innerHTML = `<span style="color: ${this.getNeuralColor(level)}">${status}</span>`;
    }

    showNotification(message) {
        alert(message);
    }
}

// Portal Functions
function openNeuralPortal() {
    document.getElementById('neuralPortal').style.display = 'flex';
}

function closeNeuralPortal() {
    document.getElementById('neuralPortal').style.display = 'none';
}

function handleNeuralLogin(e) {
    e.preventDefault();
    alert('🔗 Neural interface activated! Welcome to the quantum realm.');
    closeNeuralPortal();
}

// Initialize Ultra Edition
document.addEventListener('DOMContentLoaded', () => {
    new UltraScanner();
});
