const textToType = "echo 'Vuelve pronto para ver mi nuevo portfolio!'";
const typingSpeed = 80;
const typingTextElement = document.getElementById('typing-text');

let i = 0;
function typeText() {
    if (i < textToType.length) {
        typingTextElement.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeText, typingSpeed);
    }
}

setTimeout(typeText, 1000);

document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4caf50"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4caf50",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});

function updateCountdown() {
    const targetDate = new Date('May 15, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    if (timeRemaining > 0) {
        setTimeout(updateCountdown, 1000);
    } else {
        document.getElementById('countdown').innerHTML = "<h3>¡El portfolio ya debería estar disponible!</h3>";
    }
}

updateCountdown();

const terminal = document.querySelector('.terminal');
terminal.addEventListener('click', () => {
    if (i >= textToType.length) {
        const commands = [
            "echo 'Desarrollador Full Stack'",
            "npm install --save-dev react",
            "git commit -m 'Actualizando portfolio'",
            "cd projects && ls -la",
            "docker-compose up -d"
        ];
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        typingTextElement.textContent = "";
        textToType = randomCommand;
        i = 0;
        setTimeout(typeText, 300);
    }
});

document.addEventListener('mousemove', function (e) {
    const particles = document.getElementById('particles-js');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    particles.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});
