/* =========================================================
   CREATIVE DEVELOPMENT GROUP
   WEBSITE JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const header = document.getElementById("siteHeader");

    const menuToggle = document.getElementById("menuToggle");

    const nav = document.getElementById("nav");

    const backToTop = document.getElementById("backToTop");

    const contactForm = document.getElementById("contactForm");

    const serviceSelect = document.getElementById("service");

    const yearElement = document.getElementById("year");


    /* =====================================================
       CURRENT YEAR
    ====================================================== */

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    nav.classList.toggle("active");

                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );

            }
        );


        /* CLOSE MENU AFTER CLICKING LINK */

        const navigationLinks =
            nav.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    nav.classList.remove("active");

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }
            );

        });


        /* CLOSE MOBILE MENU WHEN RESIZING TO PC */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 900) {

                    nav.classList.remove("active");

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ====================================================== */

    function handleScroll() {

        if (header) {

            if (window.scrollY > 20) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        }


        /* BACK TO TOP */

        if (backToTop) {

            if (window.scrollY > 600) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );


    handleScroll();


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       SERVICE CARD QUOTATION SELECTION
    ====================================================== */

    const serviceLinks =
        document.querySelectorAll(
            "[data-service]"
        );


    serviceLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const selectedService =
                    link.getAttribute(
                        "data-service"
                    );

                if (
                    selectedService &&
                    serviceSelect
                ) {

                    serviceSelect.value =
                        selectedService;

                }

            }
        );

    });


    /* =====================================================
       CONTACT FORM
       SEND VIA WHATSAPP
    ====================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* GET VALUES */

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


                /* BASIC VALIDATION */

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


                /* BUSINESS NUMBER */

                const businessNumber =
                    "27722301683";


                /* WHATSAPP MESSAGE */

                const whatsappMessage =
`Hello Creative Development Group,

I would like to request a quotation.

Name: ${name}
Contact Number: ${phone}
Service Required: ${service}

Requirements:
${message}

Thank you.`;


                /* CREATE WHATSAPP URL */

                const whatsappURL =
                    "https://wa.me/" +
                    businessNumber +
                    "?text=" +
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* OPEN WHATSAPP */

                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    link.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;

                }


                const targetElement =
                    document.querySelector(
                        targetID
                    );


                if (targetElement) {

                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        targetElement
                            .getBoundingClientRect()
                            .top
                        +
                        window.pageYOffset
                        -
                        headerHeight
                        -
                        10;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION LINK WHILE SCROLLING
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            '.nav a[href^="#"]'
        );


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active-link");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =====================================================
       ESCAPE KEY CLOSES MOBILE MENU
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                nav &&
                menuToggle
            ) {

                nav.classList.remove("active");

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


});
