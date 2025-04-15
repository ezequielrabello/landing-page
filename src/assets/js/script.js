let resizeTimer; 
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper")
    clearTimeout();
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper")
    }, 400)
})