/* =========================================================
   CREATIVE DEVELOPMENT GROUP
   Main Website JavaScript
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = nav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    /* Close menu when a navigation link is clicked */

    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   CONTACT FORM → WHATSAPP
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get form values */

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("service").value;

            const message =
                document.getElementById("message").value.trim();


            /* Basic validation */

            if (!name || !phone || !service || !message) {

                alert(
                    "Please complete all fields before sending your enquiry."
                );

                return;

            }


            /*
                Creative Development Group
                WhatsApp number:
                072 230 1683

                South African international format:
                27722301683
            */

            const businessNumber =
                "27722301683";


            /* Build WhatsApp message */

            const whatsappMessage =
                `Hello Creative Development Group,

I would like to request a quotation.

Name: ${name}

Contact Number: ${phone}

Service Required: ${service}

Message:
${message}

Thank you.`;


            /* Encode message for URL */

            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            /* Create WhatsApp URL */

            const whatsappURL =
                `https://wa.me/${businessNumber}?text=${encodedMessage}`;


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetID =
                this.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetID
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            const header =
                document.querySelector(
                    ".site-header"
                );


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top
                +
                window.pageYOffset
                -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});


/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

const header =
    document.querySelector(
        ".site-header"
    );


if (header) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 10) {

                header.style.boxShadow =
                    "0 4px 18px rgba(0, 0, 0, 0.10)";

            } else {

                header.style.boxShadow =
                    "0 2px 12px rgba(0, 0, 0, 0.05)";

            }

        }
    );

}


/* =========================================================
   SERVICE CARD ANIMATION
========================================================= */

const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


if (
    serviceCards.length &&
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    serviceCards.forEach(
        function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(15px)";

            card.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            observer.observe(card);

        }
    );

}


/* =========================================================
   PREVENT EMPTY FORM SUBMISSION
========================================================= */

const inputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );


inputs.forEach(function (input) {

    input.addEventListener(
        "input",
        function () {

            if (
                this.value.trim() !== ""
            ) {

                this.style.borderColor =
                    "";

            }

        }
    );

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Creative Development Group website loaded successfully."
);
