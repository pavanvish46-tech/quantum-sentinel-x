// Quantum Sentinel X - Ultra Edition
class NeuralNetwork {
    constructor() {
        this.canvas = document.getElementById('neuralCanvas');
        this.particles = [];
        this.init();
    }

    init() {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `position:absolute;width:2px;height:2px;background:cyan;border-radius:50%;box-shadow:0 0 10px cyan`;
            this.canvas.appendChild(particle);
            this.particles.push({
                x: Math.random() * 200, y: Math.random() * 200,
                vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2
            });
        }
        this.animate();
    }

    animate() {
        this.particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > 200) p.vx *= -1;
            if (p.y < 0 || p.y > 200) p.vy *= -1;
            p.element = p.element || this.canvas.children[this.particles.indexOf(p)];
            p.element.style.left = p.x + 'px';
            p.element.style.top = p.y + 'px';
        });
        requestAnimationFrame(() => this.animate());
    }
}

class UltraScanner {
    constructor() {
        this.init();
    }

    init() {
        document.getElementById('uploadNeural').addEventListener('click', () => {
            document.getElementById('fileInput').click();
        });
        document.getElementById('fileInput').addEventListener('change', (e) => this.handleUpload(e));
    }

    handleUpload(e) {
        const file = e.target.files[0];
        if (file && file.name.endsWith('.apk')) {
            this.startAnalysis();
        } else {
            alert('Please upload a valid APK file');
        }
    }

    startAnalysis() {
        document.getElementById('loadingMatrix').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('loadingMatrix').style.display = 'none';
            document.getElementById('ultraDashboard').classList.add('active');
            this.animateResults();
        }, 3000);
    }

    animateResults() {
        const threats = {
            malware: Math.floor(Math.random() * 25) + 75,
            trojans: Math.floor(Math.random() * 35) + 65,
            permissions: Math.floor(Math.random() * 45) + 55,
            injection: Math.floor(Math.random() * 20) + 80,
            network: Math.floor(Math.random() * 30) + 70,
            encryption: Math.floor(Math.random() * 40) + 60
        };

        this.animateRing(Object.values(threats).reduce((a, b) => a + b) / Object.values(threats).length);
        this.updateStreams(threats);
    }

    animateRing(overall) {
        let current = 0;
        const interval = setInterval(() => {
            current++;
            document.getElementById('threatPercentage').textContent = current + '%';
            document.getElementById('threatRing').style.strokeDashoffset = 879.65 - (879.65 * current / 100);
            document.getElementById('threatRing').style.stroke = current > 80 ? '#ff0044' : current > 60 ? '#ff6600' : '#00ff88';
            if (current >= overall) clearInterval(interval);
        }, 25);
    }

    updateStreams(threats) {
        Object.keys(threats).forEach(key => {
            const fill = document.getElementById(key + 'Fill');
            const value = document.getElementById(key + 'Value');
            fill.style.width = threats[key] + '%';
            value.textContent = threats[key] > 80 ? 'CRITICAL' : threats[key] > 60 ? 'HIGH' : threats[key] > 40 ? 'MEDIUM' : 'LOW';
        });
    }
}

// Portal
function openNeuralPortal() { document.getElementById('neuralPortal').style.display = 'flex'; }
function closeNeuralPortal() { document.getElementById('neuralPortal').style.display = 'none'; }
function handleNeuralLogin(e) { e.preventDefault(); alert('🔗 Neural interface activated!'); closeNeuralPortal(); }

document.addEventListener('DOMContentLoaded', () => {
    new NeuralNetwork();
    new UltraScanner();
});
