/* =========================================================
   CREATIVE DEVELOPMENT GROUP
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    const siteHeader = document.getElementById("siteHeader");
    const backToTop = document.getElementById("backToTop");
    const contactForm = document.getElementById("contactForm");
    const yearElement = document.getElementById("year");

    const navLinks = nav
        ? nav.querySelectorAll("a")
        : [];


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("active");

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

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        /* Close menu after clicking link */

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", (event) => {

            const clickedInsideNav =
                nav.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (
                nav.classList.contains("active") &&
                !clickedInsideNav &&
                !clickedToggle
            ) {

                closeMobileMenu();

            }

        });


        /* Close menu using Escape key */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                nav.classList.contains("active")
            ) {

                closeMobileMenu();

                menuToggle.focus();

            }

        });


        /* Reset menu when resizing to desktop */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 900) {

                closeMobileMenu();

            }

        });

    }


    function closeMobileMenu() {

        if (!nav || !menuToggle) {
            return;
        }

        nav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        document.body.classList.remove(
            "menu-open"
        );

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!siteHeader) {
            return;
        }

        if (window.scrollY > 30) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    function updateBackToTop() {

        if (!backToTop) {
            return;
        }

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    updateBackToTop();

    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();


            const headerHeight =
                siteHeader
                    ? siteHeader.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                15;


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       CONTACT FORM TO WHATSAPP
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const nameInput =
                    document.getElementById("name");

                const phoneInput =
                    document.getElementById("phone");

                const serviceInput =
                    document.getElementById("service");

                const messageInput =
                    document.getElementById("message");


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";

                const phone =
                    phoneInput
                        ? phoneInput.value.trim()
                        : "";

                const service =
                    serviceInput
                        ? serviceInput.value.trim()
                        : "";

                const message =
                    messageInput
                        ? messageInput.value.trim()
                        : "";


                /* Basic validation */

                if (
                    !name ||
                    !phone ||
                    !service ||
                    !message
                ) {

                    alert(
                        "Please complete all fields before submitting your enquiry."
                    );

                    return;

                }


                /* Clean phone number */

                const cleanedPhone =
                    phone.replace(/[^\d+]/g, "");


                if (cleanedPhone.length < 9) {

                    alert(
                        "Please enter a valid contact number."
                    );

                    return;

                }


                /* Build WhatsApp message */

                const whatsappMessage =
`Hello Creative Development Group,

I would like to request a quotation.

Name: ${name}
Contact Number: ${phone}
Service Required: ${service}

Project / Service Details:
${message}

Please contact me regarding this enquiry.

Thank you.`;


                const encodedMessage =
                    encodeURIComponent(
                        whatsappMessage
                    );


                const whatsappNumber =
                    "27722301683";


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


    /* =====================================================
       ACTIVE NAVIGATION LINK
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    function updateActiveNavigation() {

        if (
            !sections.length ||
            !navLinks.length
        ) {
            return;
        }


        const scrollPosition =
            window.scrollY + 180;

        let currentSection = "";


        sections.forEach((section) => {

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


        navLinks.forEach((link) => {

            const href =
                link.getAttribute("href");

            link.classList.remove("active-link");


            if (
                currentSection &&
                href === `#${currentSection}`
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        });

    }


    updateActiveNavigation();

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    /* =====================================================
       REVEAL SECTIONS WHILE SCROLLING
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, " +
            ".why-item, " +
            ".client-card, " +
            ".about-panel, " +
            ".contact-detail, " +
            ".contact-form"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
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
            (element) => {

                element.classList.add(
                    "reveal"
                );

                revealObserver.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       PREVENT EMPTY IMAGE ERROR DISPLAY
    ===================================================== */

    const images =
        document.querySelectorAll(
            ".service-image img"
        );


    images.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                const imageContainer =
                    image.closest(
                        ".service-image"
                    );

                image.style.display =
                    "none";


                if (
                    imageContainer &&
                    !imageContainer.querySelector(
                        ".image-placeholder"
                    )
                ) {

                    const placeholder =
                        document.createElement(
                            "div"
                        );


                    placeholder.className =
                        "image-placeholder";


                    placeholder.textContent =
                        "Creative Development Group";


                    imageContainer.appendChild(
                        placeholder
                    );

                }

            }
        );

    });

});
