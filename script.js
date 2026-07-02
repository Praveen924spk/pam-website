// ===============================
// Doctor Portfolio JavaScript
// ===============================

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===============================
// Certificate Gallery Popup
// ===============================

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

const gallery = document.querySelectorAll(".certificate-gallery img");

let currentIndex = 0;

// Create Previous Button
const prevBtn = document.createElement("span");
prevBtn.innerHTML = "&#10094;";
prevBtn.className = "prev-btn";
popup.appendChild(prevBtn);

// Create Next Button
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

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", previousImage);

// Close when clicking outside image
popup.addEventListener("click", function (e) {

    if (e.target === popup) {
        closeImage();
    }

});

// Keyboard Support
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
// Scroll Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

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