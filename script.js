/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});



/* Close mobile menu after clicking link */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});



/* =========================================
   PROPERTY SLIDER
========================================= */

const properties = [

    {
        image: "images/house-1.jpg",
        location: "Abuja, Nigeria",
        type: "5 Bedroom Duplex",
        price: "₦185M"
    },

    {
        image: "images/house-2.jpg",
        location: "Lagos, Nigeria",
        type: "4 Bedroom Terrace",
        price: "₦120M"
    },

    {
        image: "images/house-3.jpg",
        location: "Port Harcourt, Nigeria",
        type: "4 Bedroom Detached House",
        price: "₦95M"
    }

];


let currentIndex = 0;


const heroImage =
    document.getElementById("heroImage");

const locationText =
    document.getElementById("propertyLocation");

const typeText =
    document.getElementById("propertyType");

const priceText =
    document.getElementById("propertyPrice");

const slideNumber =
    document.getElementById("currentSlide");

const progress =
    document.getElementById("progress");



function showProperty(index) {

    const property = properties[index];


    /* Fade image */

    heroImage.style.opacity = "0";


    setTimeout(() => {

        heroImage.style.backgroundImage =
            `url("${property.image}")`;

        locationText.textContent =
            property.location;

        typeText.textContent =
            property.type;

        priceText.textContent =
            property.price;


        slideNumber.textContent =
            String(index + 1).padStart(2, "0");


        progress.style.height =
            `${((index + 1) / properties.length) * 100}%`;


        heroImage.style.opacity = "1";

    }, 250);

}



/* =========================================
   NEXT
========================================= */

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

        currentIndex++;

        if (currentIndex >= properties.length) {

            currentIndex = 0;

        }

        showProperty(currentIndex);

    });



/* =========================================
   PREVIOUS
========================================= */

document
    .getElementById("prevBtn")
    .addEventListener("click", () => {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = properties.length - 1;

        }

        showProperty(currentIndex);

    });



/* =========================================
   AUTOMATIC SLIDER
========================================= */

setInterval(() => {

    currentIndex++;

    if (currentIndex >= properties.length) {

        currentIndex = 0;

    }

    showProperty(currentIndex);

}, 7000);
/* =========================================
   PROPERTY HERO SLIDER
========================================= */

const properties = [

    {
        image: "images/real-estate-1.jpg"
    },

    {
        image: "images/real-estate-2.jpg"
    },

    {
        image: "images/real-estate-3.jpg"
    }

];


let currentSlide = 0;


const heroBackground =
    document.querySelector(".hero-bg");

const slideNumber =
    document.getElementById("slideNumber");

const nextButton =
    document.getElementById("nextSlide");

const previousButton =
    document.getElementById("previousSlide");



/* =========================================
   CHANGE IMAGE
========================================= */

function changeSlide(index) {

    heroBackground.style.opacity = "0";


    setTimeout(() => {

        heroBackground.style.backgroundImage =
            `url("${properties[index].image}")`;

        heroBackground.style.opacity = "1";

    }, 350);


    slideNumber.textContent =
        String(index + 1).padStart(2, "0");

}



/* =========================================
   NEXT
========================================= */

nextButton.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= properties.length) {

        currentSlide = 0;

    }

    changeSlide(currentSlide);

});



/* =========================================
   PREVIOUS
========================================= */

previousButton.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = properties.length - 1;

    }

    changeSlide(currentSlide);

});



/* =========================================
   AUTO SLIDE
========================================= */

setInterval(() => {

    currentSlide++;

    if (currentSlide >= properties.length) {

        currentSlide = 0;

    }

    changeSlide(currentSlide);

}, 7000);



/* =========================================
   MOUSE PARALLAX
========================================= */

const hero = document.querySelector(".real-estate-hero");


hero.addEventListener("mousemove", (event) => {

    /* Don't do strong parallax on mobile */

    if (window.innerWidth <= 768) return;


    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;


    heroBackground.style.transform =
        `scale(1.1) translate(${x * -8}px, ${y * -5}px)`;


    const card =
        document.querySelector(".land-card");


    card.style.transform =
        `translate(${x * 8}px, ${y * 8}px)`;

});



/* =========================================
   RESET PARALLAX
========================================= */

hero.addEventListener("mouseleave", () => {

    heroBackground.style.transform =
        "scale(1.08)";

    document.querySelector(".land-card").style.transform =
        "";

});
/* =====================================
   REAL ESTATE WEBSITE JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });



    /* =====================================
       NUMBER COUNTER
    ===================================== */

    const counters =
        document.querySelectorAll("[data-target]");


    const counterObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const counter = entry.target;

                    const target =
                        Number(counter.dataset.target);


                    let number = 0;


                    const speed = 30;


                    const updateCounter = function () {

                        const increment =
                            Math.ceil(target / 60);


                        number += increment;


                        if (number >= target) {

                            number = target;

                            counter.textContent =
                                number;

                            return;

                        }


                        counter.textContent =
                            number;


                        setTimeout(
                            updateCounter,
                            speed
                        );

                    };


                    updateCounter();


                    counterObserver.unobserve(
                        counter
                    );

                });

            },

            {
                threshold: 0.8
            }

        );


    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });



    /* =====================================
       PROPERTY HEART
    ===================================== */

    const hearts =
        document.querySelectorAll(".property-heart");


    hearts.forEach(function (heart) {

        heart.addEventListener(
            "click",
            function () {

                if (heart.textContent.trim() === "♡") {

                    heart.textContent = "♥";

                    heart.style.color = "#a30d0d";

                } else {

                    heart.textContent = "♡";

                    heart.style.color = "#ffffff";

                }

            }
        );

    });



    /* =====================================
       SMOOTH LINKS
    ===================================== */

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const id =
                    link.getAttribute("href");


                if (id === "#") {
                    return;
                }


                const target =
                    document.querySelector(id);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });


});
//   ------


/* ========================================
   FOOTER NEWSLETTER
======================================== */

const newsletter =
    document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function (event) {

        event.preventDefault();

        const button =
            newsletter.querySelector("button");

        button.innerHTML = "Subscribed ✓";

        button.style.color = "#d4af37";

        newsletter.reset();

    });

}


/* ========================================
   BACK TO TOP
======================================== */

const backTop =
    document.querySelector(".back-top");

if (backTop) {

    backTop.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}