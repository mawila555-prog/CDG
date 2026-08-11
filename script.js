/* =========================================================
   CREATIVE DEVELOPMENT GROUP
   WEBSITE JAVASCRIPT
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           ELEMENTS
        ====================================================== */

        const header =
            document.getElementById(
                "siteHeader"
            );


        const menuToggle =
            document.getElementById(
                "menuToggle"
            );


        const nav =
            document.getElementById(
                "nav"
            );


        const backToTop =
            document.getElementById(
                "backToTop"
            );


        const contactForm =
            document.getElementById(
                "contactForm"
            );


        const serviceSelect =
            document.getElementById(
                "service"
            );


        const yearElement =
            document.getElementById(
                "year"
            );


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

        if (
            menuToggle &&
            nav
        ) {


            menuToggle.addEventListener(
                "click",
                function () {


                    const isOpen =
                        nav.classList.toggle(
                            "active"
                        );


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


            /* CLOSE MENU AFTER LINK CLICK */

            nav.querySelectorAll("a")
                .forEach(
                    function (link) {


                        link.addEventListener(
                            "click",
                            function () {


                                nav.classList.remove(
                                    "active"
                                );


                                menuToggle
                                    .classList
                                    .remove(
                                        "active"
                                    );


                                menuToggle.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );


                            }
                        );


                    }
                );


            /* RESET MENU WHEN RETURNING TO PC */

            window.addEventListener(
                "resize",
                function () {


                    if (
                        window.innerWidth >
                        850
                    ) {


                        nav.classList.remove(
                            "active"
                        );


                        menuToggle
                            .classList
                            .remove(
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


                header.classList.toggle(
                    "scrolled",
                    window.scrollY > 20
                );


            }


            if (backToTop) {


                backToTop.classList.toggle(
                    "show",
                    window.scrollY > 600
                );


            }


        }


        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true
            }
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
           SERVICE SELECTION
        ====================================================== */

        const serviceLinks =
            document.querySelectorAll(
                "[data-service]"
            );


        serviceLinks.forEach(
            function (link) {


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


            }
        );


        /* =====================================================
           CONTACT FORM TO WHATSAPP
        ====================================================== */

        if (contactForm) {


            contactForm.addEventListener(
                "submit",
                function (event) {


                    event.preventDefault();


                    const name =
                        document
                            .getElementById(
                                "name"
                            )
                            .value
                            .trim();


                    const phone =
                        document
                            .getElementById(
                                "phone"
                            )
                            .value
                            .trim();


                    const service =
                        document
                            .getElementById(
                                "service"
                            )
                            .value;


                    const message =
                        document
                            .getElementById(
                                "message"
                            )
                            .value
                            .trim();


                    /* VALIDATION */

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


                    /* MESSAGE */

                    const whatsappMessage =
`Hello Creative Development Group,

I would like to request a quotation.

Name: ${name}
Contact Number: ${phone}
Service Required: ${service}

Requirements:
${message}

Thank you.`;


                    /* WHATSAPP LINK */

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
           SMOOTH INTERNAL LINKS
        ====================================================== */

        const internalLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        internalLinks.forEach(
            function (link) {


                link.addEventListener(
                    "click",
                    function (event) {


                        const targetID =
                            link.getAttribute(
                                "href"
                            );


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


                        if (!targetElement) {

                            return;

                        }


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
                            8;


                        window.scrollTo({

                            top: targetPosition,

                            behavior: "smooth"

                        });


                    }
                );


            }
        );


        /* =====================================================
           ESCAPE CLOSES MOBILE MENU
        ====================================================== */

        document.addEventListener(
            "keydown",
            function (event) {


                if (
                    event.key ===
                    "Escape" &&
                    nav &&
                    menuToggle
                ) {


                    nav.classList.remove(
                        "active"
                    );


                    menuToggle
                        .classList
                        .remove(
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
);
