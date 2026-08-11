/* =========================================
CREATIVE DEVELOPMENT GROUP
WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

```
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            nav.classList.toggle("active");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );


        const spans =
            menuToggle.querySelectorAll("span");


        if (isOpen) {

            spans[0].style.transform =
                "rotate(45deg) translate(5px, 5px)";

            spans[1].style.opacity = "0";

            spans[2].style.transform =
                "rotate(-45deg) translate(5px, -5px)";

        } else {

            spans[0].style.transform = "none";

            spans[1].style.opacity = "1";

            spans[2].style.transform = "none";

        }

    });


    /* Close menu after navigation */

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


            const spans =
                menuToggle.querySelectorAll("span");


            spans[0].style.transform = "none";

            spans[1].style.opacity = "1";

            spans[2].style.transform = "none";

        });

    });

}



/* =========================================
   DYNAMIC COPYRIGHT YEAR
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
                document
                    .getElementById("name")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const service =
                document
                    .getElementById("service")
                    .value;


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


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


            /*
                WhatsApp message
            */

            const whatsappText =
                `Hello Creative Development Group,
```

I would like to request a quotation.

Name: ${name}

Contact Number: ${phone}

Service Required: ${service}

Message:
${message}

Thank you.`;

```
            const whatsappNumber =
                "27722301683";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappText);


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            contactForm.reset();

        }
    );

}



/* =========================================
   SMOOTH SCROLLING
========================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(function (link) {

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
                document.querySelector(targetID);


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
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});



/* =========================================
   CLOSE MOBILE NAV ON RESIZE
========================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 850 &&
            nav &&
            menuToggle
        ) {

            nav.classList.remove("active");


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const spans =
                menuToggle.querySelectorAll(
                    "span"
                );


            spans[0].style.transform = "none";

            spans[1].style.opacity = "1";

            spans[2].style.transform = "none";

        }

    }
);



/* =========================================
   SERVICE CARD INTERACTION
========================================= */

const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


serviceCards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            this.style.zIndex = "2";

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            this.style.zIndex = "1";

        }
    );

});



/* =========================================
   PREVENT EMPTY LINKS
========================================= */

document.querySelectorAll(
    'a[href="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

        }
    );

});
```

});
