/* =========================================
   CREATIVE DEVELOPMENT GROUP
   Website JavaScript
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("active");

        const expanded =
            nav.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            expanded
        );

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".nav a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   WHATSAPP CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("service").value;

            const message =
                document.getElementById("message").value.trim();


            if (!name || !phone || !service || !message) {

                alert(
                    "Please complete all required fields."
                );

                return;

            }


            /*
                Creative Development Group
                WhatsApp Number:
                072 230 1683
            */

            const whatsappNumber =
                "27722301683";


            const whatsappMessage =
                `Hello Creative Development Group,

I would like to request a quotation.

Name: ${name}

Contact Number: ${phone}

Service Required: ${service}

Message:
${message}

Thank you.`;


            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (anchor) {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetID =
                this.getAttribute("href");

            if (
                targetID &&
                targetID !== "#"
            ) {

                const target =
                    document.querySelector(targetID);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
    document.querySelector(".site-header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) return;


        if (window.scrollY > 30) {

            header.classList.add(
                "header-scrolled"
            );

        } else {

            header.classList.remove(
                "header-scrolled"
            );

        }

    }
);


/* =========================================
   SET MINIMUM EVENT DATE
   Kept available for future forms
========================================= */

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.min = today;

}
