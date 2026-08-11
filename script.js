/* =====================================================
   CREATIVE DEVELOPMENT GROUP
   WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu when navigation link is clicked */

    const navLinks =
        nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const siteHeader =
    document.getElementById("siteHeader");

function updateHeader() {

    if (!siteHeader) return;

    if (window.scrollY > 30) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   CONTACT FORM → WHATSAPP
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                    .value.trim();

            const phone =
                document.getElementById("phone")
                    .value.trim();

            const service =
                document.getElementById("service")
                    .value;

            const message =
                document.getElementById("message")
                    .value.trim();


            if (
                !name ||
                !phone ||
                !service ||
                !message
            ) {

                alert(
                    "Please complete all fields before sending your enquiry."
                );

                return;

            }


            const whatsappMessage =

                `Hello Creative Development Group,

` +
                `I would like to make an enquiry.

` +
                `Name: ${name}

` +
                `Contact Number: ${phone}

` +
                `Service Required: ${service}

` +
                `Message:
${message}

` +
                `Thank you.`;


            const whatsappURL =

                "https://wa.me/27722301683?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "visible"
                );

            } else {

                backToTop.classList.remove(
                    "visible"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

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


                if (target) {

                    event.preventDefault();

                    const headerHeight =
                        siteHeader
                            ? siteHeader.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }

            }
        );

    });


/* =====================================================
   SIMPLE REVEAL ANIMATIONS
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".service-card, .why-item, .capability, .about-panel, .testimonial-card"
    );


if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            element.classList.add(
                "reveal"
            );

            observer.observe(
                element
            );

        }
    );

}


/* =====================================================
   END
===================================================== */
