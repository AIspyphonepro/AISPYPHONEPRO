const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 3,
        speedY: (Math.random() - 0.5) * 3,
        radius: Math.random() * 3 + 1,
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "#0f0";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

document.querySelector(".activateBtn").addEventListener("click", function (e) {
    e.preventDefault(); // منع الانتقال الفوري
    let portal = document.createElement("div");
    portal.classList.add("wormhole");
    document.body.appendChild(portal);

    setTimeout(() => {
        window.location.href = "plans.html";
    }, 1500); // تأخير الانتقال بعد تأثير البوابة
});

function openCryptoPortal() {
    document.body.style.transition = "transform 0.8s ease-in-out";
    document.body.style.transform = "scale(1.1) rotateY(360deg)";

    setTimeout(() => {
        window.location.href = "pay1.html";
    }, 1200);
}
function openCrypto1Portal() {
    document.body.style.transition = "transform 0.8s ease-in-out";
    document.body.style.transform = "scale(1.1) rotateY(360deg)";

    setTimeout(() => {
        window.location.href = "pay2.html";
    }, 1200);
}
function openCrypto2Portal() {
    document.body.style.transition = "transform 0.8s ease-in-out";
    document.body.style.transform = "scale(1.1) rotateY(360deg)";

    setTimeout(() => {
        window.location.href = "pay3.html";
    }, 1200);
}
