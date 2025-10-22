function getComputedStyleValue(element, styleProperty) {
    return window.getComputedStyle(element).getPropertyValue(styleProperty).trim();
  }
  
  function applyLineSpacing(spacingOption) {
    const isArticleContent = document.querySelector('.article__content');
    const hasCustomLineHeight = getComputedStyleValue(document.documentElement, '--theme-paragraph__line-height--from-small');
  
    let newLineHeight = null;
  
    switch (spacingOption) {
      case "spacing1":
        newLineHeight = "normal";
        break;
      case "spacing2":
        newLineHeight = "20px";
        break;
      case "spacing3":
        newLineHeight = "30px";
        break;
      case "spacing4":
        newLineHeight = "40px";
        break;
      case "spacing5":
        newLineHeight = "50px";
        break;
      // Add more cases for additional line spacing options if needed
      default:
        newLineHeight = "normal";
    }
  
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      #story_text,
      [style*='--theme-paragraph__line-height--from-small'] {
        line-height: ${newLineHeight} !important;
      }
  
      .article__content {
        --theme-paragraph__line-height--from-small: ${newLineHeight};
      }
    `;
    document.head.appendChild(styleElement);
  }
  
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.lineSpacing !== undefined) {
      applyLineSpacing(message.lineSpacing);
    }
  });
  
  // Initial line spacing when the content script is loaded
  applyLineSpacing("spacing1");
  