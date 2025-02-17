document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector(".activateBtn");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // منع الانتقال المباشر
            
            // إنشاء تأثير البوابة
            let portal = document.createElement("div");
            portal.classList.add("wormhole");
            document.body.appendChild(portal);

            // تشغيل التأثير ثم الانتقال بعد انتهاء الأنيميشن
            setTimeout(() => {
                window.location.href = "plans.html";
            }, 1500);
        });
    }
});
function openSettings() {
    // إنشاء تأثير البوابة الزمكانية
    let portal = document.createElement("div");
    portal.classList.add("transition-portal");
    document.body.appendChild(portal);

    // تشغيل الأنيميشن ثم الانتقال
    setTimeout(() => {
        window.location.href = "si.html";
    }, 1500);
}

// التأكد من ربط الزر بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(".actionBtn");
    if (btn) {
        btn.addEventListener("click", openSettings);
    }
});
function goToPlans() {
    let overlay = document.createElement("div");
    overlay.classList.add("warp-transition");
    document.body.appendChild(overlay);

    setTimeout(() => {
        window.location.href = "plans.html";
    }, 1500); // الانتقال بعد 1.5 ثانية
}

