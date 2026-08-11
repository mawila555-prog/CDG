/* =========================================
   CREATIVE DEVELOPMENT GROUP
   WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = nav.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        /* Close menu after clicking a navigation link */

        const navLinks = nav.querySelectorAll("a");

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



    /* =========================================
       DYNAMIC COPYRIGHT YEAR
    ========================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }



    /* =========================================
       WHATSAPP CONTACT FORM
    ========================================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

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


            /* =====================================
               CREATE WHATSAPP MESSAGE
            ====================================== */

            const whatsappMessage =
                "Hello Creative Development Group,%0A%0A" +

                "I would like to request a quotation.%0A%0A" +

                "Name: " +
                encodeURIComponent(name) +

                "%0A" +

                "Contact Number: " +
                encodeURIComponent(phone) +

                "%0A" +

                "Service Required: " +
                encodeURIComponent(service) +

                "%0A%0A" +

                "Message:%0A" +
                encodeURIComponent(message) +

                "%0A%0A" +

                "Thank you.";


            /* =====================================
               CREATIVE DEVELOPMENT GROUP
               WHATSAPP NUMBER
            ====================================== */

            const whatsappNumber = "27722301683";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            /* Reset form */

            contactForm.reset();

        });

    }



    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                this.getAttribute("href");

            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetID);


            if (target) {

                event.preventDefault();

                const header =
                    document.querySelector(".site-header");

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    }



    /* =========================================
       CLOSE MOBILE MENU WHEN RESIZING
    ========================================= */

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 768 &&
            nav &&
            menuToggle
        ) {

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

        }

    });

});
