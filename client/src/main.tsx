import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Scroll to top on page load to prevent auto-scrolling below hero
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Multiple scroll-to-top attempts to ensure it works
window.scrollTo(0, 0);
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

// Also try after a short delay in case something else is interfering
setTimeout(() => {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}, 10);

createRoot(document.getElementById("root")!).render(<App />);
