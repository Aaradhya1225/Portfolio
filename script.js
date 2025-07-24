const text = "Hi! I am Aaradhya";
const typeTextElement = document.getElementById("type-text");

let i = 0;

function type() {
  if (i < text.length) {
    typeTextElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100); // speed of typing
  }
}

window.onload = type;


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
window.addEventListener('load', () => {
  const fills = document.querySelectorAll('.progress-fill');
  fills.forEach(fill => {
    const percent = fill.getAttribute('data-percent');
    setTimeout(() => {
      fill.style.width = percent;
      fill.textContent = percent;
    }, 500);
  });
});
