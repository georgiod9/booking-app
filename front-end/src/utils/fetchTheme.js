var current_theme

export function fetchTheme() {
    localStorage.getItem("theme")
    console.log("THEME IS:", current_theme)
}
