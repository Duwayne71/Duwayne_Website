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


window.addEventListener("load", () => {
  const overlay = document.getElementById("blizzard-overlay");

  // Create 100 snowflakes
  for (let i = 0; i < 100; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");

    const size = Math.random() * 8 + 2; // size between 2px and 10px
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;

    flake.style.left = `${Math.random() * 100}%`;
    flake.style.top = `-${size}px`;

    flake.style.animationDuration = `${1 + Math.random() * 2}s`;
    flake.style.animationDelay = `${Math.random()}s`;

    overlay.appendChild(flake);
  }

  // After 3 seconds, fade out the overlay
  setTimeout(() => {
    overlay.style.transition = "opacity 1s ease";
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.remove();
    }, 1000);
  }, 3000);
});
