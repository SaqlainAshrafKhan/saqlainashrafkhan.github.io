
// Show disclaimer alert on page load
function disclaimerAlert() {
    alert("Message from Owner: Hi, Thank you for visiting my portfolio. This Portfolio is a work in progress, and I am continuously updating it. If you have any suggestions or feedback, please feel free to reach out! Also, please note that the portfolio is hosted on GitHub Pages, and some features may not work as expected due to CORS restrictions and no Backend Code. I am working on resolving these issues. Thank you for your understanding!");
}

// Get important elements
const skillsSection = document.getElementById('skills-container');
const aboutSection = document.getElementById('about-container');
const themeBtn = document.getElementById('theme-toggle-btn');

// Scroll event for theme button position
window.addEventListener('scroll', function () {
    if (!skillsSection || !aboutSection || !themeBtn) return;
    const skillsSectionStart = skillsSection.getBoundingClientRect().top + window.scrollY;
    const aboutSectionStart = aboutSection.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = window.scrollY;

    if (scrollPosition + 1 >= skillsSectionStart) {
        themeBtn.style.marginRight = '60px';
    } else if (scrollPosition >= aboutSectionStart) {
        themeBtn.style.marginRight = '400px';
    }
});

// Navigation active state
const navItems = document.querySelectorAll('.nav-item');
function removeActive() {
    navItems.forEach((navItem) => navItem.classList.remove('active'));
}
navItems.forEach((navItem) => {
    navItem.addEventListener('click', function () {
        removeActive();
        navItem.classList.add('active');
    });
});

// Send button logic (assuming button has id="send-btn")
const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
    sendBtn.addEventListener('click', function () {
        sendBtn.innerText = "Message Sent!";
        sendBtn.classList.add('btn-2');
    });
}

// Section highlight on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = -1;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0) {
            currentSectionIndex = index;
        }
    });
    if (currentSectionIndex !== -1) {
        navItems.forEach((link, index) => {
            if (index === currentSectionIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});

// Resume button hover effect (assuming button has id="resume-btn" and icon has id="download-icon")
const resumeBtn = document.getElementById('resume-btn');
const downloadIcon = document.getElementById('download-icon');
if (resumeBtn && downloadIcon) {
    resumeBtn.addEventListener('mouseenter', function () {
        resumeBtn.style.color = 'rgb(255,255,83)';
        resumeBtn.style.backgroundColor = "transparent";
        downloadIcon.style.filter = "invert(1)";
    });
    resumeBtn.addEventListener('mouseleave', function () {
        resumeBtn.style.color = 'black';
        resumeBtn.style.backgroundColor = 'rgb(255,255,83)';
        downloadIcon.style.filter = 'none';
    });
}

// Like button logic (assuming like buttons have class="like-btn" and like count spans have data-like-count-id)
function setupLikeButtons() {
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach((likeBtn) => {
        likeBtn.addEventListener('click', function () {
            const likeCountId = likeBtn.getAttribute('data-like-count-id');
            const likeNumber = document.getElementById(likeCountId);
            if (!likeNumber) return;
            if (likeBtn.src.endsWith('/img/heart.svg')) {
                likeBtn.src = '/img/heart-fill.svg';
                likeNumber.innerText = parseInt(likeNumber.innerText) + 1;
            } else {
                likeBtn.src = '/img/heart.svg';
                likeNumber.innerText = parseInt(likeNumber.innerText) - 1;
            }
        });
    });
}
setupLikeButtons();

// Menu toggle for mobile (assuming menu-btn has id="menu-btn" and menu has id="menu")
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
        const computedStyle = window.getComputedStyle(menu);
        if (computedStyle.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });
}