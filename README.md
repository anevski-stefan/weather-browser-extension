# Weather Browser Extension

A simple and efficient browser extension that provides real-time weather information right in your browser's toolbar. This extension allows you to quickly check weather conditions for any location without leaving your current webpage.

## Features

- Real-time weather information
- Location-based weather updates
- Customizable temperature units (Celsius/Fahrenheit)
- Clean and intuitive user interface
- Lightweight and fast performance

## Project Structure

```
weather-browser-extension/
├── manifest.json      # Extension configuration
├── popup.html        # Extension popup interface
├── popup.js         # Main extension logic
├── LICENSE          # MIT license
└── README.md        # Project documentation
```

## Installation

To install this extension in development mode:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/weather-browser-extension.git
   ```

2. Open Chrome/Chromium browser and navigate to:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`

3. Enable "Developer mode" in the top-right corner

4. Click "Load unpacked" and select the cloned repository folder

5. The extension icon should appear in your browser's toolbar

## Usage

1. Click the extension icon in your browser's toolbar
2. Enter your desired location in the search field
3. View the current weather conditions for that location
4. Toggle between Celsius and Fahrenheit using the temperature unit switch
5. Update the location anytime by entering a new location name

## Development

This extension is built using:
- HTML5
- CSS3
- JavaScript (ES6+)
- Chrome Extensions API

## License

This project is licensed under the [MIT License](./LICENSE) - see the [LICENSE](./LICENSE) file for details.
