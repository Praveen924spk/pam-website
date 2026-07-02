// ======================================
// Doctor Portfolio JavaScript
// ======================================

// ===============================
// Mobile Navigation
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Certificate Gallery Popup
// ===============================

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

const gallery = document.querySelectorAll(".certificate-gallery img");

let currentIndex = 0;

// Previous Button

const prevBtn = document.createElement("span");

prevBtn.innerHTML = "&#10094;";

prevBtn.className = "prev-btn";

popup.appendChild(prevBtn);

// Next Button

const nextBtn = document.createElement("span");

nextBtn.innerHTML = "&#10095;";

nextBtn.className = "next-btn";

popup.appendChild(nextBtn);

// Open Image

function openImage(src) {

    popup.style.display = "flex";

    popupImg.src = src;

    gallery.forEach((img, index) => {

        if (img.src === src) {

            currentIndex = index;

        }

    });

}

// Close Image

function closeImage() {

    popup.style.display = "none";

}

// Next Image

function nextImage() {

    currentIndex++;

    if (currentIndex >= gallery.length) {

        currentIndex = 0;

    }

    popupImg.src = gallery[currentIndex].src;

}

// Previous Image

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = gallery.length - 1;

    }

    popupImg.src = gallery[currentIndex].src;

}

// Button Events

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);

// Click Outside Image

popup.addEventListener("click", function (e) {

    if (e.target === popup) {

        closeImage();

    }

});

// Keyboard Controls

document.addEventListener("keydown", function (e) {

    if (popup.style.display === "flex") {

        if (e.key === "Escape") {

            closeImage();

        }

        if (e.key === "ArrowRight") {

            nextImage();

        }

        if (e.key === "ArrowLeft") {

            previousImage();

        }

    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});

// ===============================
// Hero Floating Animation
// ===============================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave", () => {

    if (!heroImage) return;

    heroImage.style.transform = "rotateY(0deg) rotateX(0deg)";

});