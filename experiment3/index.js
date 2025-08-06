const html = document.querySelector("html");

const checkbox = document.querySelector("#toggle-theme");

const theme = document.querySelector("#theme-name");

function toogleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    theme.textContent = "Light Mode";
  } else {
    theme.textContent = "Dark Mode";
  }
}

checkbox.addEventListener("change", toogleTheme);
