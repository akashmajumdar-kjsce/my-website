const toggleBtn = document.getElementById("themeToggle");

// Toggle theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}
