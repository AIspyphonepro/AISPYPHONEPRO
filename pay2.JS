document.addEventListener("mousemove", (event) => {
    const button = document.querySelector(".submit-btn");
    const x = event.clientX - button.getBoundingClientRect().left;
    const y = event.clientY - button.getBoundingClientRect().top;
    
    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
});
