let gradients = [
  "linear-gradient(to bottom, #cbeffd, #e2f7ff)",
  "linear-gradient(to bottom, #a0c4ff, #cbeffd)",
  "linear-gradient(to bottom, #d0e7ff, #f0faff)",
  "linear-gradient(to bottom, #e6f0ff, #ffffff)"
];

let currentIndex = 0;
let mainElement = document.querySelector("main");

function changeBackground() {
  mainElement.style.background = gradients[currentIndex];
  currentIndex = (currentIndex + 1) % gradients.length;
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(changeBackground, 5000);
}

const bubblesContainer = document.createElement("div");
bubblesContainer.classList.add("bubbles");
document.body.appendChild(bubblesContainer);

for (let i = 0; i < 30; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 10}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;

  bubble.style.opacity = `${0.5 + Math.random() * 0.5}`;

  bubblesContainer.appendChild(bubble);
}

const overlay = document.createElement("div");
overlay.id = "transition-overlay";
document.body.appendChild(overlay);

document.querySelectorAll("a").forEach(link => {
  if (link.getAttribute("href") && !link.getAttribute("href").startsWith("#") && link.getAttribute("target") !== "_blank") {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      overlay.style.opacity = "1";

      setTimeout(() => {
        window.location.href = this.href;
      }, 600);
    });
  }
});

document.body.classList.add("page-fade-in");
setTimeout(() => {
  document.body.classList.add("show");
}, 50);
