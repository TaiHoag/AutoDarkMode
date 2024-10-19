# Auto Dark Mode Browser Extension 🌑

Auto Dark Mode is a browser extension that automatically detects bright and white websites and switches them to dark mode. You can customize the appearance by adjusting brightness and contrast directly from the extension popup.

## Features 🚀

- Automatically switches bright websites to dark mode.
- Allows users to enable or disable dark mode for specific websites.
- Customizable brightness and contrast controls to fine-tune the look.
- Works on multiple browsers, including:
  - Google Chrome
  - Microsoft Edge
  - Firefox
  - Opera

## Installation 🛠️

### Chrome, Edge, and Opera

1. Clone or download this repository.
2. Open your browser and navigate to the Extensions page:
   - For Chrome: `chrome://extensions/`
   - For Edge: `edge://extensions/`
   - For Opera: `opera://extensions/`
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder containing the extension files.

### Firefox

1. Clone or download this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click on **This Firefox** in the left sidebar.
4. Click **Load Temporary Add-on** and select the `manifest.json` file from the extension folder.

## Usage 🎮

1. After installing the extension, open any bright website.
2. Click the extension icon in the toolbar to open the popup.
3. Use the toggle switch to enable or disable Dark Mode for the current site.
4. Adjust the **brightness** and **contrast** sliders to fine-tune the appearance of the site.
5. Your settings are automatically saved and will persist across browsing sessions.

## How It Works 🛠️

- The extension uses a **content script** to inject a dark theme into websites.
- **Brightness** and **contrast** adjustments are applied via CSS filters.
- The **popup UI** allows users to control the dark mode and adjust visual properties.

### File Structure

```bash
├── icons/               # Icons for the extension
├── popup.html           # The popup HTML for the extension UI
├── popup.js             # Handles user interactions in the popup
├── content.js           # Injects dark mode styles and handles brightness/contrast adjustments
├── styles.css           # Optional CSS styles for the content script
├── manifest.json        # Extension manifest (v3 for Chrome, Edge, Opera)
└── README.md            # This readme file
```

## Development 🧑‍💻

### Steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/TaiHoag/AutoDarkMode.git
   ```
2. Make changes to the code in your preferred code editor.
3. Load the extension into your browser as described above.

### Debugging:

- For Chrome and Edge, go to `chrome://extensions/` or `edge://extensions/` and enable **Developer Mode**.
- For Firefox, go to `about:debugging` > **This Firefox**.
- Open the **Developer Tools** in your browser (`F12` or `Ctrl+Shift+I`) to view logs and debug issues.

## Compatibility 🖥️

- **Chrome**: Supported (Manifest v3)
- **Edge**: Supported (Manifest v3)
- **Opera**: Supported (Manifest v3)
- **Firefox**: Supported (Manifest v2, with partial v3 support)

> Safari support requires additional steps to convert the extension using Xcode.

## Contributing 🤝

Contributions are welcome! If you have suggestions or bug reports, feel free to open an issue or submit a pull request.

### How to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.
