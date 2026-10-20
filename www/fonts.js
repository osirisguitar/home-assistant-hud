// Loads Google Fonts (Orbitron + Share Tech Mono) for the HUD theme.
// Add as a dashboard resource: Settings -> Dashboards -> (menu) -> Resources
// URL: /local/fonts.js   Type: JavaScript
const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Share+Tech+Mono&display=swap";
document.head.appendChild(link);
