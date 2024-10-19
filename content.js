// Function to apply dark mode with brightness and contrast adjustments
function applyDarkMode(darkMode, brightness = 100, contrast = 100) {
  if (darkMode) {
    document.body.classList.add("dark-mode");
    document.documentElement.classList.add("dark-mode");

    document.documentElement.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
  } else {
    document.body.classList.remove("dark-mode");
    document.documentElement.classList.remove("dark-mode");

    document.documentElement.style.filter = "";
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "applyDarkMode") {
    applyDarkMode(request.darkMode, request.brightness, request.contrast);
  }
});

chrome.storage.sync.get(["darkMode", "brightness", "contrast"], (result) => {
  const darkMode = result.darkMode ?? true;
  const brightness = result.brightness ?? 100;
  const contrast = result.contrast ?? 100;
  applyDarkMode(darkMode, brightness, contrast);
});
