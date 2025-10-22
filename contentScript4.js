function splitIntoSyllables(word) {
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/g;
    return word.match(syllableRegex) || [word];
  }
  
  function highlightSyllables(node, opacity, addImportantRule) {
    const RED_COLOR = `rgba(255, 0, 0, ${opacity})`;
    const BLUE_COLOR = `rgba(0, 0, 255, ${opacity})`;
  
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(' ');
      let highlightedText = '';
      words.forEach((word, index) => {
        if (index !== 0) {
          highlightedText += ' ';
        }
        const syllables = splitIntoSyllables(word);
        const syllableWithHighlights = syllables.map((syllable, index) => {
          const colorClass = index % 2 === 0 ? 'red-highlight' : 'blue-highlight';
          const color = index % 2 === 0 ? RED_COLOR : BLUE_COLOR;
          return `<span style="background-color: ${color};" class="${colorClass}">${syllable}</span>`;
        });
        highlightedText += syllableWithHighlights.join('');
      });
  
      const wrapper = document.createElement('span');
      wrapper.innerHTML = highlightedText;
  
      // Apply the styles for red and blue highlights
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        .red-highlight { background-color: ${RED_COLOR}; }
        .blue-highlight { background-color: ${BLUE_COLOR}; }
      `;
      document.head.appendChild(styleElement);
  
      node.replaceWith(wrapper);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === 'A') {
        const linkText = node.innerText;
        const wrapper = document.createElement('a');
        wrapper.href = node.href;
        wrapper.innerHTML = linkText;
        node.replaceWith(wrapper);
      } else {
        node.childNodes.forEach((childNode) => {
          highlightSyllables(childNode, opacity, addImportantRule);
        });
      }
    }
  }
  
  
  function removeSyllableHighlighting(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === 'SPAN') {
        const parent = node.parentNode;
        const childNodes = Array.from(node.childNodes);
        childNodes.forEach((childNode) => {
          parent.insertBefore(childNode, node);
        });
        parent.removeChild(node);
      } else {
        node.childNodes.forEach((childNode) => {
          removeSyllableHighlighting(childNode);
        });
      }
    }
  }
  
  const articleElements = document.querySelectorAll('#ssrcss-pv1rh6-ArticleWrapper, div#text, .article__content, article-body__content, xvlfx ZRifP TKoO eaKKC bOdfO');
  let textElement = null;
  
  for (const element of articleElements) {
    if (element.innerText) {
      textElement = element;
      break;
    }
  }
  
  let isHighlightingEnabled = false;
  let spanElement = null;
  
  function toggleHighlighting() {
    const styleElement = document.createElement('style');
    if (isHighlightingEnabled) {
      styleElement.innerHTML = `
      .red-highlight { background-color: rgba(225, 0, 0, 0.4) !important; }
        .blue-highlight { background-color: rgba(0, 0, 255, 0.4) !important; }
      `;
    } else {
      styleElement.innerHTML = `
      .red-highlight { background-color: rgb(0, 0, 0, 0%) !important; }
      .blue-highlight { background-color: rgb(0, 0, 0, 0%) !important; }
      `;
    }
    document.head.appendChild(styleElement);
    isHighlightingEnabled = !isHighlightingEnabled;
  }
  
  
  highlightSyllables(textElement, 0, true);
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.enableHighlighting !== undefined) {
      if (textElement) {
        isHighlightingEnabled = message.enableHighlighting;
        toggleHighlighting();
        console.log('change')
      }
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    if (textElement) {
      // Initially, syllable highlighting is disabled, so we don't need to do anything here
    }
  });
  