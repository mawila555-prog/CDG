```javascript
/* =========================================================
   CREATIVE DEVELOPMENT GROUP
   WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll("#mainNav a");
    const contactForm = document.getElementById("contactForm");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mainNav.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            /* Change hamburger icon */

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                if (isOpen) {

                    icon.classList.remove("fa-bars");

                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");
                }
            }

        });


        /* =================================================
           CLOSE MOBILE MENU WHEN LINK IS CLICKED
           ================================================= */

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");
                }

            });

        });


        /* =================================================
           CLOSE MENU WHEN CLICKING OUTSIDE
           ================================================= */

        document.addEventListener("click", (event) => {

            const clickedInsideMenu =
                mainNav.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedToggle &&
                mainNav.classList.contains("active")
            ) {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");
                }
            }

        });

    }


    /* =====================================================
       DESKTOP / MOBILE RESPONSIVE MENU
       Automatically resets menu when screen changes
       ===================================================== */

    const desktopBreakpoint = 700;

    window.addEventListener("resize", () => {

        if (window.innerWidth > desktopBreakpoint) {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");
                }
            }

        }

    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

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

        });

    });


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                /* -----------------------------------------
                   GET FORM VALUES
                   ----------------------------------------- */

                const name =
                    contactForm.elements["name"]
                        ?.value
                        .trim();

                const email =
                    contactForm.elements["email"]
                        ?.value
                        .trim();

                const service =
                    contactForm.elements["service"]
                        ?.value
                        .trim();

                const message =
                    contactForm.elements["message"]
                        ?.value
                        .trim();


                /* -----------------------------------------
                   BASIC VALIDATION
                   ----------------------------------------- */

                if (!name) {

                    alert(
                        "Please enter your full name."
                    );

                    contactForm.elements["name"].focus();

                    return;
                }


                if (!email) {

                    alert(
                        "Please enter your email address."
                    );

                    contactForm.elements["email"].focus();

                    return;
                }


                /* Email validation */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {

                    alert(
                        "Please enter a valid email address."
                    );

                    contactForm.elements["email"].focus();

                    return;
                }


                if (!service) {

                    alert(
                        "Please select a service."
                    );

                    contactForm.elements["service"].focus();

                    return;
                }


                if (!message) {

                    alert(
                        "Please enter a message."
                    );

                    contactForm.elements["message"].focus();

                    return;
                }


                /* -----------------------------------------
                   SUBMIT BUTTON
                   ----------------------------------------- */

                const submitButton =
                    contactForm.querySelector(
                        'button[type="submit"]'
                    );

                const originalText =
                    submitButton
                        ? submitButton.textContent
                        : "Send Enquiry";


                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.textContent =
                        "Preparing...";
                }


                /* -----------------------------------------
                   CREATE MAILTO
                   
                   IMPORTANT:
                   Replace the email address below with
                   your actual CDG business email.
                   ----------------------------------------- */

                const recipient =
                    "YOUR-EMAIL@example.com";


                const subject =
                    encodeURIComponent(
                        `Website Enquiry - ${service}`
                    );


                const body =
                    encodeURIComponent(
`Hello Creative Development Group,

I would like to enquire about your services.

Name:
${name}

Email:
${email}

Service Required:
${service}

Message:
${message}

Kind regards,
${name}`
                    );


                /* -----------------------------------------
                   OPEN EMAIL CLIENT
                   ----------------------------------------- */

                window.location.href =
                    `mailto:${recipient}?subject=${subject}&body=${body}`;


                /* -----------------------------------------
                   RESET BUTTON
                   ----------------------------------------- */

                setTimeout(() => {

                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.textContent =
                            originalText;
                    }

                }, 2000);

            }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
       Highlights the current section while scrolling
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const desktopNavLinks =
        document.querySelectorAll(
            '#mainNav a[href^="#"]'
        );


    const updateActiveNavigation = () => {

        let currentSection = "";

        const scrollPosition =
            window.scrollY +
            120;


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


        desktopNavLinks.forEach((link) => {

            link.classList.remove("active-link");

            const href =
                link.getAttribute("href");

            if (
                href === `#${currentSection}` &&
                !link.classList.contains(
                    "nav-quote"
                )
            ) {

                link.classList.add(
                    "active-link"
                );
            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       CURRENT YEAR
       Automatically updates footer year
       ===================================================== */

    const footer =
        document.querySelector(
            ".footer-bottom"
        );

    if (footer) {

        const currentYear =
            new Date().getFullYear();

        footer.innerHTML =
            footer.innerHTML.replace(
                "2019–2026",
                `2019–${currentYear}`
            );
    }

});
```
