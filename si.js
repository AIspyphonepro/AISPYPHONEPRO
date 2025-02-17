document.addEventListener("DOMContentLoaded", () => {
    // تحميل الإعدادات المحفوظة
    const settings = ["darkMode", "firewall", "vpn", "antiTracking", "encryption", "autoUpdate", "anonymousMode", "aiSecurity", "biometric", "quantumEncryption"];
    
    settings.forEach(setting => {
        let checkbox = document.getElementById(setting);
        let savedValue = localStorage.getItem(setting);
        if (savedValue === "true") {
            checkbox.checked = true;
        }
    });

    // حفظ الإعدادات عند الضغط على الزر
    document.querySelector(".save-btn").addEventListener("click", () => {
        settings.forEach(setting => {
            let checkbox = document.getElementById(setting);
            localStorage.setItem(setting, checkbox.checked);
        });
        alert("✅ Settings saved successfully!");
    });

    // تأثير الخلفية (Matrix Rain Effect)
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = "010101 HACKED SYSTEM SECURE CODE 1010110";
    const matrix = letters.split("");
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#0f0";
        ctx.font = fontSize + "px monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
});
window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        document.querySelectorAll('.setting').forEach(el => {
            el.style.width = "90%";
            el.style.margin = "5px auto";
        });

        document.querySelector(".settings-card").style.display = "none"; // إخفاء البطاقة
        document.querySelector(".save-button").style.width = "90%";
    } else {
        document.querySelector(".settings-card").style.display = "block"; // إظهارها على الكمبيوتر
        document.querySelector(".save-button").style.width = "250px";
    }
});
