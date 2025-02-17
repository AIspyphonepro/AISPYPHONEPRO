if (window.innerWidth < 768) {
    document.body.innerHTML = "<p style='color:red; text-align:center; font-size:24px; margin-top:50px;'>🚫 هذا الموقع غير متاح على الهاتف. استخدم حاسوبًا للوصول إليه. 🚫</p>";
    setTimeout(() => {
        window.location.href = "https://www.google.com"; // إعادة توجيه للموقع الرئيسي أو أي صفحة أخرى
    }, 5000);
}
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
