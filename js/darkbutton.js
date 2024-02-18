document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDarkMode');
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.title, .subtitle');
    
    elements.forEach(element => {
      let innerText = element.innerText;
      element.innerHTML = ''; // Clear existing text
      let delay = 0;
      
      for (let char of innerText) {
        let span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${delay}s`;
        span.classList.add('char-animation');
        if (char === ' ') {
          span.innerHTML = '&nbsp;'; // Handle spaces explicitly
        }
        element.appendChild(span);
        delay += 0.05; // Increase delay for each character
      }
    });
  });
  
  
