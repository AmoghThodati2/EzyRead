
  chrome.runtime.onMessage.addListener(function(message) {
    if (message.action === "applyColorblindFilter") {
      const type = message.type;
      applyColorblindFilter(type);
    }
  });
  
  function applyColorblindFilter(type) {
    let filterValue = '';
  
    switch (type) {
      case 'normal':
        filterValue = 'none';
        break;
      case 'deuteranomaly':
        // Apply the SVG color matrix for deuteranomaly
        filterValue = 'sepia(0.2) hue-rotate(55deg) saturate(0.8) contrast(1.2)';
        break;
      case 'protanomaly':
        filterValue = 'sepia(0.3) hue-rotate(65deg) saturate(0.8) contrast(1.2)';
        break;
      case 'tritanomaly':
        filterValue = 'sepia(0.4)  hue-rotate(332deg) saturate(1.6)  contrast(1.0)';
        break;
    }
  
    // Apply the filter to the webpage content
    document.body.style.filter = filterValue;
  }
  