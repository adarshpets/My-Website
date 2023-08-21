// Function to toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      icon.src = "sun-regular.png";
      localStorage.setItem("theme", "light");
    } else {
      icon.src = "moon.png";
      localStorage.setItem("theme", "dark");
    }
  }
  
  // Check if user has a preferred theme and apply it on page load
  const preferredTheme = localStorage.getItem("theme");
  if (preferredTheme === "light") {
    document.body.classList.add("light-theme");
    icon.src = "sun-regular.png";
  } else {
    icon.src = "moon.png";
  }
  
  // Add click event to the icon for toggling the theme
  icon.onclick = toggleTheme;
