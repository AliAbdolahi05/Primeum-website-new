// انیمیشن تایپ ساده
const text = "من علی عبدالهی‌ام";
const typedTextElem = document.getElementById('typed-text');
const cursor = document.querySelector('.cursor');

let index = 0;
function type() {
  if (index < text.length) {
    typedTextElem.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150);
  } else {
    // بعد از تایپ کامل، کرسر چشمک بزنه ادامه داشته باشه
    cursor.style.animation = 'blink 1s step-start infinite';
  }
}
type();


// ذرات متحرک پس‌زمینه

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particlesArray;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener('resize', () => {
  resizeCanvas();
  init();
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if(this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
  }
  draw() {
    ctx.fillStyle = '#61dafb';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  const numberOfParticles = 100;
  for(let i=0; i<numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}
function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i=0; i<particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(handleParticles);
}
init();
handleParticles();


// بهبود فرم تماس

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('پیام شما با موفقیت ارسال شد. خیلی ممنون از تماس شما!');
  this.reset();
});
