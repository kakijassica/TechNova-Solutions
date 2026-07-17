// Smooth Scrolling

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            event.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Sticky Navbar

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all the fields.");
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            return;

        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}