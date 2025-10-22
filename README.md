# EzyRead - Chrome Extension for Enhanced Accessibility

<div align="center">
  <img src="icon.png" alt="EzyRead Logo" width="128"/>
  
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![Version](https://img.shields.io/badge/version-3.0-green.svg)](manifest.json)
  [![Chrome Web Store](https://img.shields.io/badge/chrome-extension-brightgreen.svg)](https://chrome.google.com/webstore)
</div>

## 🌟 Overview

**EzyRead** is a comprehensive Chrome extension designed to revolutionize accessibility for individuals with Intellectual or Developmental Disabilities (IDD), Learning Disabilities, Visual Impairments, and anyone seeking enhanced reading experiences online. Created by Amogh Thodati, Abhiram Bandi, Nikhil Saravanan, and Rishik Kolpekwar.

## 📋 Table of Contents

- [Features](#-features)
- [Who Can Benefit](#-who-can-benefit)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Technical Details](#-technical-details)
- [Development Setup](#-development-setup)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### 🔊 Text-to-Speech
- Multiple voice options with customizable selection
- Real-time voice testing
- Reads highlighted text with one click
- Persistent voice preference storage

### 🎨 Colorblind Support
- **Normal View**: Standard color display
- **Deuteranomaly**: Red-green colorblindness support
- **Protanomaly**: Red-weak colorblindness support
- **Tritanomaly**: Blue-yellow colorblindness support

### 📝 Font & Text Customization
- **Font Family Options**:
  - Default
  - Verdana (highly readable)
  - Comic Sans (dyslexia-friendly)
  - Trebuchet MS
- **Font Size Adjustment**: Small, Medium, Large
- **Line Spacing Control**: Default, Single, 1.15, 1.5, Double
- **Syllable Highlighting**: Alternating colors to improve reading comprehension

### 🎯 EzyRead Assistant
- Toggle-based activation
- Part-of-speech identification
- Context-aware reading support
- Enhanced comprehension tools

### 📺 Related Video Integration
- Automatic YouTube video suggestions based on article content
- Visual learning alternatives
- One-click access to educational content

### 🌐 Language Support
- English
- Spanish
- French
- Hindi
- Easy language switching with apply functionality

### 🎨 Visual Accessibility
- Customizable background colors
- High contrast options
- Adjustable visual elements for optimal readability

## 👥 Who Can Benefit

### Individuals with Visual Impairments or Low Vision
- Text-to-speech functionality
- Color filters for better contrast
- Customizable font sizes and backgrounds

### Individuals with Dyslexia
- Alternating syllable highlighter
- Dyslexia-friendly fonts (Comic Sans, Verdana)
- Text-to-speech support
- Related videos for multi-modal learning

### Individuals with Autism Spectrum Disorder
- Color filters for visual comfort
- Font customization
- Speech assistance tools
- Predictable, customizable interface

### Individuals with ADHD
- Syllable highlighting for focus
- Adjustable font size and line spacing
- Background color modification
- Clearer content presentation

### Individuals with Intellectual or Developmental Disabilities
- Text-to-speech for comprehension
- Visual learning through related videos
- Simplified navigation
- Multiple accessibility layers

### General Users
Anyone seeking:
- Better reading experiences
- Eye strain reduction
- Focus improvement
- Customizable web browsing

## 🚀 Installation

### From Chrome Web Store
1. Visit the Chrome Web Store
2. Search for "EzyRead"
3. Click "Add to Chrome"
4. Confirm the installation

### Manual Installation (Developer Mode)
1. Download or clone this repository:
   ```bash
   git clone https://github.com/AmoghThodati2/EzyRead.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the EzyRead folder
6. The extension icon should appear in your toolbar

## 📖 Usage Guide

### Getting Started
1. Click the EzyRead icon in your Chrome toolbar
2. The popup interface will display all available features
3. Navigate using the Home and Help tabs

### Enabling Features

#### Text-to-Speech
1. Click the TTS icon in the main menu
2. Select your preferred voice from the dropdown
3. Click "Test Voice" to preview
4. Highlight text on any webpage
5. Voice will read highlighted text automatically

#### Colorblind Filters
1. Click the Colorblind Views icon
2. Select your preferred filter:
   - Normal
   - Deuteranomaly
   - Protanomaly
   - Tritanomaly
3. Filter applies instantly to the webpage

#### Font Customization
1. Click the font visibility icon
2. Adjust settings:
   - **Font Size**: Select Small, Medium, or Large
   - **Font Family**: Choose from available options
   - **Line Spacing**: Adjust for comfort
   - **Syllable Highlight**: Toggle on/off

#### EzyRead Assistant
1. Toggle the "Enable EzyRead Assistant" switch
2. Access part-of-speech identification
3. Enhanced reading support activates

#### Related Videos
1. Click "View Videos" button
2. Automatically opens YouTube with relevant searches
3. Based on current article content

### Language Settings
1. Click the Language icon
2. Select your preferred language
3. Click "Apply Changes"

## 🔧 Technical Details

### Built With
- **Manifest Version**: 3 (latest Chrome extension standard)
- **Languages**: JavaScript, HTML, CSS
- **APIs Used**:
  - Chrome Extensions API
  - Chrome Storage API
  - Chrome Scripting API
  - Chrome Tabs API
  - Web Speech API (Speech Synthesis)

### Dependencies
```json
{
  "webpack": "^5.88.1",
  "natural": "^6.5.0",
  "webpack-cli": "^5.1.4"
}
```

### Browser Support
- Chrome (version 88+)
- Edge (Chromium-based)
- Brave
- Other Chromium-based browsers

### Permissions Required
- `activeTab`: Access current tab for content modification
- `storage`: Save user preferences
- `scripting`: Inject accessibility scripts

## 💻 Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Chrome browser
- Basic knowledge of JavaScript, HTML, CSS

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmoghThodati2/EzyRead.git
   cd EzyRead
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project** (if using webpack)
   ```bash
   npm run build
   ```

4. **Load in Chrome**
   - Open `chrome://extensions/`
   - Enable Developer mode
   - Click "Load unpacked"
   - Select the project directory

### Development Commands

```bash
# Install dependencies
npm install

# Run tests (if configured)
npm test

# Build for production
npm run build
```

## 📁 Project Structure

```
EzyRead/
├── manifest.json              # Extension configuration
├── popup.html                 # Main popup interface
├── popup.js                   # Popup functionality
├── popup.css                  # Popup styling
├── background.js              # Background service worker
├── contentScript.js           # Main content script with lexicon
├── contentScript2.js          # Additional content scripts
├── contentScript4.js          # Specific page content handlers
├── contentScript5.js          # Extended functionality
├── contentScriptMain.js       # Main content orchestrator
├── dpcontent.js               # Dynamic content handler
├── index.html                 # Language selection page
├── index.js                   # Index page functionality
├── script.js                  # General utility scripts
├── style.css                  # Global styles
├── altPopup.html              # Alternative popup interface
├── altPopup.js                # Alternative popup logic
├── altPopup.css               # Alternative popup styles
├── package.json               # Node.js dependencies
├── README.md                  # Project documentation
├── icon.png                   # Extension icon (128x128)
├── title.png                  # Logo image
├── tts.png                    # Text-to-speech icon
├── colorBlind.png             # Colorblind filter icon
├── screening.png              # Language icon
├── fontSize.png               # Font size icon
├── back.png                   # Back button icon
├── threeLines.png             # Menu icon
├── mic.png                    # Microphone icon
├── old.png                    # Archive icon
├── AvenirNextLTPro-Bold.otf   # Custom font
├── licensed-image.jfif        # Licensed assets
└── _metadata/                 # Chrome extension metadata
    └── verified_contents.json
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute
- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests
- 🌍 Add language translations
- ♿ Enhance accessibility features

### Contribution Process

1. **Fork the repository**
   ```bash
   git fork https://github.com/AmoghThodati2/EzyRead.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, commented code
   - Follow existing code style
   - Test thoroughly

4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Wait for review

### Code Style Guidelines
- Use meaningful variable names
- Comment complex logic
- Follow ES6+ JavaScript standards
- Maintain consistent indentation
- Write descriptive commit messages

### Special Thanks
- Families and educators who provided feedback
- The accessibility community for inspiration
- Beta testers who helped refine features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 EzyRead Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

### Email
**EzyReadHelp@gmail.com** - For questions, support, or feedback

### GitHub
- **Repository**: [https://github.com/AmoghThodati2/EzyRead](https://github.com/AmoghThodati2/EzyRead)
- **Issues**: [Report a bug or request a feature](https://github.com/AmoghThodati2/EzyRead/issues)

### Learn More
Visit our extension's "Learn More" page (accessible via the extension popup) for:
- Detailed feature explanations
- Understanding IDD and Learning Disabilities
- Case studies and usage examples
- Accessibility best practices

---

## 🌈 Our Mission

**"Revolutionizing Accessibility. Making reading and research easier for all."**

EzyRead is committed to creating an inclusive digital environment where everyone, regardless of ability, can access and comprehend online content. We believe that accessibility is not just a feature—it's a fundamental right.

### Impact Statistics
- Supporting users with various disabilities
- Multiple accessibility layers for diverse needs
- Continuous improvement based on user feedback
- Free and accessible to all

---

## 🔮 Future Roadmap

### Planned Features
- [ ] AI-powered text simplification
- [ ] Dark mode support
- [ ] More language options
- [ ] Mobile browser support
- [ ] Reading level adjustment
- [ ] Customizable keyboard shortcuts
- [ ] Export/import settings
- [ ] Screen reader enhancement
- [ ] OCR for image text
- [ ] Focus mode for ADHD users

### Version History
- **v3.0** (Current) - Manifest V3 migration, enhanced features
- **v2.x** - Added colorblind support, syllable highlighting
- **v1.x** - Initial release with TTS and font customization

---

## 📚 Additional Resources

### Understanding Disabilities
- [St. Jude's - Learning Disabilities](https://stjudes.com.au/news/is-intellectual-disability-the-same-as-learning-disability/)
- [CDC - Intellectual Disabilities](https://www.cdc.gov/ncbddd/developmentaldisabilities/)
- [Dyslexia Resources](https://dyslexiaida.org/)

### Accessibility Standards
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Chrome Extension Accessibility](https://developer.chrome.com/docs/extensions/mv3/a11y/)

### Support Organizations
- National Center on Disability and Access to Education
- Learning Disabilities Association of America
- National Federation of the Blind

---

<div align="center">
  <p><strong>Made with ❤️ by students, for everyone</strong></p>
  <p>© 2024 EzyRead. All rights reserved.</p>
  
  ⭐ Star us on GitHub if EzyRead helps you!
</div>
