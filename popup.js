// Elements
const darkModeToggle = document.getElementById("darkModeToggle");
const brightnessSlider = document.getElementById("brightnessSlider");
const brightnessValue = document.getElementById("brightnessValue");
const contrastSlider = document.getElementById("contrastSlider");
const contrastValue = document.getElementById("contrastValue");
const saveButton = document.getElementById("saveSettings");

chrome.storage.sync.get(["darkMode", "brightness", "contrast"], (result) => {
  darkModeToggle.checked = result.darkMode ?? true; // Default: enabled
  brightnessSlider.value = result.brightness ?? 100; // Default: 100%
  brightnessValue.textContent = `${result.brightness ?? 100}%`;
  contrastSlider.value = result.contrast ?? 100; // Default: 100%
  contrastValue.textContent = `${result.contrast ?? 100}%`;
});

brightnessSlider.addEventListener("input", () => {
  brightnessValue.textContent = `${brightnessSlider.value}%`;
});

contrastSlider.addEventListener("input", () => {
  contrastValue.textContent = `${contrastSlider.value}%`;
});

saveButton.addEventListener("click", () => {
  const darkMode = darkModeToggle.checked;
  const brightness = brightnessSlider.value;
  const contrast = contrastSlider.value;

  chrome.storage.sync.set({ darkMode, brightness, contrast }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            action: "applyDarkMode",
            darkMode,
            brightness,
            contrast,
          },
          (response) => {
            if (chrome.runtime.lastError) {
              //I skipped it
            } else {
              console.log("Message sent successfully to the content script.");
            }
          }
        );
      } else {
        console.error("No active tab found.");
      }
    });
  });
});
