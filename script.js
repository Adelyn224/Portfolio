const toggleThemeButton = document.querySelector(".dark-mode-button");

function handleThemeFunction() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    const newSrc = isDarkMode?
    "./assets/images/moon.png":
    "./assets/images/sun.png";
    toggleThemeButton.setAttribute("src", newSrc);
}

toggleThemeButton.addEventListener("click", handleThemeFunction);